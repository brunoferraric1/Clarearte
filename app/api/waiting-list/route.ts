import { NextRequest, NextResponse } from 'next/server'
import { client, writeClient } from '@/sanity/lib/client'

export async function POST(request: NextRequest) {
  try {
    // Verify token is set and log its format (first/last 4 chars only for security)
    const token = process.env.SANITY_API_WRITE_TOKEN
    if (!token) {
      console.error('SANITY_API_WRITE_TOKEN is not set')
      return NextResponse.json(
        { error: 'Server configuration error: Write token not configured' },
        { status: 500 }
      )
    }
    
    // Log token info for debugging (safe - only shows length and start/end)
    console.log('Token info:', {
      length: token.length,
      prefix: token.substring(0, 4),
      suffix: token.substring(token.length - 4),
      startsWithSk: token.startsWith('sk'),
    })

    const body = await request.json()
    const { email, lang } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingEmail = await client.fetch(
      `*[_type == "waitingListEmail" && email == $email && status == "active"][0]`,
      { email }
    )

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    // Create new waiting list entry
    const result = await writeClient.create({
      _type: 'waitingListEmail',
      email: email.toLowerCase().trim(),
      language: lang || 'es',
      subscribedAt: new Date().toISOString(),
      status: 'active',
    })

    // Optional: Integrate with email service here (see below)
    // await addToEmailService(email, lang)

    return NextResponse.json(
      { 
        success: true, 
        id: result._id,
        message: 'Successfully added to waiting list' 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error adding email to waiting list:', error)
    
    // Provide more specific error messages
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    // Check if it's a permission error
    if (errorMessage.includes('permission') || errorMessage.includes('Insufficient permissions')) {
      return NextResponse.json(
        { 
          error: 'Token does not have create permissions. Please recreate the token with Editor role (not just individual permissions).' 
        },
        { status: 403 }
      )
    }
    
    // Check if it's a token/auth error
    if (errorMessage.includes('token') || errorMessage.includes('unauthorized') || errorMessage.includes('authentication')) {
      return NextResponse.json(
        { error: 'Server configuration error. Please check SANITY_API_WRITE_TOKEN.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: `Failed to add email to waiting list: ${errorMessage}` },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve waiting list (for admin use)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'active'
    const limit = parseInt(searchParams.get('limit') || '100')

    const emails = await client.fetch(
      `*[_type == "waitingListEmail" && status == $status] | order(subscribedAt desc) [0...$limit] {
        _id,
        email,
        language,
        subscribedAt,
        status
      }`,
      { status, limit }
    )

    return NextResponse.json({ emails, count: emails.length })
  } catch (error) {
    console.error('Error fetching waiting list:', error)
    return NextResponse.json(
      { error: 'Failed to fetch waiting list' },
      { status: 500 }
    )
  }
}


# Waiting List Email Storage Setup

This document explains how the waiting list email storage works and how to integrate with email marketing services for promotional campaigns.

## Current Implementation

### Storage: Sanity CMS ✅

Emails are stored in **Sanity CMS** using a custom document type `waitingListEmail`. This allows you to:

- ✅ View and manage all subscribed emails in Sanity Studio (`/studio`)
- ✅ See subscription date, language preference, and status
- ✅ Export emails when needed
- ✅ Track unsubscribes and manage subscriber status
- ✅ No additional database or infrastructure needed

### How It Works

1. **User submits email** → Frontend calls `/api/waiting-list`
2. **API validates email** → Checks format and prevents duplicates
3. **Saves to Sanity** → Creates a `waitingListEmail` document
4. **Returns success** → User sees confirmation message

### Accessing Your Waiting List

**Via Sanity Studio:**
1. Navigate to `http://localhost:5174/studio` (or your production URL)
2. Find "Waiting List Email" in the sidebar
3. View, search, and manage all subscribers

**Via API (for export):**
```bash
# Get all active emails
GET /api/waiting-list?status=active&limit=1000

# Response:
{
  "emails": [
    {
      "_id": "...",
      "email": "user@example.com",
      "language": "pt",
      "subscribedAt": "2025-01-26T10:00:00Z",
      "status": "active"
    }
  ],
  "count": 42
}
```

## Optional: Email Marketing Service Integration

For sending promotional emails, you have several options:

### Option 1: Resend (Recommended) ⭐

**Resend** is modern, developer-friendly, and works great with Next.js.

**Setup:**
1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Get your API key
3. Install Resend:
```bash
npm install resend
```

4. Add to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

5. Update `/app/api/waiting-list/route.ts`:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Inside POST handler, after saving to Sanity:
try {
  // Add to Resend audience (optional - for managing contacts)
  await resend.contacts.create({
    email: email.toLowerCase().trim(),
    firstName: '', // You can collect this later
    unsubscribed: false,
  })

  // Or send welcome email immediately:
  await resend.emails.send({
    from: 'Paola <paola@clarearte.com>',
    to: email,
    subject: lang === 'pt' 
      ? 'Bem-vinda à lista de espera da ClareArte!' 
      : '¡Bienvenida a la lista de espera de ClareArte!',
    html: `<p>Obrigada por se inscrever!</p>`, // Customize your welcome email
  })
} catch (error) {
  console.error('Resend error (non-blocking):', error)
  // Don't fail the subscription if Resend fails
}
```

**Benefits:**
- ✅ Easy API integration
- ✅ Good free tier
- ✅ Built-in contact management
- ✅ Email templates support
- ✅ Analytics and tracking

### Option 2: Mailchimp

**Setup:**
1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create an audience/list
3. Get your API key
4. Install Mailchimp SDK:
```bash
npm install @mailchimp/mailchimp_marketing
```

5. Add to `.env.local`:
```env
MAILCHIMP_API_KEY=xxxxxxxxxxxxx-us1
MAILCHIMP_LIST_ID=xxxxxxxxxxxxx
```

6. Update API route:
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1', // Change based on your server
})

// Inside POST handler:
try {
  await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    email_address: email.toLowerCase().trim(),
    status: 'subscribed',
    language: lang,
  })
} catch (error) {
  console.error('Mailchimp error (non-blocking):', error)
}
```

**Benefits:**
- ✅ Full-featured email marketing platform
- ✅ Drag-and-drop email builder
- ✅ Advanced segmentation
- ✅ A/B testing
- ⚠️ More complex setup

### Option 3: SendGrid

**Setup:**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Install SendGrid:
```bash
npm install @sendgrid/mail
```

4. Add to `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

5. Update API route:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Inside POST handler:
try {
  await sgMail.send({
    to: email,
    from: 'paola@clarearte.com',
    subject: 'Welcome to ClareArte waiting list!',
    html: '<p>Thank you for subscribing!</p>',
  })
} catch (error) {
  console.error('SendGrid error (non-blocking):', error)
}
```

### Option 4: Export and Use External Tool

If you prefer to manage campaigns outside your codebase:

1. **Export emails from Sanity:**
   - Use the GET endpoint: `GET /api/waiting-list?status=active&limit=1000`
   - Or export directly from Sanity Studio

2. **Import to your preferred tool:**
   - Mailchimp, ConvertKit, Brevo, etc.
   - Most tools support CSV import

## Best Practices

### 1. Privacy & Compliance

- ✅ Always include unsubscribe links in emails
- ✅ Respect GDPR/CCPA requirements
- ✅ Store consent timestamps
- ✅ Provide privacy policy link

### 2. Email Validation

The current implementation:
- ✅ Validates email format
- ✅ Prevents duplicate subscriptions
- ✅ Normalizes emails (lowercase, trimmed)

### 3. Error Handling

- ✅ API gracefully handles failures
- ✅ User sees appropriate error messages
- ✅ Duplicate emails are detected
- ✅ Non-blocking email service integration (won't fail subscription if email service fails)

### 4. Future Enhancements

Consider adding:
- [ ] Double opt-in (send confirmation email)
- [ ] Email preferences (frequency, topics)
- [ ] Segment by language automatically
- [ ] Welcome email automation
- [ ] Unsubscribe functionality
- [ ] Analytics tracking (open rates, clicks)

## Testing

Test the waiting list:

1. **Start dev server:**
```bash
npm run dev
```

2. **Visit waiting list page:**
```
http://localhost:5174/es/waiting-list
http://localhost:5174/pt/waiting-list
```

3. **Submit test email:**
- Use a valid email format
- Try duplicate to see error handling
- Check Sanity Studio to verify storage

4. **Test API directly:**
```bash
curl -X POST http://localhost:5174/api/waiting-list \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","lang":"pt"}'
```

## Exporting Emails for Campaigns

### Method 1: Via Sanity Studio
1. Go to `/studio`
2. Filter by status = "active"
3. Select all emails
4. Export as CSV or JSON

### Method 2: Via API Script
Create a script to export all emails:

```typescript
// scripts/export-waiting-list.ts
import { client } from '@/sanity/lib/client'

async function exportEmails() {
  const emails = await client.fetch(
    `*[_type == "waitingListEmail" && status == "active"] | order(subscribedAt desc) {
      email,
      language,
      subscribedAt
    }`
  )

  // Convert to CSV
  const csv = [
    'Email,Language,Subscribed At',
    ...emails.map(e => `${e.email},${e.language},${e.subscribedAt}`)
  ].join('\n')

  console.log(csv)
  // Or save to file
}

exportEmails()
```

## Production Deployment (Vercel)

⚠️ **IMPORTANT:** Environment variables in `.env.local` are **only for local development**. They are **NOT deployed to production**.

### Setting Up Environment Variables in Vercel

To make the waiting list work in production, you **must** add `SANITY_API_WRITE_TOKEN` to your Vercel project:

1. **Go to Vercel Dashboard:**
   - Navigate to https://vercel.com/dashboard
   - Select your project

2. **Open Settings → Environment Variables:**
   - Click on your project
   - Go to **Settings** tab
   - Click **Environment Variables** in the sidebar

3. **Add the Write Token:**
   - **Key**: `SANITY_API_WRITE_TOKEN`
   - **Value**: Your token (starts with `sk...`)
   - **Environment**: Select all environments (Production, Preview, Development)
   - Click **Save**

4. **Redeploy:**
   - After adding the variable, go to **Deployments**
   - Click the **"..."** menu on the latest deployment
   - Select **Redeploy** (or push a new commit to trigger a new deployment)

### Required Environment Variables for Production

Make sure these are set in Vercel:
- ✅ `SANITY_API_WRITE_TOKEN` - **Required** for waiting list API
- ✅ `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- ✅ `NEXT_PUBLIC_SANITY_DATASET` - Your dataset name (e.g., "production")
- ✅ `NEXT_PUBLIC_SANITY_API_VERSION` - API version (default: "2025-01-26")

### Verifying Production Setup

After deploying, test the waiting list:

```bash
# Test production endpoint
curl -X POST https://your-domain.com/api/waiting-list \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","lang":"pt"}'
```

### Common Production Issues

**Error: "Server configuration error: Write token not configured"**
- ✅ **Solution**: Add `SANITY_API_WRITE_TOKEN` to Vercel environment variables
- ✅ **Verify**: Token should be available in all environments (Production, Preview, Development)
- ✅ **Redeploy**: Environment variables are only applied on new deployments

**Error: "Token does not have create permissions"**
- ✅ **Solution**: Recreate token with **Editor** permissions (not Viewer)
- ✅ Use `sanity tokens create` CLI command for reliable setup

## Summary

**Current Setup:**
- ✅ Emails stored in Sanity CMS
- ✅ Accessible via Sanity Studio
- ✅ API endpoint for programmatic access
- ✅ Duplicate prevention
- ✅ Language tracking

**Production Checklist:**
- ✅ Add `SANITY_API_WRITE_TOKEN` to Vercel environment variables
- ✅ Add other Sanity env vars to Vercel
- ✅ Redeploy after adding environment variables
- ✅ Test production endpoint after deployment

**Recommended Next Steps:**
1. ✅ Set up email service integration (Resend recommended)
2. ✅ Add welcome email automation
3. ✅ Create email templates for campaigns
4. ✅ Set up analytics tracking
5. ✅ Add unsubscribe functionality

**For promotional campaigns:**
- Use Sanity Studio to view/manage subscribers
- Export via API when needed
- Integrate with email service for sending
- Track opens/clicks via email service analytics


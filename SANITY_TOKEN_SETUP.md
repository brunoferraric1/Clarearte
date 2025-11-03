# Setting Up Sanity Write Token - Fix for "project user not found" Error

## The Problem

If you're getting the error: `"project user not found for user ID"`, it means the token wasn't created correctly or isn't associated with your project.

## Solution: Create Token via Sanity CLI (Recommended)

The easiest way to create a token with the correct permissions is using the Sanity CLI:

### Step 1: Install Sanity CLI (if not already installed)
```bash
npm install -g @sanity/cli
```

### Step 2: Login to Sanity
```bash
sanity login
```

### Step 3: Create a Write Token
Navigate to your project directory and run:
```bash
sanity tokens create
```

When prompted:
- **Name**: `Write Token` (or any name you prefer)
- **Select project**: Choose your project (`mc6ib0v3` based on the error)
- **Permission**: Select **Editor** (this gives read + write access)

### Step 4: Copy the Token
The CLI will output a token that looks like:
```
skxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 5: Add to .env.local
Add this line to your `.env.local` file:
```env
SANITY_API_WRITE_TOKEN="skxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Step 6: Restart Dev Server
```bash
# Stop server (Ctrl+C) and restart
npm run dev
```

## Alternative: Create Token via Web Dashboard

If you prefer using the web interface:

### Step 1: Go to Your Project (NOT Organization)
1. Go to https://www.sanity.io/manage
2. **Important**: Click on your specific **PROJECT** (not the organization)
3. You should see your project ID in the URL: `https://www.sanity.io/manage/project/mc6ib0v3`

### Step 2: Navigate to API Tokens
1. In the project dashboard, go to **API** → **Tokens**
2. Click **"Add API token"**

### Step 3: Configure Token
- **Name**: `Write Token`
- **Permissions**: You need to select permissions that give write access
  - Look for **"Editor"** permission option
  - OR select **"Editor"** under **"Canvas"** (this controls document write access)
  - Make sure it's NOT a "Deploy Studios" token - that's different

### Step 4: Copy and Save Token
- Copy the token immediately (you won't see it again)
- Add to `.env.local` as `SANITY_API_WRITE_TOKEN`
- Restart your dev server

## Verify Token Works

After adding the token, test it:

```bash
# Check if token is set
echo $SANITY_API_WRITE_TOKEN

# Or test the API endpoint
curl -X POST http://localhost:5174/api/waiting-list \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","lang":"es"}'
```

## Troubleshooting

### Still Getting "project user not found"?

1. **Verify you're in the correct project**:
   - Check that your `NEXT_PUBLIC_SANITY_PROJECT_ID` matches the project ID in the error (`mc6ib0v3`)
   - Make sure you created the token in the SAME project

2. **Try creating token via CLI** (most reliable method):
   ```bash
   sanity tokens create
   ```

3. **Check token format**:
   - Should start with `sk` (service token)
   - Should be a long string (40+ characters)
   - No spaces or line breaks

4. **Verify environment variable**:
   - Make sure `.env.local` exists in project root
   - No quotes around the token value (or proper quotes if it contains special chars)
   - Restart dev server after adding token

5. **Check token permissions**:
   - Token must have Editor permissions (read + write)
   - Not just Viewer (read-only)

## Using Sanity CLI Token Creation (Easiest Method)

The CLI method is recommended because it:
- ✅ Automatically associates token with correct project
- ✅ Sets correct permissions
- ✅ Guarantees token works for API writes

Run:
```bash
sanity tokens create
```

Follow the prompts, and you'll get a token that definitely works!

## Production Deployment (Vercel)

⚠️ **CRITICAL:** After setting up the token locally, you **must** add it to Vercel for production.

### Adding Token to Vercel

1. **Get your token** from `.env.local` (should start with `sk...`)

2. **Go to Vercel Dashboard:**
   - Navigate to https://vercel.com/dashboard
   - Select your Clarearte project

3. **Add Environment Variable:**
   - Go to **Settings** → **Environment Variables**
   - Click **Add New**
   - **Key**: `SANITY_API_WRITE_TOKEN`
   - **Value**: Paste your token (the same one from `.env.local`)
   - **Environment**: Check all (Production, Preview, Development)
   - Click **Save**

4. **Redeploy:**
   - Environment variables only apply to new deployments
   - Go to **Deployments** → Click **"..."** → **Redeploy**
   - Or push a new commit to trigger automatic deployment

### Why This is Needed

- `.env.local` files are **never deployed** to production (they're in `.gitignore`)
- Vercel needs environment variables configured in their dashboard
- Without `SANITY_API_WRITE_TOKEN` in Vercel, you'll get: *"Server configuration error: Write token not configured"* in production

### Verify Production Setup

After deploying, test the API:
```bash
# Replace with your actual production URL
curl -X POST https://your-domain.com/api/waiting-list \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","lang":"pt"}'
```

If successful, you should get a `201` response with `"success": true`.


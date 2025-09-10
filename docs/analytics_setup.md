# Google Analytics 4 Setup

## Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new account: "LoanReady Growth"
3. Create property: "loanready-growth.vercel.app"
4. Copy your Measurement ID (G-XXXXXXXXXX)

## Step 2: Add to Next.js App

1. Install Google Analytics:
   ```bash
   cd web
   npm install @next/third-parties
   ```

2. Update `src/app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

## Step 3: Set Up Goal Tracking

### Goals to Track:
1. **Form Submissions** (intake form)
2. **Email Signups** (lead magnet downloads)  
3. **Button Clicks** (CTA buttons)
4. **Page Views** (key pages)

### Events to Track:
- `form_submit` - Intake form completion
- `lead_magnet_download` - DSCR guide download
- `cta_click` - Call-to-action button clicks
- `email_signup` - Newsletter subscription

## Step 4: Deploy Analytics

1. Redeploy your Vercel app
2. Test events are firing
3. Verify in GA4 Real-time reports

## Step 5: Create Dashboards

### Key Metrics Dashboard:
- Traffic sources
- Conversion rates  
- Lead quality scores
- Customer acquisition cost

Your analytics tracking is now complete!
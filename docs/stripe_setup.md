# Stripe Payment Processing Setup

## Step 1: Create Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Sign up for account
3. Complete business verification
4. Get your API keys from Dashboard

## Step 2: Create Products in Stripe

### Product 1: DSCR Health Check
- **Name:** DSCR Health Check
- **Price:** $197 USD
- **Type:** One-time payment
- **Description:** Complete DSCR analysis with improvement recommendations

### Product 2: 90-Day Bankability Sprint  
- **Name:** 90-Day Bankability Sprint
- **Price:** $3,997 USD
- **Type:** One-time payment
- **Description:** Complete restaurant transformation program

## Step 3: Integration Options

### Option A: Stripe Payment Links (Easiest)
1. Create Payment Links in Stripe Dashboard
2. Update your landing page buttons with these links
3. No coding required

### Option B: Custom Integration (Advanced)
1. Install Stripe in your Next.js app:
   ```bash
   cd web
   npm install @stripe/stripe-js stripe
   ```

2. Add environment variables to Vercel:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`

3. Create payment components (code provided in integration docs)

## Step 4: Test Payments

1. Use Stripe test mode
2. Test card: 4242 4242 4242 4242
3. Verify webhooks are working
4. Test successful and failed payments

## Step 5: Go Live

1. Switch to live mode in Stripe
2. Update environment variables
3. Test with real payment method
4. Monitor transactions in Dashboard

Your payment processing is now ready!
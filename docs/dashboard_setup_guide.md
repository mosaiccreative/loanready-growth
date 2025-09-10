# Google Data Studio Dashboard Setup Guide

## Step 1: Create Sample Customer Data Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet: "LoanReady Customer Dashboard"
3. Use the sample data from `/sample-data/dashboard_data.csv`
4. Copy this data into your sheet

## Step 2: Create Data Studio Dashboard

1. Go to [datastudio.google.com](https://datastudio.google.com)
2. Click **Create > Report**
3. Add data source: **Google Sheets**
4. Connect to your "LoanReady Customer Dashboard" sheet

## Step 3: Build Dashboard Components

### Executive Summary (Top)
- **Scorecard:** Current DSCR
  - Metric: DSCR (latest value)
  - Comparison: Previous period
  - Color: Green if >1.25, Yellow 1.2-1.25, Red <1.2

- **Gauge Chart:** DSCR Progress
  - Metric: DSCR
  - Min: 1.0, Max: 1.5
  - Green zone: 1.25+

### Revenue Performance
- **Time Series:** Daily Revenue
  - Date dimension: Date
  - Metric: Daily_Revenue
  - Goal line at revenue target

- **Bar Chart:** Weekly Revenue
  - Dimension: Week_Number  
  - Metric: Average Daily_Revenue

### Strategy Implementation
- **Table:** Strategy Progress
  - Dimensions: Week_Number, Strategy_Implemented
  - Metrics: Average DSCR, Revenue Growth

## Step 4: Customize Branding

1. **Add LoanReady Growth logo** (create simple text logo)
2. **Color scheme:**
   - Primary: #1e40af (blue)
   - Accent: #f97316 (orange)
   - Background: White
3. **Title:** "Restaurant DSCR Dashboard"

## Step 5: Share Dashboard Template

1. Click **Share** button
2. Set to "Anyone with link can view"
3. Copy the shareable link
4. This becomes your template URL

## Step 6: Customer Onboarding Process

For each new customer:
1. Copy the template dashboard
2. Connect to their specific data sheet
3. Customize restaurant name and goals
4. Share view-only access with customer

Your dashboard template is now ready for customer use!
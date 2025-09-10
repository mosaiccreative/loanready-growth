# Google Sheets Integration Setup

## Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet named "LoanReady Growth Leads"
3. Add these column headers in Row 1:
   - A1: Timestamp
   - B1: Business_Name  
   - C1: Owner_Name
   - D1: Email
   - E1: Phone
   - F1: Location
   - G1: Years_In_Business
   - H1: Monthly_Revenue
   - I1: Monthly_Expenses
   - J1: Loan_Amount
   - K1: Loan_Purpose
   - L1: Loan_Denied
   - M1: Know_DSCR
   - N1: DSCR_Value
   - O1: Biggest_Challenge
   - P1: Hear_About_Us
   - Q1: Lead_Score

## Step 2: Create Google Apps Script

1. In your sheet, go to **Extensions > Apps Script**
2. Replace the default code with this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Calculate lead score
  var score = 0;
  if (data.monthlyRevenue && data.monthlyRevenue.includes('30k')) score += 20;
  if (data.yearsInBusiness && data.yearsInBusiness !== '0-1') score += 15;
  if (data.loanAmount && data.loanAmount.includes('100k')) score += 10;
  if (data.loanDenied === 'yes') score += 25;
  
  // Add row to sheet
  sheet.appendRow([
    new Date(),
    data.businessName,
    data.ownerName,
    data.email,
    data.phone,
    data.location,
    data.yearsInBusiness,
    data.monthlyRevenue,
    data.monthlyExpenses,
    data.loanAmount,
    data.loanPurpose,
    data.loanDenied,
    data.knowDSCR,
    data.dscrValue,
    data.biggestChallenge,
    data.hearAboutUs,
    score
  ]);
  
  return ContentService.createTextOutput('Success');
}
```

3. Save the script
4. Deploy as Web App:
   - Click **Deploy > New Deployment**
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Click **Deploy**
   - Copy the Web App URL

## Step 3: Update Intake Form

Update `/intake/index.html` line 109 in the JavaScript section:

```javascript
// Replace this line:
console.log('Form data:', data);

// With this (using your Web App URL):
fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
  method: 'POST',
  body: JSON.stringify(data)
});
```

## Step 4: Test Integration

1. Fill out your intake form
2. Check if data appears in Google Sheet
3. Verify lead scoring is working

Your intake form will now automatically save leads to Google Sheets!
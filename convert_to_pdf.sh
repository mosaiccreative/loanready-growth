#!/bin/bash
# Convert LoanReady Growth documents to PDF

echo "Converting LoanReady Growth documents to PDF..."

# Check if pandoc is available
if ! command -v pandoc &> /dev/null; then
    echo "Installing pandoc..."
    # Try different package managers
    if command -v brew &> /dev/null; then
        brew install pandoc
    elif command -v apt-get &> /dev/null; then
        sudo apt-get install pandoc
    else
        echo "Please install pandoc manually: https://pandoc.org/installing.html"
        exit 1
    fi
fi

# Create PDFs directory
mkdir -p pdfs

# Convert business plan
echo "Converting business plan..."
pandoc business_plan.md -o pdfs/LoanReady_Growth_Business_Plan.pdf \
    --metadata title="LoanReady Growth Business Plan" \
    --metadata author="LoanReady Growth" \
    --metadata date="$(date +%Y-%m-%d)" \
    --pdf-engine=xelatex

# Convert pitch deck  
echo "Converting pitch deck..."
pandoc pitch_deck.md -o pdfs/LoanReady_Growth_Pitch_Deck.pdf \
    --metadata title="LoanReady Growth Investor Pitch" \
    --metadata author="LoanReady Growth" \
    --metadata date="$(date +%Y-%m-%d)" \
    --pdf-engine=xelatex

# Convert bank package
echo "Converting bank package..."
pandoc bank_package_onepager.md -o pdfs/LoanReady_Growth_Bank_Package.pdf \
    --metadata title="LoanReady Growth Bank Partnership" \
    --metadata author="LoanReady Growth" \
    --metadata date="$(date +%Y-%m-%d)" \
    --pdf-engine=xelatex

# Convert DSCR guide
echo "Converting DSCR Health Check guide..."
pandoc assets/dscr_health_check.md -o pdfs/DSCR_Health_Check_Guide.pdf \
    --metadata title="DSCR Health Check Guide" \
    --metadata author="LoanReady Growth" \
    --metadata date="$(date +%Y-%m-%d)" \
    --pdf-engine=xelatex

echo ""
echo "PDF conversion complete! Files saved in /pdfs/ directory:"
ls -la pdfs/

echo ""
echo "Professional PDFs ready for:"
echo "✓ Investor presentations"  
echo "✓ Bank partnerships"
echo "✓ Customer lead magnets"
echo "✓ Business documentation"
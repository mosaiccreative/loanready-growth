#!/bin/bash
# LoanReady Growth Telegram Bot Setup

echo "Setting up Telegram Bot for LoanReady Growth..."

# Instructions for user
echo ""
echo "1. Message @BotFather on Telegram"
echo "2. Type /newbot and create 'LoanReady Growth Bot'"
echo "3. Copy your bot token"
echo "4. Message your bot to start a chat"
echo "5. Visit https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates to get chat ID"
echo ""

# Prompt for tokens
read -p "Enter your BOT_TOKEN: " BOT_TOKEN
read -p "Enter your CHAT_ID: " CHAT_ID

# Export environment variables
export BOT_TOKEN="$BOT_TOKEN"
export CHAT_ID="$CHAT_ID"

# Add to bash profile for persistence
echo "export BOT_TOKEN=\"$BOT_TOKEN\"" >> ~/.bash_profile
echo "export CHAT_ID=\"$CHAT_ID\"" >> ~/.bash_profile

echo "Environment variables set!"
echo ""

# Test the bot
cd scripts
echo "Testing bot..."
python3 telegram_bot.py &

echo "Bot is running! Check your Telegram for startup message."
echo "To stop the bot later, run: pkill -f telegram_bot.py"
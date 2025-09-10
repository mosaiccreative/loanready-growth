#!/usr/bin/env python3
"""
LoanReady Growth Telegram Notification Bot

This bot sends notifications to the user when Claude needs manual intervention
such as API keys, credentials, or domain setup.

Setup Instructions:
1. Create a Telegram bot: Message @BotFather on Telegram and create a new bot
2. Get your bot token from BotFather
3. Get your chat ID by messaging your bot and visiting: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
4. Set environment variables: BOT_TOKEN and CHAT_ID
5. Run this script to start monitoring

Usage:
python3 telegram_bot.py
"""

import os
import time
import logging
import requests
import json
from datetime import datetime
from typing import Optional

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('telegram_bot.log'),
        logging.StreamHandler()
    ]
)

class LoanReadyTelegramBot:
    def __init__(self):
        self.bot_token = os.getenv('BOT_TOKEN')
        self.chat_id = os.getenv('CHAT_ID')
        self.base_url = f'https://api.telegram.org/bot{self.bot_token}'
        
        if not self.bot_token or not self.chat_id:
            logging.error("BOT_TOKEN and CHAT_ID environment variables must be set")
            self.send_setup_instructions()
            return
            
        self.is_active = True
        logging.info("LoanReady Growth Telegram Bot initialized")
        self.send_startup_message()
    
    def send_setup_instructions(self):
        """Print setup instructions if bot credentials are missing"""
        print("\n" + "="*60)
        print("TELEGRAM BOT SETUP REQUIRED")
        print("="*60)
        print("1. Message @BotFather on Telegram")
        print("2. Create a new bot with /newbot command")
        print("3. Get your bot token from BotFather")
        print("4. Message your bot, then visit:")
        print("   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates")
        print("5. Find your chat ID in the response")
        print("6. Set environment variables:")
        print("   export BOT_TOKEN='your_bot_token_here'")
        print("   export CHAT_ID='your_chat_id_here'")
        print("7. Run this script again")
        print("="*60)
    
    def send_message(self, message: str, parse_mode: str = 'Markdown') -> bool:
        """Send a message to the configured chat"""
        if not self.bot_token or not self.chat_id:
            logging.error("Bot not properly configured")
            return False
            
        url = f'{self.base_url}/sendMessage'
        payload = {
            'chat_id': self.chat_id,
            'text': message,
            'parse_mode': parse_mode
        }
        
        try:
            response = requests.post(url, json=payload)
            if response.status_code == 200:
                logging.info("Message sent successfully")
                return True
            else:
                logging.error(f"Failed to send message: {response.status_code} - {response.text}")
                return False
        except Exception as e:
            logging.error(f"Error sending message: {e}")
            return False
    
    def send_startup_message(self):
        """Send bot startup notification"""
        message = """
🚀 **LoanReady Growth Bot Active**

The automation bot is now running and will notify you when manual action is required.

**What I'll notify you about:**
• API keys needed
• OAuth authentication required  
• Domain setup tasks
• Deployment issues
• Credential verification needed

Status: ✅ **Ready and monitoring**
        """
        self.send_message(message)
    
    def send_manual_action_required(self, task: str, details: str, priority: str = "Normal"):
        """Send notification when Claude needs manual intervention"""
        emoji_map = {
            "High": "🔴",
            "Normal": "🟡", 
            "Low": "🟢"
        }
        
        emoji = emoji_map.get(priority, "🟡")
        
        message = f"""
{emoji} **Manual Action Required**

**Task:** {task}
**Priority:** {priority}
**Time:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

**Details:**
{details}

Please complete this action so the automation can continue.
        """
        self.send_message(message)
    
    def send_deployment_update(self, service: str, status: str, url: Optional[str] = None):
        """Send deployment status updates"""
        status_emoji = {
            "deploying": "🔄",
            "success": "✅", 
            "failed": "❌",
            "pending": "⏳"
        }
        
        emoji = status_emoji.get(status.lower(), "ℹ️")
        
        message = f"""
{emoji} **Deployment Update**

**Service:** {service}
**Status:** {status.title()}
**Time:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
        """
        
        if url:
            message += f"\n**URL:** {url}"
            
        self.send_message(message)
    
    def send_completion_notification(self, project: str, summary: str):
        """Send project completion notification"""
        message = f"""
🎉 **Project Completed: {project}**

**Summary:**
{summary}

**Time:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

All automated tasks have been completed successfully!
        """
        self.send_message(message)
    
    def listen_for_commands(self):
        """Listen for incoming commands (basic implementation)"""
        last_update_id = 0
        
        while self.is_active:
            try:
                url = f'{self.base_url}/getUpdates'
                params = {'offset': last_update_id + 1, 'timeout': 30}
                
                response = requests.get(url, params=params)
                
                if response.status_code == 200:
                    data = response.json()
                    
                    for update in data.get('result', []):
                        last_update_id = update['update_id']
                        
                        if 'message' in update:
                            message = update['message']
                            text = message.get('text', '').lower()
                            
                            if text == '/status':
                                self.send_status_update()
                            elif text == '/help':
                                self.send_help_message()
                            elif text == '/stop':
                                self.is_active = False
                                self.send_message("Bot stopped. Goodbye! 👋")
                                
            except Exception as e:
                logging.error(f"Error in command listener: {e}")
                time.sleep(5)
    
    def send_status_update(self):
        """Send current status"""
        message = """
📊 **LoanReady Growth Bot Status**

**Status:** Active and monitoring
**Uptime:** Running since startup
**Last Check:** Just now

**Available Commands:**
/status - Show this status
/help - Show help message  
/stop - Stop the bot

All systems operational ✅
        """
        self.send_message(message)
    
    def send_help_message(self):
        """Send help information"""
        message = """
🤖 **LoanReady Growth Bot Help**

This bot monitors the LoanReady Growth automation process and notifies you when manual intervention is needed.

**Commands:**
• `/status` - Check bot status
• `/help` - Show this help message
• `/stop` - Stop the bot

**Notifications:**
• Manual actions required
• Deployment updates  
• API key requests
• Completion notifications

The bot runs automatically and will message you when needed.
        """
        self.send_message(message)

def main():
    """Main bot execution"""
    bot = LoanReadyTelegramBot()
    
    if not bot.bot_token or not bot.chat_id:
        return
    
    try:
        logging.info("Starting command listener...")
        bot.listen_for_commands()
    except KeyboardInterrupt:
        logging.info("Bot stopped by user")
        bot.send_message("Bot stopped manually. Goodbye! 👋")
    except Exception as e:
        logging.error(f"Bot error: {e}")
        bot.send_message(f"Bot encountered an error: {e}")

# Convenience functions for Claude to use
def notify_manual_action(task: str, details: str, priority: str = "Normal"):
    """Quick function for Claude to send manual action notifications"""
    bot = LoanReadyTelegramBot()
    bot.send_manual_action_required(task, details, priority)

def notify_deployment(service: str, status: str, url: Optional[str] = None):
    """Quick function for Claude to send deployment notifications"""
    bot = LoanReadyTelegramBot()
    bot.send_deployment_update(service, status, url)

def notify_completion(project: str, summary: str):
    """Quick function for Claude to send completion notifications"""
    bot = LoanReadyTelegramBot()
    bot.send_completion_notification(project, summary)

if __name__ == "__main__":
    main()
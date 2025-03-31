// Create this file at: src/app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Get form data from request
    const formData = await request.json();
    const { name, email, subject, message } = formData;
    
    // Your Telegram bot token
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    // Your Telegram chat ID (your personal chat with the bot)
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!telegramToken || !telegramChatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    // Format message for Telegram
    const telegramMessage = `
📧 New Contact Form Submission 📧

Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
    `;
    
    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    );
    
    const telegramData = await telegramResponse.json();
    
    if (!telegramData.ok) {
      console.error('Telegram API error:', telegramData);
      return NextResponse.json(
        { success: false, message: 'Failed to send message to admin' },
        { status: 500 }
      );
    }
    
    // Optional: Save message to database here if needed
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

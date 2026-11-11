import fs from 'node:fs';
import path from 'node:path';
import { Resend } from 'resend';

// Automatically load .env.local or .env if present
const rootDir = process.cwd();
const envLocal = path.resolve(rootDir, '.env.local');
const envRoot = path.resolve(rootDir, '.env');

if (fs.existsSync(envLocal)) {
  try {
    process.loadEnvFile(envLocal);
  } catch (err) {
    console.warn('Notice: Could not parse .env.local:', err.message);
  }
} else if (fs.existsSync(envRoot)) {
  try {
    process.loadEnvFile(envRoot);
  } catch (err) {
    console.warn('Notice: Could not parse .env:', err.message);
  }
}

async function runEmailTest() {
  console.log('====================================================');
  console.log('   ZYNCWEB SOLUTIONS - EMAIL VERIFICATION TEST     ');
  console.log('====================================================\n');

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === '' || apiKey.startsWith('re_123456789_')) {
    console.error('❌ ERROR: RESEND_API_KEY is not configured.');
    console.error('\n👉 Please configure your actual Resend API key in `.env.local`:');
    console.error('   1. Get your API key from: https://resend.com/api-keys');
    console.error('   2. Create a `.env.local` file in the project root:');
    console.error('      RESEND_API_KEY="re_your_api_key_here"');
    console.error('      CONTACT_TO_EMAIL="info@zyncweb.dev"');
    console.error('      CONTACT_FROM_EMAIL="ZyncWeb Contact Form <onboarding@resend.dev>"\n');
    process.exit(1);
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ZyncWeb Contact Form <onboarding@resend.dev>';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@zyncweb.dev';

  console.log(`📤 Dispatching test email via Resend...`);
  console.log(`   From: ${fromEmail}`);
  console.log(`   To:   ${toEmail}`);

  const now = new Date();
  const istTime = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Kolkata',
  }).format(now);

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: 'test@zyncweb.dev',
      subject: `[TEST] ZyncWeb Solutions Contact Form Verification - ${now.toLocaleTimeString()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #3fbfb8; border-radius: 16px;">
          <h2 style="color: #0b132a; margin-top: 0;">ZyncWeb Solutions Email Delivery Test</h2>
          <p style="color: #00bba7; font-weight: bold;">✔ Direct Email Notification System is Operational</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Customer Name:</strong> Test Verifier</p>
          <p><strong>Customer Email:</strong> test@zyncweb.dev</p>
          <p><strong>Project Type:</strong> Web Development</p>
          <p><strong>Timestamp (IST):</strong> ${istTime}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 14px; border-left: 4px solid #3fbfb8; border-radius: 6px;">
            This is an automated verification email confirming that server-side contact form delivery is functioning properly.
          </div>
        </div>
      `,
      text: `ZyncWeb Solutions Email Delivery Test\n\nDirect Email Notification System is Operational.\nTimestamp: ${istTime}\nStatus: Verified`,
    });

    if (error) {
      console.error('\n❌ RESEND DISPATCH ERROR:');
      console.error(`   Message: ${error.message}`);

      if (error.message.includes('only send testing emails') || error.message.includes('verify your domain')) {
        console.error('\n💡 RESOLUTION:');
        console.error('   When using the free test sender (onboarding@resend.dev), Resend ONLY permits');
        console.error('   sending to the email address registered with your Resend account.');
        console.error('   To test right now:');
        console.error('   In `.env.local`, set CONTACT_TO_EMAIL to your personal Resend account email.');
        console.error('   To send to info@zyncweb.dev in production:');
        console.error('   Verify domain `zyncweb.dev` at https://resend.com/domains.');
      }

      process.exit(1);
    }

    console.log('\n====================================================');
    console.log('✅ TEST PASSED: Email delivered successfully!');
    console.log(`   Message ID: ${data?.id}`);
    console.log(`   Recipient:  ${toEmail}`);
    console.log('====================================================\n');
  } catch (err) {
    console.error('\n❌ UNEXPECTED ERROR:');
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}

runEmailTest();

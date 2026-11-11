import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// =============================================================================
// RATE LIMITING (Sliding window in-memory limiter)
// =============================================================================
interface RateLimitEntry {
  timestamps: number[];
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP
const rateLimitMap = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { timestamps: [] };

  // Keep only timestamps within the current window
  const recentTimestamps = entry.timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, { timestamps: recentTimestamps });
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: recentTimestamps });

  // Periodically cleanup expired entries to prevent memory bloat
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

// =============================================================================
// SANITIZATION HELPERS
// =============================================================================
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// =============================================================================
// EMAIL TEMPLATES (HTML + PLAIN TEXT)
// =============================================================================
interface EmailPayload {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
  submittedAtFormatted: string;
  submittedAtIso: string;
}

function generateContactEmailHtml({
  firstName,
  lastName,
  email,
  projectType,
  message,
  submittedAtFormatted,
  submittedAtIso,
}: EmailPayload): string {
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry - ZyncWeb Solutions</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
    <!-- HEADER -->
    <tr>
      <td style="background: linear-gradient(135deg, #0b132a 0%, #162447 100%); padding: 36px 32px; text-align: center;">
        <div style="font-size: 13px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #3fbfb8; margin-bottom: 8px;">
          ZYNCWEB SOLUTIONS
        </div>
        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.25;">
          New Website Contact Inquiry
        </h1>
        <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px;">
          A prospective customer has submitted a project request on zyncweb.dev.
        </p>
      </td>
    </tr>

    <!-- ACCENT BAR -->
    <tr>
      <td style="height: 4px; background: linear-gradient(90deg, #00bba7 0%, #3fbfb8 50%, #5bd6ce 100%); font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>

    <!-- BODY CONTENT -->
    <tr>
      <td style="padding: 32px 32px 24px 32px;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background: #f8fafc; border-radius: 14px; border: 1px solid #e2e8f0; overflow: hidden;">
          <tr>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; width: 34%; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Customer Name</td>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 700; color: #0b132a;">${safeFirstName} ${safeLastName}</td>
          </tr>
          <tr>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</td>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600; color: #00bba7;">
              <a href="mailto:${safeEmail}" style="color: #00bba7; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Project Type</td>
            <td style="padding: 14px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0b132a;">
              <span style="display: inline-block; background: #e6f7f6; color: #008779; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 700;">
                ${safeProjectType}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 18px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Submission Time</td>
            <td style="padding: 14px 18px; font-size: 13px; color: #334155; line-height: 1.4;">
              <strong>${submittedAtFormatted}</strong> (IST)<br />
              <span style="font-size: 11px; color: #94a3b8;">${submittedAtIso}</span>
            </td>
          </tr>
        </table>

        <!-- MESSAGE SECTION -->
        <div style="margin-bottom: 28px;">
          <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
            Project Details / Message
          </div>
          <div style="background: #ffffff; border-left: 4px solid #3fbfb8; border: 1px solid #e2e8f0; border-left-width: 4px; padding: 18px 20px; border-radius: 10px; font-size: 15px; line-height: 1.6; color: #1e293b;">
            ${safeMessage}
          </div>
        </div>

        <!-- QUICK ACTION -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 8px;">
          <tr>
            <td align="center">
              <a href="mailto:${safeEmail}?subject=Re:%20Your%20inquiry%20regarding%20${encodeURIComponent(projectType)}%20-%20ZyncWeb%20Solutions" style="display: inline-block; background-color: #3fbfb8; color: #082b2b; text-decoration: none; font-size: 15px; font-weight: 800; padding: 14px 28px; border-radius: 12px; box-shadow: 0 4px 14px rgba(63, 191, 184, 0.4);">
                Reply to ${safeFirstName} via Email
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #64748b;">
          ZyncWeb Solutions • Salem, Tamil Nadu, India
        </p>
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          Website: <a href="https://zyncweb.dev" style="color: #64748b; text-decoration: underline;">zyncweb.dev</a> • Support: <a href="mailto:info@zyncweb.dev" style="color: #64748b; text-decoration: underline;">info@zyncweb.dev</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function generateContactEmailText({
  firstName,
  lastName,
  email,
  projectType,
  message,
  submittedAtFormatted,
}: {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
  submittedAtFormatted: string;
}): string {
  return [
    `=== NEW CONTACT INQUIRY - ZYNCWEB SOLUTIONS ===`,
    ``,
    `Customer Name: ${firstName} ${lastName}`,
    `Email Address: ${email}`,
    `Project Type: ${projectType}`,
    `Submission Date & Time: ${submittedAtFormatted} (IST)`,
    ``,
    `--- CUSTOMER MESSAGE ---`,
    message,
    ``,
    `================================================`,
    `To reply, send an email to: ${email}`,
    `Agency: ZyncWeb Solutions (Salem, Tamil Nadu, India)`,
    `Website: https://zyncweb.dev`,
  ].join('\n');
}

// =============================================================================
// DIRECT RESEND EMAIL SENDER
// =============================================================================
async function sendResendEmail({
  firstName,
  lastName,
  email,
  projectType,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}): Promise<{ success: boolean; error?: string; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    return {
      success: false,
      error: 'RESEND_API_KEY is not configured on the server.',
    };
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'ZyncWeb Contact Form <onboarding@resend.dev>';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@zyncweb.dev';

  const now = new Date();
  const submittedAtFormatted = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Kolkata',
  }).format(now);
  const submittedAtIso = now.toISOString();

  const html = generateContactEmailHtml({
    firstName,
    lastName,
    email,
    projectType,
    message,
    submittedAtFormatted,
    submittedAtIso,
  });

  const text = generateContactEmailText({
    firstName,
    lastName,
    email,
    projectType,
    message,
    submittedAtFormatted,
  });

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry: ${projectType} from ${firstName} ${lastName}`,
      html,
      text,
    });

    if (error) {
      console.error('[Contact API] Resend returned error:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      id: data?.id,
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown email dispatch error';
    console.error('[Contact API] Resend dispatch exception:', msg);
    return {
      success: false,
      error: msg,
    };
  }
}

// =============================================================================
// OPTIONAL MAKE.COM WEBHOOK SENDER (DECOUPLED)
// =============================================================================
async function sendToMakeWebhook(payload: {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  projectType: string;
  message: string;
  submittedAt: string;
  source: string;
}): Promise<boolean> {
  // If explicitly disabled, skip
  if (process.env.DISABLE_MAKE_WEBHOOK === 'true') {
    return false;
  }

  const webhookUrl =
    process.env.MAKE_WEBHOOK_URL ||
    'https://hook.eu1.make.com/quqgrmkw7t6ghl54ojbjq05hhb9g11e0';

  if (!webhookUrl || webhookUrl.trim() === '') {
    return false;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000); // 6s timeout so Make never hangs user request

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.warn(`[Contact API] Make webhook responded with non-2xx status: ${res.status}`);
      return false;
    }

    return true;
  } catch (error: unknown) {
    // Log warning without failing main flow or leaking confidential keys
    const msg = error instanceof Error ? error.message : 'Unknown Make webhook error';
    console.warn('[Contact API] Make webhook delivery warning (non-fatal):', msg);
    return false;
  }
}

// =============================================================================
// POST ROUTE HANDLER
// =============================================================================
export async function POST(req: Request) {
  try {
    // 1. Sliding Window Rate Limiting Check
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded
      ? forwarded.split(',')[0].trim()
      : req.headers.get('x-real-ip') || '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Too many contact requests from this connection. Please wait a few minutes before trying again, or reach us directly on WhatsApp.',
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, projectType, message, honeypot } = body;

    // 3. Spam Honeypot Check (Silently drop spam bots)
    if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received.',
      });
    }

    // 4. Server-Side Field Validation
    if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'First name is required.' },
        { status: 400 }
      );
    }
    if (firstName.trim().length > 80) {
      return NextResponse.json(
        { success: false, error: 'First name cannot exceed 80 characters.' },
        { status: 400 }
      );
    }

    if (!lastName || typeof lastName !== 'string' || lastName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Last name is required.' },
        { status: 400 }
      );
    }
    if (lastName.trim().length > 80) {
      return NextResponse.json(
        { success: false, error: 'Last name cannot exceed 80 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }
    if (email.trim().length > 120) {
      return NextResponse.json(
        { success: false, error: 'Email address cannot exceed 120 characters.' },
        { status: 400 }
      );
    }

    if (!projectType || typeof projectType !== 'string' || projectType.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Project type is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 5 characters long.' },
        { status: 400 }
      );
    }
    if (message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message cannot exceed 5000 characters.' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      projectType: projectType.trim(),
      message: message.trim(),
    };

    const nowIso = new Date().toISOString();

    // 5. Execute Direct Email and Make Webhook concurrently
    // Direct email is the authoritative requirement; Make is optional & decoupled.
    const [emailResult, makeSent] = await Promise.all([
      sendResendEmail(sanitizedData),
      sendToMakeWebhook({
        ...sanitizedData,
        fullName: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        submittedAt: nowIso,
        source: 'ZyncWeb Contact Form',
      }),
    ]);

    // If Direct Email fails, report error so customer/admin knows
    if (!emailResult.success) {
      const isMissingKey = !process.env.RESEND_API_KEY;
      return NextResponse.json(
        {
          success: false,
          error:
            emailResult.error ||
            'Direct email notification failed to deliver. Please reach out via WhatsApp or email directly.',
          isConfigError: isMissingKey,
        },
        { status: isMissingKey ? 503 : 502 }
      );
    }

    // Success response: direct email succeeded, Make status reported
    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received successfully!',
      delivery: {
        emailSent: true,
        makeSent,
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Internal server error';
    console.error('[Contact API] Uncaught handler error:', msg);
    return NextResponse.json(
      {
        success: false,
        error:
          'An unexpected server error occurred while processing your message. Please try again or message us on WhatsApp.',
      },
      { status: 500 }
    );
  }
}

import nodemailer from "nodemailer";

// Read and trim environment variables to avoid accidental whitespace
const SMTP_HOST = process.env.SMTP_HOST?.trim();
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT.trim(), 10) : undefined;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER?.trim();
const SMTP_PASS = process.env.SMTP_PASS?.trim();

// Create transporter lazily; some platforms require creating per-invocation
function createTransporter() {
  const host = SMTP_HOST;
  const port = SMTP_PORT;
  const secure = typeof SMTP_SECURE === "boolean" ? SMTP_SECURE : (port === 465);

  const transportOptions = {
    host,
    port,
    secure,
    // Timeouts help detect network issues quickly in serverless environments
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 30000,
  };

  if (SMTP_USER || SMTP_PASS) {
    transportOptions.auth = {
      user: SMTP_USER,
      pass: SMTP_PASS,
    };
  }

  return nodemailer.createTransport(transportOptions);
}

/**
 * Serverless function handler for sending contact form emails via SMTP (nodemailer)
 * Compatible with Vercel serverless functions
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default async function handler(req, res) {
  // Set CORS headers to allow requests from the frontend
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Validate required fields
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false,
      error: "Missing required fields" 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      error: "Invalid email format" 
    });
  }

  // Validate SMTP configuration
  if (!SMTP_HOST || !SMTP_PORT) {
    console.error("SMTP is not configured (SMTP_HOST/SMTP_PORT missing)");
    return res.status(500).json({ 
      success: false,
      error: "Email service is not configured. Please contact the administrator." 
    });
  }

  try {
    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.RECIPIENT_EMAIL || "zamoranossydney@gmail.com";
    
    // Get sender email from environment variable
    // For verified domains, use format: "Display Name <email@yourdomain.com>"
    // If SENDER_EMAIL is not set, fallback to verified domain email
    const senderEmail = process.env.SENDER_EMAIL || "Website Contact <noreply@sydsolutiontech.com>";
    
    // Validate that SENDER_EMAIL is set when using verified domain
    if (!process.env.SENDER_EMAIL) {
      console.warn("SENDER_EMAIL not set. Using default verified domain email (noreply@sydsolutiontech.com). Set SENDER_EMAIL to customize.");
    }
    
    // Build HTML body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          This email was sent from the contact form on your website.
        </p>
      </div>
    `;

    // Send email using SMTP (nodemailer)
    const transporter = createTransporter();

    // Verify connection configuration before attempting send to provide clearer errors
    try {
      await transporter.verify();
      console.log("SMTP transporter verified");
    } catch (verifyErr) {
      console.error("SMTP verification failed:", verifyErr && verifyErr.message ? verifyErr.message : verifyErr);
      return res.status(502).json({
        success: false,
        error: "Unable to connect to SMTP server. Please check SMTP configuration.",
        details: verifyErr && verifyErr.message ? verifyErr.message : undefined,
      });
    }

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: `📩 ${subject} — from ${name}`,
      html: htmlBody,
      replyTo: email,
    };

    let result;
    try {
      result = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully via SMTP:", result && result.messageId ? result.messageId : result);
    } catch (sendErr) {
      console.error("SMTP send failed:", sendErr && sendErr.message ? sendErr.message : sendErr);
      return res.status(502).json({
        success: false,
        error: "Failed to send email via SMTP. Please try again later.",
        details: sendErr && sendErr.message ? sendErr.message : undefined,
      });
    }

    // HubSpot integration removed; no CRM submission performed

    return res.status(200).json({ 
      success: true,
      message: "Email sent successfully" 
    });
  } catch (error) {
    // Log error for debugging
    console.error("Email handler error:", error);
    
    // Return user-friendly error message
    return res.status(500).json({ 
      success: false,
      error: error.message || "Failed to send email. Please try again later." 
    });
  }
}

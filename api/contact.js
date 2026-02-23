// Serverless function for contact form submission
// This works with Vercel, Netlify Functions, or can be adapted for Express

import nodemailer from 'nodemailer';

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // 5 requests per hour per IP

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number (basic validation)
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
}

// Check rate limit
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );
  
  if (validRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }
  
  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  return true;
}

// Create email transporter
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.rediffmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER || 'Sunrise7480@rediffmail.com';
  const pass = process.env.SMTP_PASS || '';
  
  if (!pass) {
    console.warn('SMTP password not configured. Emails will be logged but not sent.');
    return null;
  }
  
  return nodemailer.createTransporter({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

// Main handler function
export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      headers: corsHeaders 
    });
  }
  
  try {
    // Get client IP for rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
        headers: corsHeaders,
      });
    }
    
    const { name, company, email, phone, equipmentType, message, honeypot } = req.body;
    
    // Honeypot check (spam protection)
    if (honeypot) {
      return res.status(200).json({ 
        success: true,
        headers: corsHeaders 
      });
    }
    
    // Validate required fields
    if (!name || !company || !email || !phone || !equipmentType || !message) {
      return res.status(400).json({
        error: 'All fields are required',
        headers: corsHeaders,
      });
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Please enter a valid email address',
        headers: corsHeaders,
      });
    }
    
    // Validate phone format
    if (!isValidPhone(phone)) {
      return res.status(400).json({
        error: 'Please enter a valid phone number',
        headers: corsHeaders,
      });
    }
    
    // Validate message length (prevent spam)
    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({
        error: 'Message must be between 10 and 5000 characters',
        headers: corsHeaders,
      });
    }
    
    // Sanitize inputs (basic)
    const sanitizedName = name.trim().replace(/[<>]/g, '');
    const sanitizedCompany = company.trim().replace(/[<>]/g, '');
    const sanitizedMessage = message.trim().replace(/[<>]/g, '');
    
    // Create email content
    const emailSubject = `New Quote Request from ${sanitizedName} - ${sanitizedCompany}`;
    const emailHtml = `
      <h2>New Quote Request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${sanitizedName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${sanitizedCompany}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Equipment Type:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${equipmentType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${sanitizedMessage.replace(/\n/g, '<br>')}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">IP Address:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${clientIp}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Submitted At:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toISOString()}</td>
        </tr>
      </table>
    `;
    
    const emailText = `
New Quote Request

Name: ${sanitizedName}
Company: ${sanitizedCompany}
Email: ${email}
Phone: ${phone}
Equipment Type: ${equipmentType}
Message: ${sanitizedMessage}

IP Address: ${clientIp}
Submitted At: ${new Date().toISOString()}
    `;
    
    // Send email
    const transporter = createTransporter();
    
    if (transporter) {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL || 'Sunrise7480@rediffmail.com',
        to: 'Sunrise7480@rediffmail.com',
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        replyTo: email,
      });
      console.log('Email sent successfully to Sunrise7480@rediffmail.com');
    } else {
      // Log the submission for debugging when SMTP is not configured
      console.log('Contact form submission:', {
        name: sanitizedName,
        company: sanitizedCompany,
        email,
        phone,
        equipmentType,
        message: sanitizedMessage.substring(0, 100) + '...',
        ip: clientIp,
        timestamp: new Date().toISOString(),
      });
    }
    
    // Return success response
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    return res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    return res.status(500).json({
      error: 'Something went wrong. Please try again later.',
    });
  }
}

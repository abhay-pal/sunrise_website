// Express server for production deployment
// This server serves the static files and handles API requests

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "blob:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting for API endpoints
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
}

// Create email transporter
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  
  if (!host || !user || !pass) {
    console.warn('SMTP credentials not configured. Emails will be logged but not sent.');
    return null;
  }
  
  return nodemailer.createTransporter({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

// Contact form API endpoint
app.post('/api/contact', apiLimiter, async (req, res) => {
  try {
    const { name, company, email, phone, equipmentType, message, honeypot } = req.body;
    
    // Honeypot check (spam protection)
    if (honeypot) {
      return res.status(200).json({ success: true });
    }
    
    // Validate required fields
    if (!name || !company || !email || !phone || !equipmentType || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    }
    
    // Validate phone format
    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Please enter a valid phone number' });
    }
    
    // Validate message length
    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({ 
        error: 'Message must be between 10 and 5000 characters' 
      });
    }
    
    // Sanitize inputs
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

Submitted At: ${new Date().toISOString()}
    `;
    
    // Send email
    const transporter = createTransporter();
    
    if (transporter) {
      await transporter.sendMail({
        from: process.env.FROM_EMAIL || 'noreply@sunriseheavymachines.com',
        to: process.env.TO_EMAIL || 'Sunrise7480@rediffmail.com',
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        replyTo: email,
      });
      console.log('Email sent successfully to Sunrise7480@rediffmail.com');
    } else {
      // Log the submission for debugging when SMTP is not configured
      console.log('Contact form submission (email not sent - SMTP not configured):', {
        name: sanitizedName,
        company: sanitizedCompany,
        email,
        phone,
        equipmentType,
        message: sanitizedMessage.substring(0, 100) + '...',
        timestamp: new Date().toISOString(),
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Something went wrong. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing - serve index.html for all non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api/')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`SMTP configured: ${process.env.SMTP_HOST ? 'Yes' : 'No'}`);
  console.log(`Contact email: Sunrise7480@rediffmail.com`);
});

export default app;

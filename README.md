# Sunrise Heavy Machine Services

A production-ready website for Sunrise Heavy Machine Services - complete maintenance, repair, and spare parts solutions for heavy equipment.

## Features

- **Modern Design**: Premium dark theme with amber/orange accents
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Animations**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph
- **Contact Form**: Functional form with validation, spam protection, and rate limiting
- **Fast Loading**: Optimized images and code splitting

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Backend**: Express.js + Node.js
- **Email**: Nodemailer

## Project Structure

```
├── api/                    # Serverless API functions
│   └── contact.js          # Contact form API endpoint
├── public/
│   └── images/             # Static images
├── src/
│   ├── components/         # Reusable components
│   ├── sections/           # Page sections
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main app component
│   └── index.css           # Global styles
├── server.js               # Express server for production
├── package.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:5173

### Environment Variables

Create a `.env` file in the root directory:

```env
# SMTP Configuration (for contact form emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@sunriseheavymachines.com
TO_EMAIL=info@sunriseheavymachines.com

# Server
PORT=3000
NODE_ENV=production
```

## Building for Production

### Option 1: Static Build (for static hosting)

```bash
npm run build
```

The `dist/` folder will contain the static files ready for deployment.

### Option 2: Full-Stack Build (with Node.js server)

```bash
npm run build
npm start
```

This starts the Express server on port 3000 (or PORT env variable).

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy `dist/` folder to Netlify

3. Add environment variables in Netlify dashboard

### Traditional VPS/Server

1. Build the project:
```bash
npm run build
```

2. Upload files to server

3. Install dependencies:
```bash
npm install --production
```

4. Start server:
```bash
npm start
```

5. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start server.js --name "sunrise-website"
```

## Contact Form Setup

The contact form includes:
- **Field Validation**: Name, email, phone, equipment type, message
- **Spam Protection**: Honeypot field
- **Rate Limiting**: 5 submissions per hour per IP
- **Email Notifications**: Sends email on successful submission

### Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in SMTP_PASS

For other providers, update SMTP_HOST and SMTP_PORT accordingly.

## Customization

### Colors

Edit `tailwind.config.js` and `src/index.css` to change the color scheme.

### Content

Update the content in each section file in `src/sections/`.

### Images

Replace images in `public/images/` with your own. Recommended sizes:
- Hero: 1920x1080
- Service cards: 800x600
- Team/About: 1200x800

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private - All rights reserved.

## Support

For support, contact info@sunriseheavymachines.com

# Gaming Shop Myanmar - Complete Setup Guide

## Overview
This guide will help you set up the complete Gaming Shop Myanmar website with all its features including:
- Supabase database integration
- Cloudinary file storage
- Netlify hosting with serverless functions
- Session management
- Admin dashboard
- KYC verification system

## Prerequisites
- Node.js 18+ installed
- A Supabase account
- A Cloudinary account
- A Netlify account (for hosting)

---

## 1. Database Setup (Supabase)

### Step 1.1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Sign in to your account
3. Click "New Project"
4. Fill in project details:
   - **Name**: Gaming Shop Myanmar
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to Myanmar (Singapore recommended)

### Step 1.2: Configure Database Schema
1. Go to your Supabase dashboard
2. Navigate to "SQL Editor"
3. Copy and paste the content from `fixed_database.sql`
4. Click "Run" to execute the schema

### Step 1.3: Get Supabase Credentials
1. Go to "Settings" > "API"
2. Copy the following values:
   - **Project URL**: `https://your-project.supabase.co`
   - **Anon Public Key**: `eyJ...` (long string)
   - **Service Role Key**: `eyJ...` (keep this secure!)

### Step 1.4: Configure Row Level Security (RLS)
1. Go to "Authentication" > "Settings"
2. Enable "Enable email confirmations" if desired
3. Go to "Database" > "Tables"
4. For each table, click the lock icon to enable RLS
5. Add policies as needed (basic policies are in the SQL file)

---

## 2. Cloudinary Setup

### Step 2.1: Create Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Complete email verification

### Step 2.2: Get Cloudinary Credentials
1. Go to your Cloudinary Dashboard
2. Copy the following values:
   - **Cloud Name**: `your-cloud-name`
   - **API Key**: `123456789012345`
   - **API Secret**: `your-api-secret` (keep this secure!)

### Step 2.3: Configure Upload Presets
1. Go to "Settings" > "Upload"
2. Click "Add upload preset"
3. Configure preset:
   - **Preset name**: `ml_default`
   - **Signing mode**: `Unsigned`
   - **Folder**: `gaming-shop`
   - **Access mode**: `Public`
   - **Unique filename**: `True`
   - **Overwrite**: `False`

### Step 2.4: Set Up Folders (Optional)
Create these folders in your Cloudinary media library:
- `gaming-shop/products` - Product images
- `gaming-shop/users` - User profile photos
- `gaming-shop/kyc` - KYC documents
- `gaming-shop/news` - News article images

---

## 3. Netlify Deployment

### Step 3.1: Prepare Your Files
Ensure you have these files ready:
```
your-project/
â”œâ”€â”€ index.html
â”œâ”€â”€ admin.html
â”œâ”€â”€ netlify.toml
â”œâ”€â”€ netlify/
â”‚   â”œâ”€â”€ functions/
â”‚   â”‚   â”œâ”€â”€ cloudinary-upload.js
â”‚   â”‚   â”œâ”€â”€ cloudinary-delete.js
â”‚   â”‚   â””â”€â”€ cloudinary-transform.js
â”‚   â””â”€â”€ package.json
â””â”€â”€ fixed_database.sql
```

### Step 3.2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Sign in
3. Click "Add new site" > "Deploy manually"
4. Drag and drop your project folder
5. Wait for deployment to complete

### Step 3.3: Configure Environment Variables
1. Go to your site dashboard
2. Click "Site settings" > "Environment variables"
3. Add the following variables:

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=your-api-secret

# Supabase Configuration (for functions if needed)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key
```

### Step 3.4: Enable Functions
1. Go to "Functions" tab in your site dashboard
2. Verify that your functions are deployed
3. Test each function endpoint:
   - `/.netlify/functions/cloudinary-upload`
   - `/.netlify/functions/cloudinary-delete`
   - `/.netlify/functions/cloudinary-transform`

---

## 4. Configuration Updates

### Step 4.1: Update Supabase Configuration in HTML Files
In both `index.html` and `admin.html`, update these lines:

```javascript
const SUPABASE_URL = 'https://your-actual-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-actual-anon-key';
```

### Step 4.2: Update Cloudinary Configuration
If using direct uploads (fallback), update:

```javascript
// In uploadToCloudinary function
const response = await fetch(`https://api.cloudinary.com/v1_1/your-cloud-name/auto/upload`, {
    method: 'POST',
    body: formData
});
```

---

## 5. Testing the Setup

### Step 5.1: Test Database Connection
1. Open your website
2. Try registering a new user
3. Check Supabase dashboard > Authentication > Users
4. Verify user appears in the list

### Step 5.2: Test File Upload
1. Login as a user
2. Go to Profile section
3. Try uploading a profile picture
4. Check Cloudinary dashboard > Media Library
5. Verify image appears in `gaming-shop` folder

### Step 5.3: Test Admin Functions
1. In Supabase, manually set a user's role to 'admin'
2. Login with that user account
3. Visit `/admin.html`
4. Test various admin functions

### Step 5.4: Test KYC System
1. Login as a regular user
2. Go to KYC Verification section
3. Upload documents and test face scanning
4. Check admin panel for KYC submissions

---

## 6. Post-Deployment Configuration

### Step 6.1: Domain Setup (Optional)
1. Purchase a domain (e.g., gamingshop.mm)
2. In Netlify, go to "Domain settings"
3. Add custom domain
4. Follow DNS configuration instructions

### Step 6.2: SSL Certificate
1. Netlify automatically provides SSL
2. Verify HTTPS is working
3. Enable "Force HTTPS" in domain settings

### Step 6.3: Performance Optimization
1. Enable Netlify Analytics (if desired)
2. Set up image optimization in Cloudinary
3. Configure caching headers in `netlify.toml`

---

## 7. Security Considerations

### Step 7.1: Supabase Security
- Enable RLS on all tables
- Create specific policies for each user role
- Regularly rotate service keys
- Monitor authentication logs

### Step 7.2: Cloudinary Security
- Use signed uploads for sensitive content
- Set up transformation restrictions
- Monitor usage and costs
- Configure hotlink protection

### Step 7.3: Frontend Security
- Validate all user inputs
- Sanitize data before display
- Use HTTPS everywhere
- Implement proper session management

---

## 8. Monitoring and Maintenance

### Step 8.1: Set Up Monitoring
1. Supabase: Monitor database usage and performance
2. Cloudinary: Track bandwidth and transformations
3. Netlify: Monitor function invocations and errors

### Step 8.2: Backup Strategy
1. Supabase: Enable automated backups
2. Cloudinary: Regularly export asset lists
3. Code: Use Git for version control

### Step 8.3: Regular Updates
- Update dependencies monthly
- Monitor security advisories
- Review and update user permissions
- Clean up unused assets

---

## 9. Troubleshooting

### Common Issues:

#### Database Connection Errors
```javascript
// Check these in browser console:
console.log('Supabase URL:', SUPABASE_URL);
console.log('Supabase Key:', SUPABASE_ANON_KEY.substring(0, 10) + '...');
```

#### File Upload Failures
- Verify Cloudinary credentials
- Check upload preset configuration
- Monitor browser network tab for errors
- Ensure file size limits are appropriate

#### Function Errors
- Check Netlify function logs
- Verify environment variables
- Test functions individually
- Check CORS configuration

#### Session Issues
- Clear localStorage: `localStorage.clear()`
- Check session expiry logic
- Verify token format
- Test across different browsers

---

## 10. Support and Resources

### Documentation Links:
- [Supabase Documentation](https://supabase.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Netlify Documentation](https://docs.netlify.com)

### Community Support:
- Supabase Discord
- Cloudinary Community Forum
- Netlify Community Forums

### Professional Support:
Consider upgrading to paid plans for:
- Priority support
- Enhanced features
- Better performance limits
- SLA guarantees

---

## Quick Start Checklist

- [ ] Create Supabase project and run database schema
- [ ] Get Supabase URL and anon key
- [ ] Create Cloudinary account and get credentials
- [ ] Set up upload preset in Cloudinary
- [ ] Deploy to Netlify
- [ ] Configure environment variables
- [ ] Update configuration in HTML files
- [ ] Test user registration
- [ ] Test file upload
- [ ] Set up admin user
- [ ] Test admin functions
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring and backups

---

## Production Readiness Checklist

- [ ] All environment variables configured
- [ ] SSL certificate active
- [ ] Database RLS policies configured
- [ ] File upload limits set
- [ ] Admin access properly secured
- [ ] Error handling tested
- [ ] Performance optimization complete
- [ ] Monitoring systems active
- [ ] Backup strategy implemented
- [ ] Security audit performed

---

*This setup guide ensures your Gaming Shop Myanmar website is fully functional, secure, and ready for production use.*

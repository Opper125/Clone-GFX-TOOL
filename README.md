
# Gaming Shop Myanmar

A complete gaming marketplace website built with modern web technologies, featuring user management, product catalog, KYC verification, and admin dashboard.

## ðŸš€ Features

### User Features
- **User Registration/Login** - Secure authentication with session persistence
- **Profile Management** - Upload photos and manage personal information
- **Product Browsing** - Browse and search gaming products
- **Shopping Cart** - Add products and manage cart
- **Order Management** - Place and track orders
- **KYC Verification** - Upload documents with face scanning simulation
- **News Section** - Read latest gaming news and updates
- **Payment Integration** - Multiple payment method support

### Seller Features
- **Seller Dashboard** - Manage products and sales
- **Product Management** - Add, edit, and delete products
- **Order Tracking** - Monitor customer orders
- **Sales Analytics** - View sales performance
- **Inventory Management** - Track stock levels

### Admin Features
- **Admin Dashboard** - Comprehensive overview with statistics
- **User Management** - Manage all users and permissions
- **Product Approval** - Review and approve seller products
- **KYC Review** - Approve/reject verification documents
- **News Management** - Create and manage news articles
- **Payment Monitoring** - Track all transactions
- **Reports & Analytics** - Generate various reports
- **System Settings** - Configure site settings

## ðŸ›  Technology Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL database)
- **File Storage**: Cloudinary
- **Hosting**: Netlify with Serverless Functions
- **Charts**: Chart.js for analytics
- **Icons**: Font Awesome
- **Authentication**: Supabase Auth with session management

## ðŸ“ Project Structure

```
gaming-shop-myanmar/
â”œâ”€â”€ index.html                          # Main application file
â”œâ”€â”€ admin.html                          # Admin dashboard
â”œâ”€â”€ fixed_database.sql                  # Database schema
â”œâ”€â”€ netlify.toml                        # Netlify configuration
â”œâ”€â”€ netlify/
â”‚   â”œâ”€â”€ functions/
â”‚   â”‚   â”œâ”€â”€ cloudinary-upload.js        # File upload function
â”‚   â”‚   â”œâ”€â”€ cloudinary-delete.js        # File deletion function
â”‚   â”‚   â””â”€â”€ cloudinary-transform.js     # Image transformation function
â”‚   â””â”€â”€ package.json                    # Dependencies for functions
â”œâ”€â”€ SETUP_GUIDE.md                      # Comprehensive setup guide
â””â”€â”€ README.md                           # This file
```

## ðŸš¦ Quick Start

1. **Clone/Download** the project files
2. **Follow the setup guide** in `SETUP_GUIDE.md`
3. **Configure** Supabase, Cloudinary, and Netlify
4. **Deploy** to Netlify
5. **Test** all functionalities

## ðŸ”§ Configuration Required

### Environment Variables (Netlify)
```bash
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Update in HTML Files
Update Supabase configuration in both `index.html` and `admin.html`:
```javascript
const SUPABASE_URL = 'your-actual-supabase-url';
const SUPABASE_ANON_KEY = 'your-actual-anon-key';
```

## ðŸ“Š Database Schema

The database includes tables for:
- Users (with roles: user, seller, admin)
- Products with categories and images
- Orders and order items
- KYC verifications
- News articles
- Payments
- User sessions

## ðŸ”’ Security Features

- Row Level Security (RLS) on all database tables
- Secure session management with 30-day expiry
- Input validation and sanitization
- HTTPS enforcement
- CORS protection
- File upload restrictions

## ðŸŽ¨ UI/UX Features

- Responsive design for all devices
- Myanmar language interface
- Dark/light theme support
- Loading animations
- Real-time notifications
- Modal dialogs
- Charts and analytics
- File drag-and-drop
- Image previews

## ðŸ“± Mobile Responsive

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## ðŸ”„ Real-time Features

- Live data updates
- Real-time notifications
- Dynamic content loading
- Instant search results
- Live cart updates

## ðŸ“ˆ Analytics & Reports

- User growth tracking
- Sales performance
- Revenue reports
- Product popularity
- KYC completion rates
- System usage metrics

## ðŸ›¡ Admin Security

Admin access is protected by:
- Role-based authentication
- Session verification
- Secure admin routes
- Activity logging
- Permission validation

## ðŸ“ž Support

For technical support or questions:
1. Check the setup guide
2. Review troubleshooting section
3. Check service documentation
4. Contact development team

## ðŸ“„ License

This project is created for Gaming Shop Myanmar. All rights reserved.

---

**Note**: This is a complete, production-ready gaming marketplace website with all modern features and security implementations.

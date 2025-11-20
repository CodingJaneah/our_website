# SYD Solution Tech - Digital Showcase Website

A modern, responsive company website showcasing SYD Solution Tech's services, portfolio, team, and contact information. Built with React, TypeScript, and a component-based architecture following MVC patterns.

## Project Overview

This is a professional digital showcase website for SYD Solution Tech, a technology company specializing in software development, e-commerce, digital marketing, and IT solutions. The website features smooth animations, responsive design, and modern UI/UX patterns.

## Project URL: https://www.sydsolutiontech.me/

## Technologies Used

### Core Technologies
- **React 18.3.1** - Modern UI library for building user interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript with static typing
- **Vite 7.1.12** - Next-generation frontend build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing for single-page applications

### UI Framework & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn-ui** - High-quality, accessible component library built on Radix UI
- **Radix UI** - Low-level UI primitives for building accessible components
- **Framer Motion 12.23.24** - Production-ready motion library for React animations
- **Lucide React 0.462.0** - Beautiful, consistent icon library

### Form Handling & Validation
- **React Hook Form 7.61.1** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers 3.10.0** - Validation resolvers for React Hook Form

### State Management & Data Fetching
- **TanStack Query 5.83.0** - Powerful data synchronization for React
- **React Query** - Server state management

### Additional Libraries
- **Express 4.18.2** - Local development server for API endpoints
- **CORS 2.8.5** - Cross-origin resource sharing middleware
- **Embla Carousel React 8.6.0** - Carousel/slider component library
- **Sonner 1.7.4** - Toast notification library
- **Next Themes 0.3.0** - Theme management (light/dark mode support)
- **Class Variance Authority 0.7.1** - Component variant management
- **Tailwind Merge 2.6.0** - Utility to merge Tailwind CSS classes
- **clsx 2.1.1** - Utility for constructing className strings

### Development Tools
- **ESLint 9.32.0** - Code linting and quality
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting rules
- **PostCSS 8.5.6** - CSS processing tool
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## Project Structure

```
src/
├── assets/              # Static assets (images, PDFs)
│   ├── team-images/    # Team member profile images
│   └── *.png, *.jpg    # Project images and company assets
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn-ui)
│   ├── Header.tsx      # Site navigation header
│   ├── Footer.tsx       # Site footer
│   ├── PageTransition.tsx  # Page transition animations
│   └── ScrollToTop.tsx  # Scroll to top functionality
├── data/               # Data layer (separated from presentation)
│   ├── about-data.ts   # Team members, values, expertise data
│   ├── home-data.ts    # Services and customer feedback
│   └── portfolio-data.ts  # Project portfolio data
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile device detection hook
│   └── use-toast.ts    # Toast notification hook
├── lib/                # Utility libraries
│   ├── animations.ts   # Framer Motion animation configurations
│   └── utils.ts        # General utility functions
├── pages/              # Page components (routes)
│   ├── Home.tsx        # Landing page
│   ├── About.tsx        # About us page
│   ├── Portfolio.tsx   # Portfolio showcase page
│   ├── Contact.tsx     # Contact form page
│   └── NotFound.tsx   # 404 error page
├── App.tsx             # Main application component & routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and CSS variables
```

## Architecture Patterns

### MVC (Model-View-Controller) Pattern
The project follows a layered architecture:
- **Model (Data Layer)**: `src/data/` - Contains all data structures and business logic data
- **View (Presentation Layer)**: `src/pages/` and `src/components/` - UI components
- **Controller (Logic Layer)**: Component handlers and utility functions

### Component-Based Architecture
- **Separation of Concerns**: Data separated from presentation
- **Reusability**: UI components in `components/ui/` are reusable
- **Modularity**: Each feature/page is self-contained

### Data Management
- Data is centralized in `src/data/` directory
- Each data file exports typed arrays/objects
- Data files include TypeScript interfaces for type safety
- Follows the pattern: `feature-data.ts` (e.g., `about-data.ts`, `portfolio-data.ts`)

## Components

### Custom Components

#### Header (`components/Header.tsx`)
- Responsive navigation bar with mobile menu
- Active route highlighting
- Company logo and branding
- Smooth scroll behavior on navigation

#### Footer (`components/Footer.tsx`)
- Company information
- Contact details (email, phone, address)
- Navigation links
- Responsive grid layout

#### PageTransition (`components/PageTransition.tsx`)
- Smooth page transition animations
- Uses Framer Motion for animations
- Enhances user experience between route changes

#### ScrollToTop (`components/ScrollToTop.tsx`)
- Automatically scrolls to top on route change
- Improves navigation UX

### UI Components (shadcn-ui)
Located in `components/ui/`, these are reusable, accessible components:
- **Button** - Various button styles and sizes
- **Card** - Container component for content sections
- **Dialog** - Modal dialogs for portfolio images
- **Input** - Form input fields
- **Label** - Form labels
- **Textarea** - Multi-line text input
- **Badge** - Small status indicators
- **Carousel** - Image carousel for customer feedback
- **Toast** - Notification toasts
- And 40+ other UI primitives from shadcn-ui

## Pages

### Home (`pages/Home.tsx`)
**Route**: `/`

**Features:**
- Hero section with call-to-action buttons
- Services section showcasing 4 main services:
  - Web, Mobile, and Desktop Development
  - SEO & Digital Marketing
  - QA & Testing (Manual & Automation)
  - Smart virtual assistants and intelligent bots
- Customer feedback carousel with testimonials
- Call-to-action section

**Data Source**: `src/data/home-data.ts`

### About (`pages/About.tsx`)
**Route**: `/about`

**Features:**
- Company story section with image and description
- Mission & Vision cards
- Company values (4 core values):
  - Innovation
  - Transparency
  - Excellence
  - Partnership
- Team section with member profiles and images
- Technical expertise showcase

**Data Source**: `src/data/about-data.ts`

### Portfolio (`pages/Portfolio.tsx`)
**Route**: `/portfolio`

**Features:**
- Project grid showcasing 6 projects:
  - Incident Management System
  - E-Commerce
  - Artificial Intelligence Bot
  - Tampermonkey Chrome Extension
  - Decla Online English Academy
  - Livechat Management System
- Click project cards to view full-size images in modal
- Technology tags for each project
- Statistics section (Projects Completed, Client Satisfaction, etc.)

**Data Source**: `src/data/portfolio-data.ts`

### Contact (`pages/Contact.tsx`)
**Route**: `/contact`

**Features:**
- Contact form with EmailJS integration:
  - Name (required)
  - Email (required)
  - Subject (required)
  - Message (required)
- Contact information cards:
  - Email: zamoranossydney@gmail.com
  - Phone: 09156855315
  - Office address
  - Business hours
- Form validation and error handling
- Success/error toast notifications

**Email Integration**: Server-side SMTP (configured via environment variables)

### NotFound (`pages/NotFound.tsx`)
**Route**: `*` (catch-all)

**Features:**
- 404 error page
- User-friendly error message
- Navigation back to home

## Key Features & Concepts

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Adaptive layouts for all screen sizes
- Mobile menu for navigation

### 2. Animations
- **Framer Motion** integration:
  - `fadeInUp` - Elements fade in from bottom
  - `staggerContainer` - Sequential child animations
  - `staggerItem` - Individual item animations
- Page transitions between routes
- Hover effects and transitions
- Scroll-triggered animations

### 3. Data Layer Separation
- All data centralized in `src/data/` directory
- TypeScript interfaces for type safety
- Easy to update content without touching components
- Follows naming convention: `feature-data.ts`

### 4. Type Safety
- Full TypeScript implementation
- Interfaces for all data structures
- Type-safe props and state
- Compile-time error checking

### 5. Form Handling
- React Hook Form for form management
- Server-side SMTP (`nodemailer`) for backend email delivery
- Client-side validation
- Loading states and error handling
- Toast notifications for user feedback

### 6. Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly

### 7. Performance
- Code splitting with React Router
- Optimized images
- Lazy loading capabilities
- Efficient re-renders with React hooks

### 8. Styling System
- **Tailwind CSS** utility classes
- CSS custom properties for theming
- Gradient backgrounds
- Custom color palette
- Responsive spacing system

### 9. Routing
- Client-side routing with React Router
- Smooth page transitions
- Scroll restoration
- Active route highlighting

### 10. Component Patterns
- Compound components (Dialog, Carousel)
- Controlled vs uncontrolled components
- Custom hooks for reusable logic
- Higher-order components for animations

## Email Configuration

This project uses server-side SMTP for sending contact form emails. Configure the following environment variables in your local `.env` (and in your production host like Vercel):

- `SMTP_HOST` - SMTP server hostname (e.g., `smtp.sendgrid.net`)
- `SMTP_PORT` - SMTP port (e.g., `587` for STARTTLS, `465` for SMTPS)
- `SMTP_SECURE` - `true` or `false` (use `true` for port `465`)
- `SMTP_USER` - SMTP username (often the API user)
- `SMTP_PASS` - SMTP password or API key
- `SENDER_EMAIL` - optional: friendly `From` address (e.g., `Website Contact <noreply@yourdomain.com>`)
- `RECIPIENT_EMAIL` - optional: override default recipient for contact form submissions

Sample `.env` snippet:

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.YOUR_SENDGRID_API_KEY

SENDER_EMAIL="Website Contact <noreply@yourdomain.com>"
RECIPIENT_EMAIL=you@yourdomain.com
```

Notes:
- Do not commit secrets to version control. Add them to `.gitignore` and use your hosting provider's environment variable settings for production (e.g., Vercel Project → Settings → Environment Variables).
- If your hosting provider restricts outbound SMTP, consider using a provider API (SendGrid/Mailgun/Postmark) instead of SMTP.

## Zoho Forms Integration

The contact form can optionally use **Zoho Forms** via iframe embed to capture and manage form submissions. This is the simplest integration method with no API configuration needed.

### Quick Start

For complete setup instructions, see **[ZOHO_FORMS_IFRAME_SETUP.md](./ZOHO_FORMS_IFRAME_SETUP.md)** - a comprehensive guide covering:

- ✅ Complete setup process
- ✅ Iframe embed implementation
- ✅ Styling and customization
- ✅ Testing and troubleshooting
- ✅ Best practices

### Integration Method

The integration uses **Zoho Forms iframe embed** - the simplest method:

- Create form in Zoho Forms
- Get embed code from Zoho Forms
- Add iframe to your React component
- No API tokens or configuration needed!

### Quick Setup Steps

1. **Create a Zoho Forms account** at [zoho.com/forms](https://www.zoho.com/forms)
2. **Create a contact form** in Zoho Forms with fields: Name, Email, Subject, Message
3. **Get embed code:**
   - In Zoho Forms, click **"Share"** → **"Embed"**
   - Copy the iframe code
4. **Add to your component:**
   - Replace or update `ContactForm.tsx` with the iframe
   - Or create a new component for the Zoho Forms embed
5. **Customize styling** to match your website

**Note:** The iframe method is completely independent of the email service. Zoho Forms handles all submissions directly.

For detailed instructions, component examples, and troubleshooting, see **[ZOHO_FORMS_IFRAME_SETUP.md](./ZOHO_FORMS_IFRAME_SETUP.md)**.

## Code Style & Naming Conventions

### File Naming
- **Components**: PascalCase (e.g., `Header.tsx`, `PageTransition.tsx`)
- **Pages**: PascalCase (e.g., `Home.tsx`, `About.tsx`)
- **Data Files**: kebab-case with `-data` suffix (e.g., `about-data.ts`, `portfolio-data.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`, `animations.ts`)
- **Hooks**: camelCase with `use-` prefix (e.g., `use-toast.ts`, `use-mobile.tsx`)

### Variable & Function Naming
- **Variables**: camelCase (e.g., `formData`, `isSubmitting`)
- **Functions**: camelCase (e.g., `handleSubmit`, `handleChange`)
- **Constants**: snake_case (e.g., `MAX_LENGTH`, `API_BASE_URL`)
- **Environment Variables**: snake_case (e.g., `VITE_EMAILJS_SERVICE_ID`)

### Database & API Naming
- **Database Tables**: snake_case (e.g., `user_profiles`, `project_data`)
- **Database Columns**: snake_case (e.g., `created_at`, `user_id`)

### Component Structure
- Each component should have:
  - Comment header explaining purpose and parameters
  - Inline comments for complex logic
  - TypeScript interfaces for props
  - Proper error handling

### Code Organization
- **Modular Functions**: Break long functions into smaller ones
- **Meaningful Names**: Use descriptive variable and function names
- **Separation of Concerns**: Data separated from presentation
- **Single Responsibility**: Each function/component should do one thing

## Development Workflow

### Running the Project

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Setup

1. Clone the repository
2. Install dependencies: `npm install`
<!-- 3. Create `.env` file with EmailJS credentials (see EmailJS Configuration) -->
3. Create `.env` file with SMTP credentials (see Email Configuration section above for details)
4. Start development server: `npm run dev`
5. Open browser to `http://localhost:8080`

## Data Management

### Adding New Data

To add new content (e.g., team members, projects, services):

1. Locate the appropriate data file in `src/data/`
2. Update the TypeScript interface if needed
3. Add new data entries following the existing structure
4. Import any required assets (images, etc.)
5. The UI will automatically update

### Data Files Structure

- **`about-data.ts`**: Team members, company values, technical expertise
- **`home-data.ts`**: Services, customer testimonials
- **`portfolio-data.ts`**: Project portfolio items

Each data file includes:
- TypeScript interfaces for type safety
- Comment headers explaining purpose
- Exported arrays/objects ready for use in components

## Customization

### Colors & Theming
- Colors are defined in `src/index.css` using CSS custom properties
- Tailwind config in `tailwind.config.ts` extends the theme
- Custom gradients defined: `gradient-primary`, `gradient-hero`

### Animations
- Animation configurations in `src/lib/animations.ts`
- Uses Framer Motion for all animations
- Customizable via animation variants

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`
4. Optionally add data file in `src/data/` if needed

## Deployment

The project is configured for deployment on Vercel and other modern hosting platforms. The build process:
- Compiles TypeScript to JavaScript
- Optimizes assets
- Creates production-ready bundle in `dist/` directory

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- Progressive enhancement approach

## License

This project is private and proprietary to SYD Solution Tech.

---

**Built with ❤️ by SYD Solution Tech**

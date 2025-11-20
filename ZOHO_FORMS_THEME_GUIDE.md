# Zoho Forms Theme Customization Guide

Complete guide for changing and customizing the theme of your Zoho Forms embedded form.

## Overview

Since your form is embedded as an iframe, the theme must be customized **within Zoho Forms**, not in your React code. Changes made in Zoho Forms will automatically reflect in your embedded form.

---

## Method 1: Using Pre-built Themes (Quickest)

### Step 1: Access Theme Gallery

1. **Log in to Zoho Forms:**
   - Go to [https://forms.zoho.com](https://forms.zoho.com)
   - Sign in with your account

2. **Open Your Form:**
   - Navigate to your "Syd Solution Tech" form
   - Click to open it in the form builder

3. **Go to Themes Tab:**
   - Click on the **"Themes"** tab (usually at the top or in the sidebar)
   - You'll see different theme sections

### Step 2: Apply a Pre-built Theme

1. **Browse Pre-built Themes:**
   - Under **"Pre-built Themes"** section
   - You'll see various pre-designed templates

2. **Preview Themes:**
   - Hover over a theme
   - Click the **Preview** icon (eye icon) to see how it looks
   - Preview shows desktop, tablet, and mobile views

3. **Apply Theme:**
   - Once you find a theme you like, click **"Apply"**
   - The theme will be immediately applied to your form

4. **Save Changes:**
   - Click **"Save"** to save your form with the new theme
   - Changes will reflect in your embedded iframe automatically

---

## Method 2: Create Custom Theme (Best for Branding)

### Step 1: Create New Theme

1. **Go to Themes Tab:**
   - In your form, click **"Themes"** tab

2. **Create Custom Theme:**
   - Under **"My Themes"** section
   - Click **"Create Now"** (first time) or **"+ New Theme"**

3. **Theme Editor Opens:**
   - You'll see the Theme Editor with customization options

### Step 2: Customize Theme Elements

#### A. Form Background

- **Solid Color:**
  - Click on background color picker
  - Choose a color that matches your website
  - Or enter hex code (e.g., `#1a1a1a` for dark theme)

- **Gradient:**
  - Select gradient option
  - Choose gradient colors
  - Adjust direction and angle

- **Image Background:**
  - Upload a background image
  - Adjust opacity if needed
  - Set image position and size

#### B. Text Appearance

- **Font Family:**
  - Choose from available fonts
  - Or use custom fonts (if available in your plan)

- **Font Sizes:**
  - Adjust heading sizes
  - Adjust body text sizes
  - Adjust label sizes

- **Text Colors:**
  - Heading color
  - Body text color
  - Label color
  - Link color

#### C. Form Fields

- **Field Background:**
  - Input field background color
  - Textarea background color
  - Dropdown background color

- **Field Borders:**
  - Border color
  - Border width
  - Border radius (rounded corners)

- **Field Focus State:**
  - Focus border color
  - Focus background color

#### D. Buttons

- **Button Style:**
  - Background color
  - Text color
  - Border style
  - Border radius

- **Button Hover State:**
  - Hover background color
  - Hover text color
  - Hover border color

- **Button Size:**
  - Small, Medium, Large
  - Padding adjustments

#### E. Labels and Help Text

- **Label Styling:**
  - Label font size
  - Label color
  - Label weight (bold, normal)

- **Help Text:**
  - Help text color
  - Help text size
  - Help text position

### Step 3: Save Custom Theme

1. **Preview Your Theme:**
   - Click **"Preview"** to see how it looks
   - Check desktop, tablet, and mobile views

2. **Save Theme:**
   - Click **"Save as New Theme"**
   - Enter a **Theme Name** (e.g., "SYD Solution Tech Theme")
   - Click **"Save"**

3. **Apply to Form:**
   - The theme will be automatically applied
   - Or manually apply it from "My Themes" section

4. **Save Form:**
   - Click **"Save"** to save your form
   - Changes will appear in your embedded iframe

---

## Method 3: Match Your Website Theme

### Step 1: Get Your Website Colors

Identify your website's color scheme:

- **Primary Color:** Main brand color (e.g., from your logo)
- **Secondary Color:** Accent color
- **Background Color:** Page background
- **Text Color:** Main text color
- **Button Color:** CTA button color

### Step 2: Apply Colors in Zoho Forms

1. **Create Custom Theme** (see Method 2)

2. **Match Colors:**
   - Use your website's primary color for buttons
   - Use your website's background color for form background
   - Use your website's text color for labels and text
   - Use your website's accent color for focus states

3. **Match Fonts:**
   - If possible, use similar fonts to your website
   - Match font sizes proportionally

4. **Match Border Radius:**
   - If your website uses rounded corners, match the border radius
   - If your website uses sharp corners, use minimal border radius

### Step 3: Test and Refine

1. **Preview in Different Views:**
   - Desktop view
   - Tablet view
   - Mobile view

2. **Compare with Website:**
   - Open your website contact page
   - Compare the form theme with surrounding elements
   - Adjust colors if needed

3. **Save and Test:**
   - Save the theme
   - Check the embedded form on your website
   - Make final adjustments if needed

---

## Quick Theme Tips

### Dark Theme Example

If your website uses a dark theme:

- **Form Background:** Dark color (e.g., `#1a1a1a` or `#2d2d2d`)
- **Text Color:** Light color (e.g., `#ffffff` or `#e0e0e0`)
- **Field Background:** Slightly lighter dark (e.g., `#333333`)
- **Button:** Your brand color or bright accent
- **Borders:** Subtle gray (`#444444`)

### Light Theme Example

If your website uses a light theme:

- **Form Background:** White or light gray (`#ffffff` or `#f5f5f5`)
- **Text Color:** Dark color (e.g., `#333333` or `#1a1a1a`)
- **Field Background:** White
- **Button:** Your brand color
- **Borders:** Light gray (`#e0e0e0`)

### Brand Colors

Use your brand colors for:
- **Primary buttons** (Submit button)
- **Focus states** (when user clicks on a field)
- **Links** (if any in the form)
- **Accents** (dividers, icons, etc.)

---

## Advanced: CSS Customization (Limited)

Since the form is in an iframe, direct CSS customization is limited. However, you can:

### Option 1: Custom CSS in Zoho Forms

Some Zoho Forms plans allow custom CSS:

1. **Check Your Plan:**
   - Go to form settings
   - Look for "Custom CSS" or "Advanced Styling" option

2. **Add Custom CSS:**
   - If available, add custom CSS code
   - This allows more granular control

### Option 2: Iframe Container Styling

You can style the iframe container in your React component:

**File: `src/components/contact/ZohoFormsEmbed.tsx`**

```tsx
<div className="w-full overflow-hidden rounded-lg shadow-lg border-2 border-primary/20">
  <iframe
    aria-label="Syd Solution Tech"
    frameBorder="0"
    style={{ 
      height: `${height}px`, 
      width: "99%", 
      border: "none",
      // Additional styling if needed
    }}
    src={iframeSrc}
    title="Contact Form"
    className="rounded-lg"
  />
</div>
```

This affects the container, not the form inside the iframe.

---

## Troubleshooting

### Issue: Theme Changes Not Showing

**Solutions:**
1. ✅ Clear browser cache
2. ✅ Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
3. ✅ Verify form is saved in Zoho Forms
4. ✅ Check if form is published (not in draft)
5. ✅ Wait a few minutes for changes to propagate

### Issue: Colors Don't Match Website

**Solutions:**
1. ✅ Use a color picker tool to get exact hex codes
2. ✅ Test colors in Zoho Forms preview
3. ✅ Adjust brightness/contrast if needed
4. ✅ Consider using your brand's color palette

### Issue: Form Looks Different on Mobile

**Solutions:**
1. ✅ Preview theme in mobile view in Zoho Forms
2. ✅ Adjust mobile-specific settings if available
3. ✅ Test on actual mobile device
4. ✅ Adjust iframe height for mobile if needed

---

## Best Practices

1. **Consistency:**
   - Match your website's color scheme
   - Use consistent fonts (if possible)
   - Match button styles with your website

2. **Accessibility:**
   - Ensure good contrast between text and background
   - Use readable font sizes
   - Make buttons clearly visible

3. **Brand Identity:**
   - Use your brand colors prominently
   - Match your website's overall aesthetic
   - Keep it professional and clean

4. **Testing:**
   - Test on different devices
   - Test with different screen sizes
   - Get feedback from users

---

## Summary

To change your Zoho Forms theme:

1. ✅ Log in to Zoho Forms
2. ✅ Open your form
3. ✅ Go to **"Themes"** tab
4. ✅ Choose a pre-built theme OR create a custom theme
5. ✅ Customize colors, fonts, buttons, and other elements
6. ✅ Save the theme
7. ✅ Save the form
8. ✅ Changes automatically appear in your embedded iframe

**No code changes needed!** All theme customization happens in Zoho Forms.

---

**Last Updated:** December 2024  
**Version:** 1.0.0


# Zoho Forms Iframe Embed Setup Guide

Simple guide for embedding a Zoho Forms iframe directly into your contact page. This is the easiest way to integrate Zoho Forms without any API configuration.

## Table of Contents

1. [Overview](#overview)
2. [Advantages of Iframe Embed](#advantages-of-iframe-embed)
3. [Setup Process](#setup-process)
4. [Embedding the Form](#embedding-the-form)
5. [Styling and Customization](#styling-and-customization)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Instead of using the API integration, you can embed a Zoho Forms iframe directly into your contact page. This method:

- ✅ **No API configuration needed** - No tokens, no API keys
- ✅ **Simple setup** - Just copy and paste the embed code
- ✅ **Automatic handling** - Zoho Forms handles all submissions
- ✅ **Built-in features** - Includes validation, spam protection, and more
- ✅ **Easy maintenance** - Update form in Zoho, changes reflect automatically

---

## Advantages of Iframe Embed

### vs API Integration

| Feature | Iframe Embed | API Integration |
|---------|-------------|----------------|
| Setup Complexity | ⭐ Easy | ⭐⭐⭐ Complex |
| Configuration | None needed | API tokens, form IDs |
| Maintenance | Automatic | Manual updates |
| Form Updates | Instant | Code changes needed |
| Spam Protection | Built-in | Manual implementation |
| Validation | Built-in | Manual implementation |

---

## Setup Process

### Step 1: Create Your Form in Zoho Forms

1. **Sign in to Zoho Forms:**
   - Go to [https://forms.zoho.com](https://forms.zoho.com)
   - Sign in with your Zoho account

2. **Create a New Form:**
   - Click **"Create Form"** → **"Blank Form"**
   - Or choose a template that matches your needs

3. **Add Form Fields:**
   - **Name** (Single Line Text) - Required
   - **Email** (Email field) - Required
   - **Subject** (Single Line Text) - Required
   - **Message** (Multi-line Text) - Required
   - Add any additional fields you need

4. **Customize the Form:**
   - Match your website's design colors
   - Set up form validation rules
   - Configure email notifications
   - Enable spam protection (CAPTCHA)

5. **Save and Publish:**
   - Click **"Save"** to save your form
   - Make sure the form is **published** (not in draft mode)

### Step 2: Get the Embed Code

1. **Open Your Form:**
   - In Zoho Forms dashboard, open your contact form

2. **Get Embed Code:**
   - Click on **"Share"** tab (or button)
   - Select **"Embed"** option
   - Choose **"iframe"** embed type

3. **Copy the Embed Code:**
   - You'll see an iframe code like this:
     ```html
     <iframe src="https://forms.zoho.com/form/your-form-id" 
             frameborder="0" 
             style="height:500px;width:100%">
     </iframe>
     ```
   - Copy the entire iframe code

4. **Customize (Optional):**
   - Adjust `height` attribute (default is usually 500px)
   - Adjust `width` attribute (usually 100%)
   - Add any custom styling

---

## Embedding the Form

### Option 1: Replace the Current ContactForm Component

You can replace the existing `ContactForm` component with the Zoho Forms iframe:

**File: `src/components/contact/ContactForm.tsx`**

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * ContactForm component - Zoho Forms iframe embed
 * Displays embedded Zoho Forms contact form
 */
const ContactForm = () => {
  return (
    <motion.div 
      className="lg:col-span-2"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll respond within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <iframe
              src="https://forms.zoho.com/form/YOUR_FORM_ID"
              frameBorder="0"
              style={{ height: "600px", width: "100%" }}
              className="rounded-lg"
              title="Contact Form"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
```

**Replace `YOUR_FORM_ID`** with your actual Zoho Forms form ID from the embed code.

### Option 2: Add Iframe Alongside Current Form

If you want to keep both forms (your custom form and Zoho Forms), you can add a new section:

**File: `src/pages/Contact.tsx`**

```tsx
// Add this section after the existing ContactForm
<section className="py-8">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Or Use Our Form</h2>
      <iframe
        src="https://forms.zoho.com/form/YOUR_FORM_ID"
        frameBorder="0"
        style={{ height: "600px", width: "100%" }}
        className="rounded-lg"
        title="Contact Form"
      />
    </div>
  </div>
</section>
```

### Option 3: Create a Separate Component

Create a new component for the Zoho Forms iframe:

**File: `src/components/contact/ZohoFormsEmbed.tsx`**

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * ZohoFormsEmbed component - Embeds Zoho Forms iframe
 * @param {string} formId - Zoho Forms form ID
 * @param {number} height - Iframe height in pixels (default: 600)
 */
interface ZohoFormsEmbedProps {
  formId: string;
  height?: number;
}

const ZohoFormsEmbed = ({ formId, height = 600 }: ZohoFormsEmbedProps) => {
  const iframeSrc = `https://forms.zoho.com/form/${formId}`;

  return (
    <motion.div 
      className="lg:col-span-2"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll respond within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <iframe
              src={iframeSrc}
              frameBorder="0"
              style={{ height: `${height}px`, width: "100%" }}
              className="rounded-lg"
              title="Contact Form"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ZohoFormsEmbed;
```

Then use it in `Contact.tsx`:

```tsx
import ZohoFormsEmbed from "@/components/contact/ZohoFormsEmbed";

// In your component:
<ZohoFormsEmbed formId="YOUR_FORM_ID" height={600} />
```

---

## Styling and Customization

### Adjust Iframe Height

The iframe height should match your form's content. Common heights:

- **Short forms:** 400-500px
- **Medium forms:** 600-700px
- **Long forms:** 800-1000px

```tsx
// Example with custom height
<iframe
  src="https://forms.zoho.com/form/YOUR_FORM_ID"
  style={{ height: "700px", width: "100%" }}
/>
```

### Responsive Design

The iframe will automatically adjust to container width. For better mobile experience:

```tsx
<div className="w-full overflow-hidden">
  <iframe
    src="https://forms.zoho.com/form/YOUR_FORM_ID"
    style={{ height: "600px", width: "100%", minHeight: "400px" }}
    className="rounded-lg"
  />
</div>
```

### Custom Styling

You can add custom CSS classes:

```tsx
<iframe
  src="https://forms.zoho.com/form/YOUR_FORM_ID"
  className="rounded-lg shadow-lg border border-gray-200"
  style={{ height: "600px", width: "100%" }}
/>
```

---

## Testing

### Step 1: Test the Embed

1. **View the Contact Page:**
   - Navigate to `/contact` in your browser
   - Verify the iframe loads correctly

2. **Test Form Submission:**
   - Fill out all required fields
   - Submit the form
   - Check for success message

3. **Verify in Zoho Forms:**
   - Log in to Zoho Forms dashboard
   - Go to your form's **"Entries"** tab
   - Verify the test submission appears

### Step 2: Test Responsiveness

1. **Desktop View:**
   - Check form displays correctly on large screens
   - Verify iframe width is appropriate

2. **Mobile View:**
   - Test on mobile device or browser dev tools
   - Verify form is usable on small screens
   - Check iframe doesn't overflow

3. **Tablet View:**
   - Test on tablet-sized screens
   - Verify layout looks good

---

## Troubleshooting

### Issue 1: Iframe Not Loading

**Symptoms:**
- Blank space where iframe should be
- Console errors about iframe

**Solutions:**
1. ✅ Verify form ID is correct in the iframe URL
2. ✅ Check form is published (not in draft mode)
3. ✅ Verify form is accessible (try opening URL directly)
4. ✅ Check browser console for errors
5. ✅ Ensure no Content Security Policy (CSP) blocking iframe

### Issue 2: Form Not Submitting

**Symptoms:**
- Form fields work but submission fails
- Error message appears

**Solutions:**
1. ✅ Check form validation rules in Zoho Forms
2. ✅ Verify all required fields are filled
3. ✅ Check Zoho Forms dashboard for error logs
4. ✅ Test form directly in Zoho Forms (not embedded)
5. ✅ Verify form notifications are configured

### Issue 3: Styling Issues

**Symptoms:**
- Form doesn't match website design
- Layout looks broken

**Solutions:**
1. ✅ Customize form design in Zoho Forms builder
2. ✅ Adjust iframe height to match form content
3. ✅ Use CSS to style the iframe container
4. ✅ Check responsive breakpoints

### Issue 4: Form Too Tall/Short

**Symptoms:**
- Too much white space
- Form content cut off

**Solutions:**
1. ✅ Adjust iframe height attribute
2. ✅ Test different heights (400px, 600px, 800px)
3. ✅ Use dynamic height if needed (requires JavaScript)

### Issue 5: Mobile Display Issues

**Symptoms:**
- Form not usable on mobile
- Horizontal scrolling

**Solutions:**
1. ✅ Ensure container has `width: 100%`
2. ✅ Add responsive CSS classes
3. ✅ Test form in Zoho Forms mobile view
4. ✅ Adjust iframe height for mobile

---

## Advanced: Dynamic Height (Optional)

If your form height varies, you can make the iframe adjust automatically:

```tsx
import { useEffect, useRef } from "react";

const ZohoFormsEmbed = ({ formId }: { formId: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Listen for messages from iframe (if Zoho Forms supports it)
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "resize") {
        iframe.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://forms.zoho.com/form/${formId}`}
      frameBorder="0"
      style={{ width: "100%", minHeight: "400px" }}
      className="rounded-lg"
    />
  );
};
```

---

## Best Practices

1. **Form Design:**
   - Match your website's color scheme
   - Use consistent fonts and styling
   - Keep form fields organized

2. **Performance:**
   - Iframe loads asynchronously (good for page speed)
   - Consider lazy loading if form is below fold

3. **Accessibility:**
   - Add descriptive `title` attribute
   - Ensure form is keyboard navigable
   - Test with screen readers

4. **Security:**
   - Zoho Forms handles all security
   - No need for additional validation
   - Built-in spam protection

5. **Analytics:**
   - Track form views in your analytics
   - Monitor submission rates
   - Use Zoho Forms analytics for detailed insights

---

## Summary

Using Zoho Forms iframe embed is the simplest integration method:

1. ✅ Create form in Zoho Forms
2. ✅ Get embed code
3. ✅ Add iframe to your React component
4. ✅ Customize styling
5. ✅ Test and deploy

**No API configuration needed!** The iframe handles everything automatically.

---

**Last Updated:** December 2024  
**Version:** 1.0.0


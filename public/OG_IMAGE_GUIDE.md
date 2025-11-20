# Open Graph Image Creation Guide

## Specifications

- **Recommended Size**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **File Format**: PNG or JPG
- **File Size**: Keep under 1MB for faster loading
- **File Name**: `og-image.png`

## What to Include

Your Open Graph image should include:
1. **Company Logo** - Your SYD Solution Tech logo
2. **Company Name** - "SYD Solution Tech" prominently displayed
3. **Tagline/Description** - Brief description of your services
4. **Brand Colors** - Use your orange primary color (#FF6B35 or similar)
5. **Clean Design** - Simple, professional, and readable

## Methods to Create

### Method 1: Online Tools (Easiest)

1. **Canva** (https://www.canva.com/)
   - Search for "Open Graph" or "Facebook Post" template
   - Size: 1200 x 630 pixels
   - Add your logo, company name, and tagline
   - Download as PNG

2. **Figma** (https://www.figma.com/)
   - Create a new frame: 1200 x 630 pixels
   - Design your OG image
   - Export as PNG

3. **OG Image Generators**:
   - https://www.opengraph.xyz/
   - https://og-image.vercel.app/

### Method 2: Design Software

- **Adobe Photoshop/Illustrator**
- **GIMP** (Free alternative)
- **Sketch** (Mac)

### Method 3: Code-Based (Advanced)

You can create a React component that generates the OG image dynamically using libraries like:
- `@vercel/og` (if using Vercel)
- `canvas` library
- `sharp` for image processing

## Design Tips

1. **Text Readability**: Use high contrast between text and background
2. **Logo Placement**: Top-left or center
3. **Typography**: Use bold, readable fonts
4. **Spacing**: Don't overcrowd - leave breathing room
5. **Mobile Preview**: Test how it looks when shared on social media

## Example Content

- **Title**: "SYD Solution Tech"
- **Subtitle**: "Web, Mobile & Desktop Development"
- **Tagline**: "Innovative Technology Solutions"
- **Services**: "SEO • QA Testing • Business Applications"

## After Creation

1. Save the image as `og-image.png`
2. Place it in the `public` folder
3. The image will be accessible at: `https://www.sydsolutiontech.me/og-image.png`
4. Test using:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/


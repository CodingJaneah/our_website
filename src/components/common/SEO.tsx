import { useEffect } from "react";

/**
 * Interface for SEO component props
 */
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  noindex?: boolean;
}

/**
 * SEO component - Manages meta tags and structured data for better SEO
 * Updates document title, meta description, canonical URL, and structured data
 * Note: Open Graph and Twitter Card tags are handled statically in index.html
 * for social media crawlers that don't execute JavaScript
 * 
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} keywords - Optional keywords for meta tags
 * @param {string} canonicalUrl - Optional canonical URL
 * @param {string} ogImage - Optional Open Graph image URL (not used, kept for compatibility)
 * @param {string} ogType - Optional Open Graph type (not used, kept for compatibility)
 * @param {Record<string, unknown>} structuredData - Optional structured data (JSON-LD)
 * @param {boolean} noindex - Optional flag to add noindex meta tag (default: false)
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType,
  structuredData,
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://www.sydsolutiontech.me";
  const fullTitle = `${title} | SYD Solution Tech`;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Update or create canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullCanonicalUrl);

    // Note: Open Graph and Twitter Card tags are handled statically in index.html
    // Facebook's crawler doesn't execute JavaScript, so static tags are required
    // Dynamic OG tags are not added here to avoid duplication

    // Add noindex meta tag if specified
    if (noindex) {
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", "noindex, nofollow");
    }

    // Add structured data (JSON-LD)
    if (structuredData) {
      let scriptStructured = document.querySelector('script[type="application/ld+json"]');
      if (!scriptStructured) {
        scriptStructured = document.createElement("script");
        scriptStructured.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptStructured);
      }
      scriptStructured.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, fullCanonicalUrl, structuredData, fullTitle, noindex]);

  return null;
};

export default SEO;


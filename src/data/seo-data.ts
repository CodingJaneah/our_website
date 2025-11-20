import { projects } from "./portfolio-data";
import { serviceDetails } from "./services-data";
import { team, technicalExpertise } from "./about-data";
import { customerFeedback } from "./home-data";

/**
 * Site configuration constants
 */
const SITE_URL = "https://www.sydsolutiontech.me";
const SITE_NAME = "SYD Solution Tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Interface for SEO metadata
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogType?: string;
  noindex?: boolean;
}

/**
 * Interface for structured data generator function
 */
type StructuredDataGenerator = () => Record<string, unknown>;

/**
 * Base organization data for structured data
 * Reusable across all pages
 */
const getBaseOrganization = () => ({
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": DEFAULT_OG_IMAGE,
});

/**
 * Home page SEO metadata
 */
export const homeSEO: SEOMetadata = {
  title: "Syd Solution Tech - Web, Mobile & Desktop Development | SEO & Digital Marketing",
  description: "SYD Solution Tech specializes in web, mobile, and desktop development, SEO & digital marketing, QA & testing, and business applications. Transform your business with innovative technology solutions. Expert software development services for modern businesses.",
  keywords: "web development, mobile app development, desktop applications, SEO, digital marketing, QA testing, business applications, POS systems, inventory management, ERP solutions, GoHighLevel automation, software development, custom software, technology solutions",
  canonicalUrl: "/",
  ogType: "website",
};

/**
 * Generates structured data for Home page
 * @returns {Record<string, unknown>} Organization structured data
 */
export const getHomeStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": DEFAULT_OG_IMAGE,
  "description": homeSEO.description,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PH"
  },
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": `${SITE_URL}/contact`
  },
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "serviceType": "Software Development",
      "description": "Web, mobile, and desktop development services"
    }
  }
});

/**
 * About page SEO metadata
 */
export const aboutSEO: SEOMetadata = {
  title: "About Syd Solution Tech",
  description: "Learn about SYD Solution Tech - a technology company specializing in software development, e-commerce, digital marketing, and IT solutions. Meet our experienced team of developers, QA specialists, and digital marketers. Discover our mission, vision, values, and technical expertise.",
  keywords: "about SYD Solution Tech, software development company, technology team, web developers, QA specialists, digital marketing team, company mission, company values, technical expertise, software development services",
  canonicalUrl: "/about",
  ogType: "website",
};

/**
 * Generates structured data for About page
 * @returns {Record<string, unknown>} AboutPage structured data
 */
export const getAboutStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": `About ${SITE_NAME}`,
  "description": aboutSEO.description,
  "url": `${SITE_URL}/about`,
  "mainEntity": {
    ...getBaseOrganization(),
    "description": aboutSEO.description,
    "foundingDate": "2009",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": team.length
    },
    "employee": team.map((member) => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "knowsAbout": member.expertise
    })),
    "knowsAbout": technicalExpertise.map((expertise) => expertise.title),
    "areaServed": {
      "@type": "Country",
      "name": "Philippines"
    }
  }
});

/**
 * Services page SEO metadata
 */
export const servicesSEO: SEOMetadata = {
  title: "Our Services",
  description: "SYD Solution Tech offers comprehensive technology services including web, mobile, and desktop development, SEO & digital marketing, QA & testing, and business applications. Custom software solutions, POS systems, inventory management, ERP solutions, and GoHighLevel automation.",
  keywords: "web development services, mobile app development, desktop application development, SEO services, digital marketing, QA testing services, manual testing, automation testing, business applications, POS systems, inventory management, ERP solutions, odoo systems, GoHighLevel automation, software development services",
  canonicalUrl: "/services",
  ogType: "website",
};

/**
 * Generates structured data for Services page
 * @returns {Record<string, unknown>} Service structured data
 */
export const getServicesStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `${SITE_NAME} Services`,
  "description": servicesSEO.description,
  "url": `${SITE_URL}/services`,
  "provider": getBaseOrganization(),
  "serviceType": "Software Development Services",
  "areaServed": {
    "@type": "Country",
    "name": "Philippines"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Services",
    "itemListElement": serviceDetails.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.features.join(", ")
      },
      "position": index + 1
    }))
  }
});

/**
 * Portfolio page SEO metadata
 */
export const portfolioSEO: SEOMetadata = {
  title: "Our Portfolio",
  description: "Explore SYD Solution Tech's portfolio of innovative projects. We deliver cutting-edge web applications, e-commerce solutions, AI-powered bots, and automation tools that transform business operations and drive digital growth. View our completed projects including Incident Management Systems, E-Commerce platforms, and more.",
  keywords: "portfolio, web development projects, software development, e-commerce solutions, AI bots, automation tools, incident management system, web applications, software portfolio, technology projects, SYD Solution Tech projects",
  canonicalUrl: "/portfolio",
  ogType: "website",
};

/**
 * Generates structured data for Portfolio page
 * @returns {Record<string, unknown>} CollectionPage structured data
 */
export const getPortfolioStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": `Our Portfolio - ${SITE_NAME}`,
  "description": portfolioSEO.description,
  "url": `${SITE_URL}/portfolio`,
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "applicationCategory": project.category,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  },
  "publisher": getBaseOrganization()
});

/**
 * Contact page SEO metadata
 */
export const contactSEO: SEOMetadata = {
  title: "Get In Touch",
  description: "Get in touch with SYD Solution Tech. Contact us for custom web applications, automation solutions, digital transformation projects, and software development services. Let's build something great together and help your business grow smarter and faster.",
  keywords: "contact SYD Solution Tech, software development contact, web development contact, get in touch, contact form, business inquiry, project consultation, technology services contact",
  canonicalUrl: "/contact",
  ogType: "website",
};

/**
 * Generates structured data for Contact page
 * @returns {Record<string, unknown>} ContactPage structured data
 */
export const getContactStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact ${SITE_NAME}`,
  "description": contactSEO.description,
  "url": `${SITE_URL}/contact`,
  "mainEntity": {
    ...getBaseOrganization(),
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": `${SITE_URL}/contact`,
      "availableLanguage": ["English"]
    }
  }
});

/**
 * Feedbacks page SEO metadata
 */
export const feedbacksSEO: SEOMetadata = {
  title: "Client Feedbacks",
  description: "Read client feedbacks and testimonials from businesses that have worked with SYD Solution Tech. Real reviews from satisfied clients about our web development, software development, and technology services. Trusted by businesses worldwide for delivering exceptional results.",
  keywords: "client feedbacks, customer testimonials, client reviews, SYD Solution Tech reviews, software development reviews, web development testimonials, customer satisfaction, client success stories",
  canonicalUrl: "/feedbacks",
  ogType: "website",
};

/**
 * Generates structured data for Feedbacks page
 * @returns {Record<string, unknown>} WebPage structured data with reviews
 */
export const getFeedbacksStructuredData = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Client Feedbacks - ${SITE_NAME}`,
  "description": feedbacksSEO.description,
  "url": `${SITE_URL}/feedbacks`,
  "mainEntity": {
    ...getBaseOrganization(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": customerFeedback.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": customerFeedback.slice(0, 5).map((feedback) => ({
      "@type": "Review",
      "reviewBody": feedback.feedback,
      "author": {
        "@type": "Person",
        "name": "Client"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  }
});

/**
 * NotFound page SEO metadata
 */
export const notFoundSEO: SEOMetadata = {
  title: "404 - Page Not Found",
  description: "Page not found. The page you are looking for does not exist or has been moved. Return to SYD Solution Tech homepage.",
  keywords: "404, page not found, error page",
  canonicalUrl: "/404",
  ogType: "website",
  noindex: true,
};

/**
 * SEO data mapping for easy access
 * Maps route paths to their respective SEO data and structured data generators
 */
export const seoDataMap: Record<string, {
  metadata: SEOMetadata;
  getStructuredData: StructuredDataGenerator;
}> = {
  "/": {
    metadata: homeSEO,
    getStructuredData: getHomeStructuredData,
  },
  "/about": {
    metadata: aboutSEO,
    getStructuredData: getAboutStructuredData,
  },
  "/services": {
    metadata: servicesSEO,
    getStructuredData: getServicesStructuredData,
  },
  "/portfolio": {
    metadata: portfolioSEO,
    getStructuredData: getPortfolioStructuredData,
  },
  "/contact": {
    metadata: contactSEO,
    getStructuredData: getContactStructuredData,
  },
  "/feedbacks": {
    metadata: feedbacksSEO,
    getStructuredData: getFeedbacksStructuredData,
  },
  "/404": {
    metadata: notFoundSEO,
    getStructuredData: () => ({}),
  },
};


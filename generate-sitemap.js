import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

/**
 * Generates a sitemap.xml file for the website
 * Includes all routes defined in the application
 * Outputs the sitemap to the public directory
 */
const generateSitemap = () => {
  const hostname = process.env.SITE_URL || "https://www.sydsolutiontech.me";
  const sitemap = new SitemapStream({ hostname });

  // All routes defined in the application
  const routes = [
    "/",           // Homepage
    "/services",   // Services page
    "/portfolio",  // Portfolio page
    "/about",      // About page
    "/feedbacks",  // Feedbacks page
    "/contact",    // Contact page
  ];

  // Write each route to the sitemap
  routes.forEach((route) => {
    sitemap.write({ url: route });
  });

  sitemap.end();

  // Generate and save the sitemap
  streamToPromise(sitemap)
    .then((data) => {
      writeFileSync("./public/sitemap.xml", data.toString());
      console.log("✅ sitemap.xml generated successfully!");
      console.log(`📍 Sitemap saved to: ./public/sitemap.xml`);
      console.log(`🌐 Hostname: ${hostname}`);
    })
    .catch((error) => {
      console.error("❌ Error generating sitemap:", error);
      process.exit(1);
    });
};

generateSitemap();

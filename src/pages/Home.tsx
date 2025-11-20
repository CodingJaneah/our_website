import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import CustomerFeedbackCarousel from "@/components/home/CustomerFeedbackCarousel";
import CTASection from "@/components/common/CTASection";
import SEO from "@/components/common/SEO";
import { homeSEO, getHomeStructuredData } from "@/data/seo-data";

/**
 * Home page component - Main landing page
 * Includes SEO optimization with meta tags and structured data
 */
const Home = () => {
  return (
    <>
      <SEO
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        canonicalUrl={homeSEO.canonicalUrl}
        ogType={homeSEO.ogType}
        structuredData={getHomeStructuredData()}
      />
      <main>
        <HeroSection />
        <ServicesPreview />
        <CustomerFeedbackCarousel />
        <CTASection
          title="Ready to Start Your Project?"
          description="Let's discuss how we can help transform your ideas into powerful digital solutions"
          buttons={[
            { label: "Contact Us Today", path: "/contact", variant: "secondary" }
          ]}
        />
      </main>
    </>
  );
};

export default Home;

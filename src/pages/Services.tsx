import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/common/SEO";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ProcessSteps from "@/components/services/ProcessSteps";
import CTASection from "@/components/common/CTASection";
import { servicesSEO, getServicesStructuredData } from "@/data/seo-data";

/**
 * Services page component - Detailed services page
 * Includes SEO optimization with meta tags and structured data
 */
const Services = () => {
  return (
    <>
      <SEO
        title={servicesSEO.title}
        description={servicesSEO.description}
        keywords={servicesSEO.keywords}
        canonicalUrl={servicesSEO.canonicalUrl}
        ogType={servicesSEO.ogType}
        structuredData={getServicesStructuredData()}
      />
      <main className="min-h-screen">
        <PageHeader
          title="Our Services"
          description="Comprehensive technology solutions designed to drive your business forward"
        />
        <ServicesGrid />
        <ServiceFeatures />
        <ProcessSteps />
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss how our services can help transform your business and drive growth"
          buttons={[
            { label: "Contact Us Today", path: "/contact", variant: "secondary" },
            { label: "View Our Work", path: "/portfolio", variant: "outline" }
          ]}
        />
      </main>
    </>
  );
};

export default Services;

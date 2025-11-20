import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/common/SEO";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import TechnicalExpertise from "@/components/about/TechnicalExpertise";
import { aboutSEO, getAboutStructuredData } from "@/data/seo-data";

/**
 * About page component - Company information page
 * Includes SEO optimization with meta tags and structured data
 */
const About = () => {
  return (
    <>
      <SEO
        title={aboutSEO.title}
        description={aboutSEO.description}
        keywords={aboutSEO.keywords}
        canonicalUrl={aboutSEO.canonicalUrl}
        ogType={aboutSEO.ogType}
        structuredData={getAboutStructuredData()}
      />
      <main className="min-h-screen">
        <PageHeader
          title="About Syd Solution Tech"
          description="Building the future of technology, one innovative solution at a time"
        />
        <CompanyStory />
        <MissionVision />
        <Values />
        <Team />
        <TechnicalExpertise />
      </main>
    </>
  );
};

export default About;

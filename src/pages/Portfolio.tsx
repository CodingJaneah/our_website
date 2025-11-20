import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/common/SEO";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import PortfolioStats from "@/components/portfolio/PortfolioStats";
import { portfolioSEO, getPortfolioStructuredData } from "@/data/seo-data";

/**
 * Portfolio page component - Projects showcase page
 * Includes SEO optimization with meta tags and structured data
 */
const Portfolio = () => {
  return (
    <>
      <SEO
        title={portfolioSEO.title}
        description={portfolioSEO.description}
        keywords={portfolioSEO.keywords}
        canonicalUrl={portfolioSEO.canonicalUrl}
        ogType={portfolioSEO.ogType}
        structuredData={getPortfolioStructuredData()}
      />
      <main className="min-h-screen">
        <PageHeader
          title="Our Portfolio"
          description="We deliver innovative projects designed to create value and efficiency for our clients. From intelligent Incident Management Systems and AI-powered bots to scalable e-learning platforms and automated recruitment tools, our solutions are built to transform business operations and drive digital growth."
        />
        <ProjectsGrid />
        <PortfolioStats />
      </main>
    </>
  );
};

export default Portfolio;

import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/common/SEO";
import FeedbackStats from "@/components/feedbacks/FeedbackStats";
import FeedbackCarousel from "@/components/feedbacks/FeedbackCarousel";
import AllFeedbacksGrid from "@/components/feedbacks/AllFeedbacksGrid";
import CTASection from "@/components/common/CTASection";
import { feedbacksSEO, getFeedbacksStructuredData } from "@/data/seo-data";

/**
 * Feedbacks page component - Customer feedbacks and testimonials
 * Includes SEO optimization with meta tags and structured data
 */
const Feedbacks = () => {
  return (
    <>
      <SEO
        title={feedbacksSEO.title}
        description={feedbacksSEO.description}
        keywords={feedbacksSEO.keywords}
        canonicalUrl={feedbacksSEO.canonicalUrl}
        ogType={feedbacksSEO.ogType}
        structuredData={getFeedbacksStructuredData()}
      />
      <main className="min-h-screen">
        <PageHeader
          title="Client Feedbacks"
          description="Trusted by businesses worldwide for delivering exceptional results"
        />
        <FeedbackStats />
        <FeedbackCarousel
          title="What Our Clients Say"
          description="Real feedback from businesses that have worked with us"
        />
        <AllFeedbacksGrid />
        <CTASection
          title="Ready to Join Our Success Stories?"
          description="Let's discuss how we can help transform your business and achieve your goals"
          buttons={[
            { label: "Get Started Today", path: "/contact", variant: "secondary" },
            { label: "View Our Services", path: "/services", variant: "outline" }
          ]}
        />
      </main>
    </>
  );
};

export default Feedbacks;

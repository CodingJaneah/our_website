import PageHeader from "@/components/common/PageHeader";
import SEO from "@/components/common/SEO";
import ContactForm from "@/components/contact/ContactForm";
import ZohoFormsEmbed from "@/components/contact/ZohoFormsEmbed";
import ContactInfo from "@/components/contact/ContactInfo";
import { contactSEO, getContactStructuredData } from "@/data/seo-data";

/**
 * Contact page component - Contact form and information page
 * Includes SEO optimization with meta tags and structured data
 */
const Contact = () => {
  return (
    <>
      <SEO
        title={contactSEO.title}
        description={contactSEO.description}
        keywords={contactSEO.keywords}
        canonicalUrl={contactSEO.canonicalUrl}
        ogType={contactSEO.ogType}
        structuredData={getContactStructuredData()}
      />
      <main className="min-h-screen">
        <PageHeader
          title="Get In Touch"
          description="Let's build something great together. Whether you're looking for a custom web application, automation solution, or digital transformation project — SYD Solution Tech is here to help your business grow smarter and faster."
        />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* <ZohoFormsEmbed /> */}
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

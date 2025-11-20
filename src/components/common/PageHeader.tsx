/**
 * PageHeader component - Reusable header section for pages
 * @param {string} title - The main heading text
 * @param {string} description - The description text below the title
 */
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;


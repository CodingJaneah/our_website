import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "@/assets/about-company.png";
import Image2 from "@/assets/about-us-image.png";

/**
 * CompanyStory component - Company story section
 */
const CompanyStory = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-center text-primary" 
            {...fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            Our Story
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 text-lg text-muted-foreground mt-10">
            <div className="md:w-1/2 w-full flex justify-center gap-4 flex-wrap">
              <img 
                src={Image} 
                alt="Our Story" 
                className="object-contain rounded-lg border-2 border-primary"
              />
              <img 
                src={Image2} 
                alt="Our Story" 
                className="object-cover rounded-3xl border-2 border-primary"
              />
            </div>  
            <div className="md:w-1/2 space-y-6 px-4">
              <p>
                SYD Solution Tech is a forward-thinking
                technology company dedicated to delivering
                innovative, reliable, and scalable IT solutions. We
                empower businesses in the digital age through
                software development, e-commerce, and digital
                marketing, combining creativity, advanced
                technologies, and strategic insight to drive
                measurable results.
                <br />
                <br />
                We don't just build solutions — we build
                partnerships. Our vision is to be a globally
                recognized digital solutions provider,
                transforming industries through innovation,
                customer-centric strategies, and sustainable
                growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;


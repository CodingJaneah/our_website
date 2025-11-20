import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { team } from "@/data/about-data";
import SectionTitle from "@/components/common/SectionTitle";

/**
 * Team component - Team members grid
 */
const Team = () => {
  return (
    <section className="py-8 px-4 text-center">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Meet Our Team"
          description=""
        />
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
        >
          We are powered by skilled professionals in software development, AI, quality assurance, and project management. Collaboration and open communication drive our success, ensuring every project is delivered with innovation, precision, and excellence.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-18"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              variants={staggerItem}
              className="w-full"
            >
              <Card className="text-center hover:shadow-lg transition-shadow w-full h-full">
                <CardHeader>
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-primary mb-4 overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-primary"></div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;


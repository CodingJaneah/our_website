import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { projects } from "@/data/portfolio-data";
import { useState } from "react";

/**
 * ProjectsGrid component - Grid of project cards with dialog
 * Uses semantic HTML (article tags) for better SEO
 */
const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-16" aria-label="Portfolio projects">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={staggerItem}
              className="flex"
              role="listitem"
            >
              <Dialog open={selectedProject === index} onOpenChange={(open) => setSelectedProject(open ? index : null)}>
                <DialogTrigger asChild>
                  <Card 
                    className="h-full w-full hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col hover:border-orange-500 hover:shadow-orange-200"
                    aria-label={`View details for ${project.title}`}
                  >
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" aria-label={`Category: ${project.category}`}>
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0" aria-labelledby={`project-title-${index}`}>
                  <div className="w-full">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-auto rounded-lg object-contain"
                      loading="lazy"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;


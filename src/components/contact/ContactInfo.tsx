import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

/**
 * ContactInfo component - Contact information cards
 * Displays contact information and provides a call button for immediate assistance
 */
const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "zamoranossydney@gmail.com",
      link: "mailto:zamoranossydney@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+63 915 685 5315",
      link: "tel:09156855315",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Block 5 Lot 17 & 19 Villa Antonella, Cadiz City, Negros Occidental, Philippines",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM - 5PM",
      link: "#",
    },
  ];

  // Get phone number link from contact info
  const phoneInfo = contactInfo.find((info) => info.title === "Phone");
  const phoneLink = phoneInfo?.link || "tel:09156855315";

  return (
    <motion.div 
      className="space-y-6"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={staggerItem}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Contact Information</CardTitle>
            <CardDescription>
              Reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">{info.title}</div>
                    <div className="text-sm text-muted-foreground">{info.content}</div>
                  </div>
                </a>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={staggerItem}>
        <Card className="bg-gradient-primary text-primary-foreground border-0">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Need Immediate Help?</h3>
            <p className="text-sm opacity-90 mb-4">
              For urgent inquiries, call us directly during business hours
            </p>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full"
              asChild
            >
              <a href={phoneLink}>
                Call Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;


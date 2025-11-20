import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * ZohoFormsEmbed component - Embeds Zoho Forms iframe
 * Simple iframe embed for Zoho Forms contact form
 * 
 * @param {string} iframeSrc - Full Zoho Forms iframe URL (required)
 * @param {number} height - Iframe height in pixels (default: 500)
 * @param {string} title - Card title (default: "Send us a Message")
 * @param {string} description - Card description
 */
interface ZohoFormsEmbedProps {
  iframeSrc?: string;
  height?: number;
  title?: string;
  description?: string;
}

const ZohoFormsEmbed = ({ 
  iframeSrc = "https://forms.zohopublic.com/sydsolutiontech1/form/SydSolutionTech/formperma/1dP-d3PVJ6eb2KeQ-uhL5Q0xZxQQi_IthEC7CZWA2SU",
  height = 500,
  title = "Send us a Message",
  description = "Fill out the form below and we'll respond within 24 hours"
}: ZohoFormsEmbedProps) => {
  return (
    <motion.div 
      className="lg:col-span-2"
      {...fadeInUp}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              aria-label="Syd Solution Tech"
              frameBorder="0"
              style={{ height: `${height}px`, width: "99%", border: "none" }}
              src={iframeSrc}
              title="Contact Form"
              className="rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ZohoFormsEmbed;


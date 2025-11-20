import incidentImage from "@/assets/incident-project.png";
import ecommerceImage from "@/assets/ecommerce-project.png";
import tampermonkeyImage from "@/assets/tampermonkey-project.png";
import declaImage from "@/assets/decla-project.png";
import livechatImage from "@/assets/livechat-project.png";

/**
 * Interface for portfolio project item
 */
interface ProjectItem {
  title: string;
  description: string;
  category: string;
  image: string;
}

/**
 * Portfolio projects array
 * Contains all the projects showcased by SYD Solution Tech
 * @returns {ProjectItem[]} Array of project objects with title, description, tags, category, and image
 */

export const projects: ProjectItem[] = [
  {
    title: "Incident Management System",
    description: "Structured platform for real-time detection, reporting, tracking, and resolution of business disruptions that provides a comprehensive view of incidents.",
    category: "Web Application",
    image: incidentImage,
  },
  {
    title: "E-Commerce",
    description: "A complete online store solution with product management, order tracking and integrated payment gateways.",
    category: "Web Application",
    image: ecommerceImage,
  },
  {
    title: "Tampermonkey Chrome Extension",
    description: "Automates recruitment by integrating LinkedIn & Handshake with Zoho CRM,reducing manual work and improving efficiency.",
    category: "Web Application",
    image: tampermonkeyImage,
  },
  {
    title: "Decla Online English Academy",
    description: "Interactive e-learning platform offering live classes, flexible schedules progress tracking, and multi-level courses.",
    category: "Web Application",
    image: declaImage,
  },
  {
    title: "Livechat Management System",
    description: "Streamlines real-time communication, support, and response tracking in one platform that allows to manage livechat conversations.",
    category: "Web Application",
    image: livechatImage,
  },
];


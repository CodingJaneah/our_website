/**
 * Interface for service detail item
 */
interface ServiceDetail {
  title: string;
  features: string[];
}

/**
 * Service details array
 * Contains detailed features for each service offered by SYD Solution Tech
 * @returns {ServiceDetail[]} Array of service detail objects with title and features
 */
export const serviceDetails: ServiceDetail[] = [
  {
    title: "Web, Mobile, and Desktop Development",
    features: [
      "Responsive and modernweb applications",
      "Cross-platform mobile app development",
      "API integration and third-party service connectivity",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media management",
      "Analytics and performancereporting",
    ],
  },
  {
    title: "QA & Testing (Manual & Automation)",
    features: [
      "Manual and automated testing",
      "Performance and load testing",
      "Regression testing and reporting",
    ],
  },
  {
    title: "Business Applications",
    features: [
      "Point of Sales (POS)",
      "Inventory Management System, & Go High Level ",
      "Enterprise Resource Planning (ERP), and Odoo Systems",
    ],
  },
];

import { Code, CheckCircle, TrendingUp, Layers, LucideIcon } from "lucide-react";

/**
 * Interface for service item
 */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Services array
 * Contains the services offered by SYD Solution Tech
 */
export const services: ServiceItem[] = [
  {
    icon: Code,
    title: "Web, Mobile, and Desktop Development",
    description: "Custom applications built for scalability and user experience for the technology needs of your business.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies with leading analytics tools to improve visibility and growth. Improve your online presence and attract more customers.",
  },
  {
    icon: CheckCircle,
    title: "QA & Testing (Manual & Automation)",
    description: "Ensure your software is bug-free and performs as expected. Also, future-ready releases.",
  },
  {
    icon: Layers,
    title: "Business Applications",
    description: "We develop and integrate business systems such as POS, Inventory Management, GoHighLevel automation, and ERP solutions—helping streamline operations and improve efficiency.",
  },
];

  
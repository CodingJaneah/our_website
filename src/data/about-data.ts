import { Target, Eye, Award, Users, Code, Server, Monitor, Database, Cloud, LucideIcon } from "lucide-react";
import melImage from "@/assets/team-images/mel.png";
import lloydImage from "@/assets/team-images/lloyd.png";
import marianaImage from "@/assets/team-images/mariana.jpg";
import sydneyImage from "@/assets/team-images/sydney.jpg";
import marvinImage from "@/assets/team-images/marvin.jpg";
import rhieynzImage from "@/assets/team-images/rhieynz.jpg";
import jmImage from "@/assets/team-images/jm.jpg";
import jkImage from "@/assets/team-images/joneri.jpg";
import zhedrickImage from "@/assets/team-images/zhedrick.jpg";
import heroImage from "@/assets/team-images/hero.png";
/**
 * Interface for company value item
 */
interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Interface for team member
 */
interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image?: string;
}

/**
 * Interface for technical expertise item
 */
interface TechnicalExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Company core values array
 * Contains the fundamental principles that guide SYD Solution Tech
 * @returns {ValueItem[]} Array of value objects with icon, title, and description
 */
export const values: ValueItem[] = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest collaboration form the foundation of our client relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in code quality, design, and project delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our success. We work as an extension of your team to achieve shared goals.",
  },
];

/**
 * Team members array
 * Contains information about all team members at SYD Solution Tech
 * @returns {TeamMember[]} Array of team member objects with name, role, and expertise
 */
export const team: TeamMember[] = [
  {
    name: "Marvin Dumon",
    role: "Quality Assurance",
    expertise: "Manual Testing",
    image: marvinImage,
  },
  {
    name: "Rhieynz John Esmaña",
    role: "Backend Developer",
    expertise: "Backend Development",
    image: rhieynzImage,
  },
    {
    name: "Sydney Zamoranos",
    role: "Chief Executive Officer",
    expertise: "Business Development",
    image: sydneyImage,
  },
  {
    name: "Mel Christopher Portanova",
    role: "Web Developer",
    expertise: "Web Development",
    image: melImage,
  },
  {
    name: "Lloyd Draizen Martirez",
    role: "Web Developer",
    expertise: "Web Development",
    image: lloydImage,
  },
  {
    name: "John Michael Maningo",
    role: "Front End Developer",
    expertise: "Front End Development",
    image: jmImage,
  },
  {
    name: "Joneri Kellyn Ruado",
    role: "Python Developer",
    expertise: "Python Development",
    image: jkImage,
  },
  {
    name: "Zhedrick Villavecencio",
    role: "Web Developer",
    expertise: "Web Development",
    image: zhedrickImage,
  },
  {
    name: "Mariana Jane Ramos",
    role: "Web Developer",
    expertise: "Web Development",
    image: marianaImage,
  },
  {
    name: "Hero Joy Palang",
    role: "Digital Marketer",
    expertise: "Digital Marketing",
    image: heroImage,
  },
];

/**
 * Technical expertise array
 * Contains the technical skills and capabilities of SYD Solution Tech
 * @returns {TechnicalExpertiseItem[]} Array of technical expertise objects with icon, title, and description
 */
export const technicalExpertise: TechnicalExpertiseItem[] = [
  {
    icon: Code,
    title: "Programming",
    description: "Expertise in multiple programming languages including Java, SQL, JavaScript, TypeScript, PHP, and Pde.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications with Spring Boot, Hibernate, RESTful APIs, GraphQL, and Microservices.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating responsive and interactive, user interfaces with Angular, Tailwind CSS, Bootstrap, Material UI, and modern CSS frameworks.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and managing databases with MySQL, PostgreSQL, and MongoDB.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on cloud platforms with Docker, AWS (EC2, S3, RDS), and GitHub Actions (CI/CD).",
  },
  {
    icon: Cloud,
    title: "Tools",
    description: "We use the latest tools and technologies to deliver the best results for our clients such as Figma, Postman, VS Code, and Chrome DevTools.",
  },
];


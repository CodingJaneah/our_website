import { Code, CheckCircle, Bot, TrendingUp, LucideIcon, AppWindow, Layers } from "lucide-react";
import Image1 from "@/assets/feedbacks/feedback1.png";
import Image2 from "@/assets/feedbacks/feedback2.png";
import Image3 from "@/assets/feedbacks/feedback3.png";
import Image4 from "@/assets/feedbacks/feedback4.png";
import Image5 from "@/assets/feedbacks/feedback5.png";
import Image6 from "@/assets/feedbacks/feedback6.png";
import Image7 from "@/assets/feedbacks/feedback7.png";
import Image8 from "@/assets/feedbacks/feedback8.png";
import Image9 from "@/assets/feedbacks/feedback9.png";
import Image10 from "@/assets/feedbacks/feedback10.png";
import Image11 from "@/assets/feedbacks/feedback11.png";
import Image12 from "@/assets/feedbacks/feedback12.png";
import Image13 from "@/assets/feedbacks/feedback13.png";
import Image14 from "@/assets/feedbacks/feedback14.png";
import Image15 from "@/assets/feedbacks/feedback15.png";
import Image16 from "@/assets/feedbacks/feedback16.png";
import Image17 from "@/assets/feedbacks/feedback17.png";
import Image18 from "@/assets/feedbacks/feedback18.png";
import Image19 from "@/assets/feedbacks/feedback19.png";
import Image20 from "@/assets/feedbacks/feedback20.png";
import Image21 from "@/assets/feedbacks/feedback21.png";
import Image22 from "@/assets/feedbacks/feedback22.png";
import Image23 from "@/assets/feedbacks/feedback23.png";

/**
 * Interface for service item
 */

/**
 * Interface for customer feedback item
 */
interface CustomerFeedbackItem {
  feedback: string;
  image: string;
  role: string;
}

// Services moved to `src/data/services-data.ts` to keep data concerns separated.

/**
 * Customer feedback array
 * Contains testimonials from satisfied clients
 * @returns {CustomerFeedbackItem[]} Array of customer feedback objects with company, feedback, and image
 */
export const customerFeedback: CustomerFeedbackItem[] = [
  {
    feedback: "Sydney has a really good work ethic, is a kind and caring individual as well he looks beyond just the code but takes a good understanding of the product.",
    image: Image6,
    role: "Frontend Engineer",
  },
  {
    feedback: "Sydney is an awesome and great contributor to the company, looking forward to be working with him again long term. Thanks Syd!",
    image: Image1,
    role: "",
  },
  {
    feedback: "Highly recommended. Quick response to my queries. Job well done according to timeline and specifications.",
    image: Image20,
    role: "",
  },
  {
    feedback: "Top-tier service! The team provided outstanding communication and met all deadlines. Their professional, precise full-stack development successfully completed all projects, including our complex SaaS Treasury System.",
    image: Image2,
    role: "",
  },
  {
    feedback: "Great developer with excellent problem-solving skills. Delivered quality work on time.",
    image: Image3,
    role: "",
  },
  {
    feedback: "Professional and reliable. Would definitely work with again!",
    image: Image4,
    role: "Production & Research Assistant",
  },
  {
    feedback: "Sydney tried very hard to make sure he did his jobs well, very nice guy to work with.",
    image: Image5,
    role: "Virtual Assistant",
  },
  {
    feedback: "Test work completed successfully and on time. Am planning on hiring for the next stage of our projects. Thank you Sydney!",
    image: Image7,
    role: "Fortune FitPro Technical Test",
  },
  {
    feedback: "Communicates very effectively and gets the job done. Always on top of the tasks that need to be completed. Great job!",
    image: Image8,
    role: "",
  },
  {
    feedback: "Highly recommended!",
    image: Image9,
    role: "",
  },
  {
    feedback: "Outstanding work! The developer expertly delivered our Java backend using Spring, PostgreSQL, Angular, and AWS. The project was on time with excellent communication. We are very happy and look forward to working together again!",
    image: Image10,
    role: "Java Backend Developer",
  },
  {
    feedback: "Sydney is a great talented and hardworking developer, team player, and problem solver. I highly recommend him for any company requirements.",
    image: Image11,
    role: "",
  },
  {
    feedback: "Sydney is a great candidate to work with including his communication skills, responsiveness.",
    image: Image12,
    role: "",
  },
  {
    feedback: "Excellent work quality and fast delivery. Very satisfied!",
    image: Image13,
    role: "",
  },
  {
    feedback: "Sydney is an absolute pleasure to work with. He excels at taking instructions and following direction from project scopes, and I relied on him to prepare several e-commerce catalogs.",
    image: Image14,
    role: "",
  },
  {
    feedback: "Thanks for your help!",
    image: Image15,
    role: "",
  },
  {
    feedback: "Thank you and all the best",
    image: Image16,
    role: "",
  },
  {
    feedback: "Great hire...ending contract due to direction change.",
    image: Image17,
    role: "",
  },
  {
    feedback: "Meets deadline. 2 thumbs up on communication!",
    image: Image18,
    role: "",
  },
  {
    feedback: "Responsive and detail-oriented. Great collaboration throughout the project.",
    image: Image19,
    role: "",
  },
  {
    feedback: "Skilled developer who understands requirements well. Job well done!",
    image: Image21,
    role: "",
  },
  {
    feedback: "trial contract, thank you",
    image: Image22,
    role: "",
  },
  {
    feedback: "Excellent teamwork and collaboration to get the technical java work done. Growth in java skills over the contract. Thanks!",
    image: Image23,
    role: "Java Developer",
  },
];

export const carouselFeedbacks: CustomerFeedbackItem[] = [
  customerFeedback[0],  
  customerFeedback[22],  
  customerFeedback[5],  
  customerFeedback[6],  
  customerFeedback[7],  
  customerFeedback[10], 
];


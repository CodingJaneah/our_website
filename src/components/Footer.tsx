import { Mail, Phone, MapPin } from "lucide-react";
import type { SVGProps } from "react";
import logo from "@/assets/company-logo.png"
import { Link } from "react-router-dom";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.21 10.44 21.95v-6.99H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.15 0-1.51.72-1.51 1.46v1.76h2.57l-.41 2.9h-2.16v6.99C18.34 21.21 22 17.09 22 12.07z"/>
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.39c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86v5.48H8.47V9h3.41v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.77zM5.34 7.43a2.06 2.06 0 11.001-4.12 2.06 2.06 0 01-.001 4.12zM7.11 20.45H3.58V9h3.53v11.45z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left text-muted-foreground">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span className="text-lg font-semibold text-primary">Syd Solution Tech</span>
            </div>
            <p className="text-[16px] text-muted-foreground">
              Innovative technology solutions for modern businesses
            </p>
            <div className="flex flex-row items-start gap-2 mt-4 justify-center md:justify-start">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-[16px]">
                  Block 5 Lot 17 &amp; 19 Villa Antonella, Cadiz City, Negros Occidental, Philippines
                </span>
            </div>
          </div>

          <div className="ml-0 md:text-center lg:ml-20 sm:ml-0">
            <h3 className="font-semibold mb-4 text-primary text-lg text-center w-auto lg:text-left">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground w-auto">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[16px] w-auto">
                <Mail className="h-4 w-4" />
                <span className="w-auto">zamoranossydney@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[16px]">
                <Phone className="h-4 w-4" />
                <span>+63 915 685 5315</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 md:gap-20">
            <div className="space-y-2 text-sm text-muted-foreground text-center md:text-left text-[16px]">
              <h3 className="font-semibold mb-4 text-primary text-lg md:text-lg">Quick Links</h3>
              <Link to="/portfolio" className="block hover:text-primary transition-colors text-[16px]">
                Portfolio
              </Link>
              <Link to="/about" className="block hover:text-primary transition-colors text-[16px]">
                About Us
              </Link>
              <Link to="/contact" className="block hover:text-primary transition-colors text-[16px]">
                Contact Us
              </Link>
            </div>
  
            <div className="space-y-2 text-muted-foreground text-center md:text-left text-[16px]">
              <h3 className="font-semibold mb-4 text-primary text-lg">Follow Us</h3>
   
              <a
                href="https://web.facebook.com/profile.php?id=61581534691545"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <FacebookIcon className="h-6 w-6 text-gray-700" />
                <span>Syd Solution Tech</span>
              </a>
              <a
                href="https://web.facebook.com/sydney.zamoranos.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors"
                aria-label="Sydney Zamoranos on Facebook"
              >
                <FacebookIcon className="h-6 w-6 text-gray-700" />
                <span>Sydney Zamoranos</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sid-zamora-407b8b27b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors"
                aria-label="Syd Solution Tech on LinkedIn"
              >
                <span className="inline-flex items-center justify-center h-6 w-6">
                  <LinkedInIcon className="h-6 w-6 text-gray-700" />
                </span>
                <span>Sydney Zamoranos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-[16px]">
          <p>&copy; {new Date().getFullYear()} Syd Solution Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

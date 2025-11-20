import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/company-logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    {path: "/feedbacks", label: "Feedbacks"},
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  /**
   * Scrolls to top of the page when navigation link is clicked
   * Works even when clicking the same page's navigation link
   */
  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8 bg-transparent" />
            <span className="text-xl font-semibold text-primary">Syd Solution Tech</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={handleNavClick}>
              <Button
                variant={isActive(link.path) ? "default" : "ghost"}
                size="sm"
                className="font-medium"
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
              >
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

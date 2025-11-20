import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * ThemeToggle component
 * Toggles between light and dark mode with moon/sun icons
 * Handles theme switching and displays appropriate icon based on current theme
 */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <div className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 hover:bg-muted hover:text-primary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-9 w-9 text-primary hover:text-primary" />
      ) : (
        <Sun className="h-9 w-9 text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;


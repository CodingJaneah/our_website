import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top when the route changes
 * This ensures that when users navigate between pages, they always start at the top of the page
 * 
 * @returns null (component doesn't render anything)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when pathname changes
    // Using instant scroll ensures it works even when navigating from bottom of page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;


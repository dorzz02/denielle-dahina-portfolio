import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-12 h-12 rounded-full",
        "bg-primary text-primary-foreground",
        "shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:scale-110 hover:shadow-xl",
        "active:scale-95",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ChevronUp size={22} />
    </button>
  );
};
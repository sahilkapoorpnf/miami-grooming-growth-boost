import { ChevronUp, ChevronDown } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (direction: "up" | "down") => void;
}

const SlideNavigation = ({ currentSlide, totalSlides, onNavigate }: SlideNavigationProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      <button
        onClick={() => onNavigate("up")}
        className="p-2 rounded-full glass shadow-soft hover:scale-110 transition-transform disabled:opacity-30"
        disabled={currentSlide === 0}
      >
        <ChevronUp className="w-5 h-5 text-foreground" />
      </button>
      
      <div className="flex flex-col gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-150"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={() => onNavigate("down")}
        className="p-2 rounded-full glass shadow-soft hover:scale-110 transition-transform disabled:opacity-30"
        disabled={currentSlide === totalSlides - 1}
      >
        <ChevronDown className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
};

export default SlideNavigation;

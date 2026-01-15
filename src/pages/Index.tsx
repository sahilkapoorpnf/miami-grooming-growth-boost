import { useState, useEffect, useRef, useCallback } from "react";
import SlideNavigation from "@/components/slides/SlideNavigation";
import HeroSlide from "@/components/slides/HeroSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import SolutionSlide from "@/components/slides/SolutionSlide";
import FeaturesSlide from "@/components/slides/FeaturesSlide";
import TimelineCostSlide from "@/components/slides/TimelineCostSlide";
import BeforeAfterSlide from "@/components/slides/BeforeAfterSlide";
import BitdecentroHelpSlide from "@/components/slides/BitdecentroHelpSlide";
import FutureSlide from "@/components/slides/FutureSlide";
import DeliverablesSlide from "@/components/slides/DeliverablesSlide";
import InvestmentSlide from "@/components/slides/InvestmentSlide";

const slides = [
  HeroSlide,
  ProblemSlide,
  SolutionSlide,
  FeaturesSlide,
  TimelineCostSlide,
  BeforeAfterSlide,
  BitdecentroHelpSlide,
  FutureSlide,
  DeliverablesSlide,
  InvestmentSlide
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const scrollToSlide = useCallback((index: number) => {
    if (containerRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;
      const slideHeight = window.innerHeight;
      containerRef.current.scrollTo({
        top: index * slideHeight,
        behavior: "smooth"
      });
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, []);

  const handleNavigate = (direction: "up" | "down") => {
    const newSlide = direction === "up" 
      ? Math.max(0, currentSlide - 1)
      : Math.min(slides.length - 1, currentSlide + 1);
    
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const slideHeight = window.innerHeight;
      const scrollPosition = container.scrollTop;
      const newSlide = Math.round(scrollPosition / slideHeight);
      
      if (newSlide !== currentSlide && newSlide >= 0 && newSlide < slides.length) {
        setCurrentSlide(newSlide);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        handleNavigate("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        handleNavigate("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="h-screen overflow-hidden">
      <div 
        ref={containerRef}
        className="slides-container"
      >
        {slides.map((SlideComponent, index) => (
          <SlideComponent key={index} />
        ))}
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Index;

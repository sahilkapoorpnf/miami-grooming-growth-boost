import heroDog from "@/assets/hero-dog.png";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import { Sparkles, PawPrint } from "lucide-react";

const HeroSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative">
      {/* Logo Header */}
      <div className="absolute top-6 left-6 z-20">
        <img src={bitdecentroLogo} alt="Bitdecentro" className="h-10 md:h-12" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 blob animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/10 blob-alt animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 opacity-20">
        <PawPrint className="w-12 h-12 text-primary" />
      </div>
      
      <div className="slide-content grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Website Redesign Proposal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
            <span className="text-gradient-primary">Miami's</span>
            <br />
            <span className="text-foreground">Pet Grooming</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg animate-slide-up stagger-2">
            Transform Your Digital Presence Into a Powerful Business Tool
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
            <div className="glass px-8 py-4 rounded-2xl shadow-card">
              <span className="text-sm text-muted-foreground">Investment</span>
              <p className="text-3xl font-bold text-gradient-hero">$2,500</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-3xl" />
          <img
            src={heroDog}
            alt="Professional pet grooming"
            className="relative z-10 w-full max-w-md rounded-3xl shadow-glow animate-float"
          />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
      </div>
    </div>
  );
};

export default HeroSlide;

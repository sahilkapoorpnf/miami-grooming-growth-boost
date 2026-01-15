import websiteMockup from "@/assets/website-mockup.png";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import { Sparkles, ArrowDown, CheckCircle2, Monitor, Smartphone } from "lucide-react";

const HeroSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-white via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Soft Gradient Orbs */}
      <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-secondary/15 via-secondary/5 to-transparent blur-3xl" />
      
      {/* Logo Header */}
      <div className="absolute top-6 left-6 z-20">
        <img src={bitdecentroLogo} alt="Bitdecentro" className="h-10 md:h-12" />
      </div>
      
      <div className="slide-content grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Website Redesign Proposal</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
            <span className="text-foreground">Transform</span>
            <br />
            <span className="text-gradient-hero">Miami's Pet Grooming</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-slide-up stagger-2">
            A modern, conversion-focused website that turns visitors into loyal customers
          </p>
          
          {/* Key Points */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Mobile-First Design</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Future Ready</span>
            </div>
          </div>
          
          {/* Investment Card */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-4">
            <div className="glass px-6 py-4 rounded-2xl shadow-card border border-primary/10">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
              <p className="text-3xl font-bold text-gradient-hero">$2,500</p>
            </div>
            <div className="glass px-6 py-4 rounded-2xl shadow-card border border-secondary/10">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Delivery</span>
              <p className="text-xl font-semibold text-foreground">2-3 Weeks</p>
            </div>
          </div>
        </div>
        
        {/* Right Content - Mockup Image */}
        <div className="relative flex justify-center order-1 lg:order-2 animate-scale-in">
          {/* Floating Device Icons */}
          <div className="absolute -top-4 left-[10%] glass p-3 rounded-xl shadow-card animate-float z-20">
            <Monitor className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute -bottom-4 right-[10%] glass p-3 rounded-xl shadow-card animate-float z-20" style={{ animationDelay: "2s" }}>
            <Smartphone className="w-6 h-6 text-secondary" />
          </div>
          
          {/* Mockup Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl blur-2xl" />
            <img
              src={websiteMockup}
              alt="Website redesign mockup showing desktop and mobile views"
              className="relative z-10 w-full max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default HeroSlide;

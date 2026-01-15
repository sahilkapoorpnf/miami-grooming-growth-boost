import heroDog from "@/assets/hero-dog.png";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";
import { Sparkles, ArrowDown, Star, Award, Zap } from "lucide-react";

const HeroSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-foreground via-foreground/95 to-foreground relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Premium Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl animate-float" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/25 via-secondary/10 to-transparent blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-2xl" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-[15%] animate-float" style={{ animationDelay: "1s" }}>
        <Star className="w-6 h-6 text-accent/60 fill-accent/40" />
      </div>
      <div className="absolute top-[30%] right-[10%] animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-8 h-8 text-primary/50" />
      </div>
      <div className="absolute bottom-[30%] left-[8%] animate-float" style={{ animationDelay: "4s" }}>
        <Award className="w-7 h-7 text-secondary/50" />
      </div>
      
      {/* Logo Header */}
      <div className="absolute top-6 left-6 z-20">
        <img src={bitdecentroLogo} alt="Bitdecentro" className="h-10 md:h-12 brightness-0 invert opacity-90" />
      </div>
      
      {/* Premium Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary-foreground/90">Premium Proposal</span>
        </div>
      </div>
      
      <div className="slide-content grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary-foreground/90 tracking-wide uppercase">Website Redesign Proposal</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] animate-slide-up">
            <span className="block text-primary-foreground/95">Transform</span>
            <span className="block text-gradient-hero mt-2">Miami's</span>
            <span className="block text-primary-foreground/80 text-4xl md:text-5xl lg:text-6xl mt-4 font-medium">Pet Grooming</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-lg leading-relaxed animate-slide-up stagger-2">
            A premium digital experience that converts visitors into loyal customers through stunning design & seamless functionality
          </p>
          
          {/* Investment Card */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative glass-dark px-8 py-6 rounded-2xl border border-primary/20">
                <span className="text-sm text-primary-foreground/50 uppercase tracking-widest">Investment</span>
                <p className="text-4xl md:text-5xl font-bold text-gradient-hero mt-1">$2,500</p>
              </div>
            </div>
            
            <div className="glass-dark px-6 py-6 rounded-2xl border border-primary-foreground/10 flex flex-col justify-center">
              <span className="text-sm text-primary-foreground/50 uppercase tracking-widest">Delivery</span>
              <p className="text-xl font-semibold text-primary-foreground/90 mt-1">2-3 Weeks</p>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Image */}
        <div className="relative flex justify-center order-1 lg:order-2 animate-scale-in">
          {/* Glowing backdrop */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/30 blur-3xl animate-pulse-glow" />
          </div>
          
          {/* Circular frame */}
          <div className="relative">
            <div className="absolute inset-[-10px] rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-[2px] animate-spin-slow" style={{ animationDuration: "20s" }}>
              <div className="w-full h-full rounded-full bg-foreground" />
            </div>
            
            <img
              src={heroDog}
              alt="Professional pet grooming"
              className="relative z-10 w-72 md:w-96 lg:w-[420px] rounded-full shadow-2xl object-cover aspect-square"
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-dark px-4 py-2 rounded-xl border border-primary/30 animate-float">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-semibold text-primary-foreground/90">5-Star Service</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-dark px-4 py-2 rounded-xl border border-secondary/30 animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-primary-foreground/90">Miami's Best</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-primary-foreground/40 uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
      </div>
    </div>
  );
};

export default HeroSlide;

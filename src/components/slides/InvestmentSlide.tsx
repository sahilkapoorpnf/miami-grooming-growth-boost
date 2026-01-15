import { Sparkles, ArrowRight, Heart, Phone, Mail } from "lucide-react";

const InvestmentSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-foreground via-foreground/95 to-primary/30 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 blob blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 blob-alt blur-3xl" />
      
      <div className="slide-content space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Let's Get Started</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Ready to Transform Your Business?
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-dark p-8 md:p-12 rounded-3xl text-center space-y-8 animate-scale-in stagger-2 animate-pulse-glow">
            <div className="space-y-2">
              <p className="text-primary-foreground/70 text-lg">One-Time Investment</p>
              <div className="text-6xl md:text-8xl font-bold text-gradient-hero">
                $2,500
              </div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              This is not just a redesign — it's setting up 
              <span className="font-semibold text-primary-foreground"> Miami's Pet Grooming </span>
              for growth, control, and long-term customer ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17862220592"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:scale-105 transition-transform shadow-glow"
              >
                <Phone className="w-5 h-5" />
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="mailto:info@miamispetgrooming.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-primary-foreground/20 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 animate-fade-in stagger-5">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60">
            <Heart className="w-5 h-5 text-primary" />
            <span>Crafted with care for Miami's Pet Grooming</span>
          </div>
          
          <p className="text-sm text-primary-foreground/40">
            Pampering Your Pet Since '98
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSlide;

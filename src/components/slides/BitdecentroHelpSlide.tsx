import { 
  Rocket, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Target,
  BarChart3
} from "lucide-react";
import bitdecentroLogo from "@/assets/bitdecentro-logo.png";

const BitdecentroHelpSlide = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your business goals, target audience, and competition to create a winning strategy.",
      icon: Target
    },
    {
      step: "02", 
      title: "Design & Development",
      desc: "Custom design crafted to match your brand, followed by pixel-perfect development.",
      icon: Zap
    },
    {
      step: "03",
      title: "Launch & Optimize",
      desc: "We launch your new site and continuously optimize for better conversions.",
      icon: Rocket
    }
  ];

  const businessImpacts = [
    {
      icon: TrendingUp,
      title: "Increase Bookings",
      desc: "Conversion-optimized design turns visitors into paying customers",
      stat: "2-3x",
      statLabel: "More Leads"
    },
    {
      icon: BarChart3,
      title: "Higher Visibility",
      desc: "SEO-optimized structure helps you rank higher in local searches",
      stat: "70%",
      statLabel: "More Traffic"
    },
    {
      icon: Clock,
      title: "Save Time",
      desc: "Easy-to-manage website reduces time spent on updates",
      stat: "5hrs",
      statLabel: "Saved Weekly"
    },
    {
      icon: Award,
      title: "Build Trust",
      desc: "Professional design establishes credibility with new customers",
      stat: "100%",
      statLabel: "Brand Aligned"
    }
  ];

  const whyBitdecentro = [
    "10+ years of web development experience",
    "Specialized in small business growth",
    "Full-service: design, development & support",
    "Transparent pricing with no hidden fees",
    "Ongoing maintenance & updates included",
    "Dedicated project manager for your account"
  ];

  return (
    <div className="slide bg-gradient-to-br from-foreground via-foreground/95 to-secondary/20 text-primary-foreground">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-primary/15 blob blur-2xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/15 blob-alt blur-2xl" />
      
      <div className="slide-content space-y-10 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20 animate-fade-in">
            <img src={bitdecentroLogo} alt="Bitdecentro" className="h-6" />
            <span className="text-primary font-medium">How We Help</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Your Partner in <span className="text-gradient-hero">Digital Growth</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto animate-slide-up stagger-2">
            Bitdecentro transforms your online presence with a strategic approach that drives real business results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Our Process */}
          <div className="space-y-6 animate-slide-up stagger-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Our Process
            </h3>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 glass-dark p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-primary">{step.step}</span>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-sm text-primary-foreground/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Bitdecentro */}
          <div className="space-y-6 animate-slide-up stagger-3">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Why Choose Bitdecentro
            </h3>
            
            <div className="glass-dark p-6 rounded-xl space-y-3">
              {whyBitdecentro.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-primary-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up stagger-4">
          {businessImpacts.map((impact, index) => (
            <div key={index} className="glass-dark p-4 rounded-xl text-center space-y-2 hover:scale-105 transition-transform">
              <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <impact.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gradient-hero">{impact.stat}</div>
              <p className="text-xs text-primary-foreground/60">{impact.statLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitdecentroHelpSlide;

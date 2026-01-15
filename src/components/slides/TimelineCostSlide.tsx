import { Calendar, DollarSign, CheckCircle2, Clock, Palette, Code, Rocket, Settings } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    duration: "Week 1",
    cost: "$400",
    icon: Settings,
    color: "primary",
    items: [
      "Business & competitor analysis",
      "Target audience research",
      "Content strategy planning",
      "Brand alignment review"
    ]
  },
  {
    phase: "Phase 2",
    title: "Design & UI/UX",
    duration: "Week 1-2",
    cost: "$800",
    icon: Palette,
    color: "accent",
    items: [
      "Custom homepage design",
      "Service pages layout",
      "Mobile-first responsive design",
      "Brand-aligned visual elements"
    ]
  },
  {
    phase: "Phase 3",
    title: "Development",
    duration: "Week 2-3",
    cost: "$900",
    icon: Code,
    color: "secondary",
    items: [
      "WordPress implementation",
      "Contact forms & CTAs",
      "SEO optimization setup",
      "Speed & performance tuning"
    ]
  },
  {
    phase: "Phase 4",
    title: "Launch & Support",
    duration: "Week 3",
    cost: "$400",
    icon: Rocket,
    color: "primary",
    items: [
      "Quality assurance testing",
      "Domain & hosting setup",
      "Go-live deployment",
      "30-day post-launch support"
    ]
  }
];

const TimelineCostSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-muted via-background to-secondary/5 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-[25%] bottom-[15%] w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block" />
      
      <div className="slide-content">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Development Timeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Module-by-Module</span>
            <br />
            <span className="text-foreground">Cost Breakdown</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with clear deliverables at every stage
          </p>
        </div>
        
        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const colorClasses = {
              primary: "from-primary/20 to-primary/5 border-primary/30 text-primary",
              accent: "from-accent/20 to-accent/5 border-accent/30 text-accent",
              secondary: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary"
            };
            
            return (
              <div 
                key={index}
                className={`animate-slide-up stagger-${index + 1}`}
              >
                <div className={`glass rounded-2xl p-6 border bg-gradient-to-b ${colorClasses[phase.color as keyof typeof colorClasses]} h-full relative group hover:scale-105 transition-transform duration-300`}>
                  {/* Phase Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider ${phase.color === 'primary' ? 'text-primary' : phase.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                      {phase.phase}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${phase.color === 'primary' ? 'from-primary to-primary/70' : phase.color === 'accent' ? 'from-accent to-accent/70' : 'from-secondary to-secondary/70'}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Title & Duration */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{phase.duration}</span>
                  </div>
                  
                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${phase.color === 'primary' ? 'text-primary' : phase.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Cost */}
                  <div className="mt-auto pt-4 border-t border-current/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Investment</span>
                      <span className={`text-2xl font-bold ${phase.color === 'primary' ? 'text-primary' : phase.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                        {phase.cost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Total Summary */}
        <div className="mt-10 flex justify-center animate-slide-up stagger-5">
          <div className="glass rounded-2xl px-8 py-6 border border-primary/20 shadow-card inline-flex items-center gap-8">
            <div className="text-center">
              <span className="text-sm text-muted-foreground block">Total Duration</span>
              <span className="text-2xl font-bold text-foreground">2-3 Weeks</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="text-sm text-muted-foreground block">Total Investment</span>
              <span className="text-3xl font-bold text-gradient-hero">$2,500</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="text-sm text-muted-foreground block">Includes</span>
              <span className="text-lg font-semibold text-foreground">30-Day Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCostSlide;

import { AlertTriangle, Smartphone, Users, TrendingDown, X } from "lucide-react";

const ProblemSlide = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Looks Outdated",
      description: "Competitors are winning the visual first impression"
    },
    {
      icon: Smartphone,
      title: "Not Mobile-Optimized",
      description: "70%+ of pet owners search on mobile devices"
    },
    {
      icon: Users,
      title: "No Clear Journey",
      description: "Visitors get confused and leave without booking"
    },
    {
      icon: X,
      title: "No Data Capture",
      description: "Losing valuable customer information forever"
    }
  ];

  return (
    <div className="slide bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 text-primary-foreground">
      <div className="slide-content space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 text-destructive font-medium animate-fade-in">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Why Your Website Needs a Redesign
          </h2>
          
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto animate-slide-up stagger-2">
            Your current website is functional, but it's not designed to convert visitors into bookings or support future growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`glass-dark p-6 rounded-2xl space-y-4 animate-slide-up stagger-${index + 2}`}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-primary-foreground/60">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 max-w-2xl mx-auto animate-fade-in stagger-6">
          <p className="text-xl font-medium">
            This means potential clients are visiting — 
            <span className="text-destructive font-bold"> but many are not converting.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;

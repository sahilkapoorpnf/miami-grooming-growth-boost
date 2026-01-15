import { Zap, Layout, Smartphone, Shield } from "lucide-react";
import mobileGrooming from "@/assets/mobile-grooming.png";

const SolutionSlide = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      points: ["Lightning fast loading", "Premium visual experience", "Perfect on all devices"]
    },
    {
      icon: Layout,
      title: "Conversion-Focused",
      points: ["Clear service pages", "Easy pricing display", "One-tap booking"]
    },
    {
      icon: Shield,
      title: "Brand & Trust",
      points: ["Before/after visuals", "Customer testimonials", "Professional layout"]
    }
  ];

  return (
    <div className="slide bg-gradient-to-br from-background via-muted/50 to-secondary/10">
      <div className="slide-content space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium animate-fade-in">
            <Zap className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            What We Will <span className="text-gradient-primary">Build For You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            We won't just "change the look" — we'll rebuild your website to become a powerful business tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={mobileGrooming}
              alt="Mobile grooming service"
              className="relative rounded-2xl shadow-card w-full"
            />
          </div>
          
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`glass p-6 rounded-2xl shadow-card flex gap-6 animate-slide-up stagger-${index + 2}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <ul className="space-y-1">
                    {solution.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;

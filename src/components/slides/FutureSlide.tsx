import { Rocket, Calendar, Users, Smartphone, Database, CheckCircle2 } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const FutureSlide = () => {
  const futureFeatures = [
    { icon: Calendar, text: "Add online scheduling" },
    { icon: Users, text: "Create customer accounts" },
    { icon: Smartphone, text: "Launch your own booking app" },
    { icon: Database, text: "Own your customer database" }
  ];

  return (
    <div className="slide bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <div className="slide-content space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium animate-fade-in">
            <Rocket className="w-4 h-4" />
            <span>Future Ready</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Built For <span className="text-gradient-primary">Growth</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            You may not want a booking app today — and that's perfectly fine. But your website will be ready when you are.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold animate-slide-up stagger-2">
                Your Future Options
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {futureFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl glass shadow-card animate-slide-up stagger-${index + 3}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 space-y-4 animate-fade-in stagger-6">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Why This Matters
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>No commission fees to third-party apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>No losing clients to other platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Your customer data stays 100% yours</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-primary/30 rounded-full blur-3xl" />
            <img
              src={appMockup}
              alt="Future app mockup"
              className="relative z-10 w-full max-w-sm rounded-3xl shadow-glow animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSlide;

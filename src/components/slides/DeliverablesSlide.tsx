import { Check, Package, Star } from "lucide-react";

const DeliverablesSlide = () => {
  const deliverables = [
    "Modern website redesign",
    "Mobile-first layout",
    "Faster loading speed",
    "SEO-ready structure",
    "Conversion-optimized booking flow",
    "Trust-building design",
    "Future-ready backend structure",
    "Google tracking & analytics"
  ];

  const impacts = [
    { metric: "↑", label: "Visitor Conversions", desc: "More bookings from website traffic" },
    { metric: "★", label: "Brand Trust", desc: "Professional appearance builds confidence" },
    { metric: "◎", label: "Google Visibility", desc: "Better SEO for local searches" },
    { metric: "→", label: "Growth Ready", desc: "Prepared for future online bookings" }
  ];

  return (
    <div className="slide bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="slide-content space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium animate-fade-in">
            <Package className="w-4 h-4" />
            <span>What You Get</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Complete <span className="text-gradient-hero">Package</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Deliverables */}
          <div className="glass p-8 rounded-3xl shadow-card animate-slide-up stagger-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Deliverables
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 animate-slide-up stagger-3">Business Impact</h3>
            
            <div className="space-y-4">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-background shadow-card animate-slide-up stagger-${index + 4}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl text-primary-foreground font-bold">
                    {impact.metric}
                  </div>
                  <div>
                    <h4 className="font-semibold">{impact.label}</h4>
                    <p className="text-sm text-muted-foreground">{impact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverablesSlide;

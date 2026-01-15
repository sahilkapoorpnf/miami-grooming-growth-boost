import { ArrowRight, Sparkles } from "lucide-react";
import beforeAfter from "@/assets/before-after.png";

const BeforeAfterSlide = () => {
  return (
    <div className="slide bg-gradient-to-br from-muted via-background to-primary/5">
      <div className="slide-content space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Transformation</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Strong Brand & <span className="text-gradient-hero">Trust Building</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            Just like your grooming transforms pets, we'll transform your online presence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-scale-in stagger-3">
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
          <img
            src={beforeAfter}
            alt="Before and after grooming transformation"
            className="relative rounded-2xl shadow-card w-full"
          />
          
          {/* Labels */}
          <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-xl">
            <span className="text-sm font-medium text-muted-foreground">Before</span>
          </div>
          <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-xl bg-primary/90">
            <span className="text-sm font-medium text-primary-foreground">After</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Clear Service Pages", desc: "Professional layout for each service" },
            { label: "Before/After Visuals", desc: "Showcase your amazing work" },
            { label: "Customer Testimonials", desc: "Build trust with social proof" }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-background shadow-card animate-slide-up stagger-${index + 4}`}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlide;

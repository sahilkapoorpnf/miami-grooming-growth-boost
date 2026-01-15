import { 
  Layers, 
  Globe, 
  Palette, 
  Search, 
  Gauge, 
  Shield,
  Image,
  MessageSquare,
  ChevronRight
} from "lucide-react";

const FeaturesSlide = () => {
  const featureCategories = [
    {
      category: "Design & Branding",
      icon: Palette,
      color: "from-primary to-pink-400",
      features: [
        { name: "Custom Brand Identity", desc: "Colors, typography, and visuals aligned with your brand" },
        { name: "Professional Layouts", desc: "Modern, clean design that builds trust instantly" },
        { name: "Visual Hierarchy", desc: "Guide visitors to take action with strategic design" }
      ]
    },
    {
      category: "Performance & SEO",
      icon: Gauge,
      color: "from-secondary to-cyan-400",
      features: [
        { name: "Lightning Fast Loading", desc: "Optimized images and code for instant page loads" },
        { name: "SEO Optimization", desc: "Meta tags, structured data, and local SEO setup" },
        { name: "Mobile-First Design", desc: "Perfect experience on phones, tablets, and desktops" }
      ]
    },
    {
      category: "Content Management",
      icon: Layers,
      color: "from-accent to-orange-400",
      features: [
        { name: "Easy Content Updates", desc: "WordPress-like admin panel for quick changes" },
        { name: "Service Pages", desc: "Dedicated pages for each grooming service you offer" },
        { name: "Blog & News Section", desc: "Share pet care tips and business updates" }
      ]
    },
    {
      category: "Trust & Conversions",
      icon: Shield,
      color: "from-green-500 to-emerald-400",
      features: [
        { name: "Testimonial Showcase", desc: "Display customer reviews and ratings prominently" },
        { name: "Before/After Gallery", desc: "Visual proof of your grooming expertise" },
        { name: "Clear Call-to-Actions", desc: "One-click booking buttons throughout the site" }
      ]
    }
  ];

  return (
    <div className="slide bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 blob animate-float" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-secondary/10 blob-alt animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="slide-content space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium animate-fade-in">
            <Layers className="w-4 h-4" />
            <span>Feature Categories</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Everything Your Website <span className="text-gradient-primary">Needs</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            A comprehensive feature set organized by category, designed to transform your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featureCategories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className={`glass p-6 rounded-2xl shadow-card space-y-4 animate-slide-up stagger-${catIndex + 2} hover:shadow-glow transition-shadow duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{cat.category}</h3>
              </div>
              
              {/* Features List */}
              <div className="space-y-3 pl-2">
                {cat.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 group">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <p className="font-medium text-foreground">{feature.name}</p>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlide;

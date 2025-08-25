import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";
import heroBanner from "@/assets/kumbh-hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white z-20 relative">
        <Badge className="mb-4 bg-primary/20 text-white border-white/30">
          Maha Kumbh 2027 - Nashik
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Kumbh Progress Watch
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Comprehensive infrastructure development tracking for the sacred Kumbh Mela at the banks of holy Godavari River
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Calendar className="h-8 w-8 text-gold mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">2027</div>
            <div className="text-white/80">Preparations in Progress</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="h-8 w-8 text-gold mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-white/80">Sacred Ghats along Godavari</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="h-8 w-8 text-gold mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">10M+</div>
            <div className="text-white/80">Expected Pilgrims</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            View Project Dashboard
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
          >
            Track Progress
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const AttractionsSection = () => {
  const [activeTab, setActiveTab] = useState("Sangam");
  
  const tabs = ["Sangam", "Temples", "Heritage Sites", "Ghats", "Kalakriti"];
  
  const attractions = {
    "Sangam": {
      image: "bg-gradient-to-br from-saffron/20 to-gold/30",
      content: "The sacred confluence of three holy rivers - Ganga, Yamuna, and the mythical Saraswati."
    },
    "Temples": {
      image: "bg-gradient-to-br from-navy/20 to-primary/30", 
      content: "Ancient temples with rich architectural heritage and spiritual significance."
    },
    "Heritage Sites": {
      image: "bg-gradient-to-br from-gold/20 to-saffron/30",
      content: "Historical monuments and sites preserving the cultural legacy of Prayagraj."
    },
    "Ghats": {
      image: "bg-gradient-to-br from-primary/20 to-navy/30",
      content: "Sacred bathing steps along the holy rivers for spiritual cleansing."
    },
    "Kalakriti": {
      image: "bg-gradient-to-br from-saffron/30 to-gold/20",
      content: "Cultural exhibitions showcasing traditional arts, crafts, and performances."
    }
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="h-12 w-12 text-saffron" />
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Attractions at Prayagraj
            </h2>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-full p-2 shadow-elegant overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-saffron text-white shadow-md'
                    : 'text-navy hover:text-saffron hover:bg-saffron/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Navigation Arrows */}
                <div className="hidden lg:flex items-center justify-center w-16 bg-gray-50">
                  <Button variant="ghost" size="sm" className="text-navy hover:text-saffron">
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>

                {/* Image Section */}
                <div className="flex-1 relative">
                  <div className={`h-80 lg:h-96 ${attractions[activeTab].image} flex items-center justify-center`}>
                    <div className="text-center text-navy/60">
                      <Camera className="h-16 w-16 mx-auto mb-4" />
                      <div className="text-lg font-semibold">{activeTab}</div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="hidden lg:flex items-center justify-center w-16 bg-gray-50">
                  <Button variant="ghost" size="sm" className="text-navy hover:text-saffron">
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-8 text-center">
                <p className="text-lg text-navy/80 leading-relaxed">
                  {attractions[activeTab].content}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <Button variant="outline" size="sm" className="text-navy border-navy/30">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="text-navy border-navy/30">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
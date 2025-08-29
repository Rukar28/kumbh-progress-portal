import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BathingDates = () => {
  const bathingDates = [
    {
      name: "PAUSH PURNIMA",
      date: "13",
      month: "JANUARY",
      year: "2025"
    },
    {
      name: "MAKAR SANKRANTI",
      date: "14", 
      month: "JANUARY",
      year: "2025"
    },
    {
      name: "MAUNI AMAVASYA",
      date: "29",
      month: "JANUARY", 
      year: "2025"
    },
    {
      name: "BASANT PANCHAMI",
      date: "03",
      month: "FEBRUARY",
      year: "2025"
    },
    {
      name: "MAGHI PURNIMA",
      date: "12",
      month: "FEBRUARY",
      year: "2025"
    },
    {
      name: "MAHA SHIVARATRI",
      date: "26",
      month: "FEBRUARY",
      year: "2025"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-navy/95 to-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="h-12 w-12 text-saffron" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Bathing Dates
            </h2>
          </div>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {bathingDates.map((item, index) => (
            <div key={index} className="bg-white text-navy rounded-lg p-6 text-center shadow-elegant hover:shadow-primary transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
                {item.name}
              </div>
              <div className="text-5xl font-bold text-navy mb-2">
                {item.date}
              </div>
              <div className="text-sm font-semibold text-navy/80">
                {item.month}
              </div>
              <div className="text-sm font-semibold text-navy/80">
                {item.year}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
            Bathing ritual is the most significant ritual performed at Kumbh. Although taking a dip in the sacred waters on all 
            days of Prayagraj Maha Kumbh beginning from Makar Sankranti is considered holy, yet there are some specific 
            auspicious bathing dates. Mark your calendar for these divine bathing dates.
          </p>
          
          <Button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3 text-lg">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BathingDates;
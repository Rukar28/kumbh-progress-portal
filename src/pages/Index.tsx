import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfficialCard from "@/components/OfficialCard";
import BathingDates from "@/components/BathingDates";
import AttractionsSection from "@/components/AttractionsSection";
import ProjectOverview from "@/components/ProjectOverview";
import InfrastructureHighlights from "@/components/InfrastructureHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OfficialCard />
      <BathingDates />
      <AttractionsSection />
      <ProjectOverview />
      <InfrastructureHighlights />
      <Footer />
    </div>
  );
};

export default Index;

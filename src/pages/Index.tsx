import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import InfrastructureHighlights from "@/components/InfrastructureHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectOverview />
      <InfrastructureHighlights />
      <Footer />
    </div>
  );
};

export default Index;

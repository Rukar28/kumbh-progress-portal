import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Droplet, 
  Zap, 
  Users, 
  Shield,
  Wifi,
  Heart,
  Recycle
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      name: "Public Works Department",
      icon: Building2,
      projects: 45,
      budget: "₹95.2 Cr",
      progress: 82,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Infrastructure development and construction projects"
    },
    {
      name: "Water Supply Department", 
      icon: Droplet,
      projects: 35,
      budget: "₹48.5 Cr",
      progress: 89,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      description: "Water infrastructure and distribution systems"
    },
    {
      name: "Electrical Department",
      icon: Zap,
      projects: 32,
      budget: "₹32.8 Cr", 
      progress: 75,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      description: "Power supply and electrical infrastructure"
    },
    {
      name: "IT & Digital Services",
      icon: Wifi,
      projects: 18,
      budget: "₹15.8 Cr",
      progress: 65,
      color: "text-purple-500", 
      bgColor: "bg-purple-50",
      description: "Digital infrastructure and communication systems"
    },
    {
      name: "Health Department",
      icon: Heart,
      projects: 26,
      budget: "₹22.3 Cr",
      progress: 91,
      color: "text-red-500",
      bgColor: "bg-red-50", 
      description: "Medical facilities and healthcare infrastructure"
    },
    {
      name: "Sanitation Department",
      icon: Recycle,
      projects: 28,
      budget: "₹18.7 Cr",
      progress: 88,
      color: "text-success",
      bgColor: "bg-success/10",
      description: "Waste management and cleanliness systems"
    },
    {
      name: "Security & Traffic",
      icon: Shield,
      projects: 26,
      budget: "₹16.2 Cr", 
      progress: 70,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      description: "Safety, security and traffic management"
    },
    {
      name: "Administration",
      icon: Users,
      projects: 15,
      budget: "₹8.5 Cr",
      progress: 85,
      color: "text-navy",
      bgColor: "bg-navy/10",
      description: "Administrative offices and service centers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/30">
            Departments Overview
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Department-wise Progress
          </h1>
          <p className="text-muted-foreground text-lg">
            Track infrastructure development across all municipal departments
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-primary transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${dept.bgColor} transition-all duration-300 group-hover:scale-110`}>
                    <dept.icon className={`h-6 w-6 ${dept.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {dept.progress}%
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mt-3">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {dept.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{dept.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{dept.budget}</div>
                    <div className="text-xs text-muted-foreground">Budget</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className={dept.color}>{dept.progress}%</span>
                  </div>
                  <Progress value={dept.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="mt-12 bg-gradient-primary rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Cross-Department Collaboration
            </h3>
            <p className="text-white/80">
              Coordinated efforts across all departments for seamless Kumbh preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-white/80">Active Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">225</div>
              <div className="text-white/80">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">₹258</div>
              <div className="text-white/80">Total Budget (Cr)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">81%</div>
              <div className="text-white/80">Avg Progress</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Departments;
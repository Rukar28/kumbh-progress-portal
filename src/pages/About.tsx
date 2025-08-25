import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Phone,
  Mail,
  Globe,
  Building2,
  Target,
  Award
} from "lucide-react";

const About = () => {
  const objectives = [
    "Ensure comprehensive infrastructure development for Kumbh Mela 2027",
    "Real-time tracking and monitoring of all projects and budgets", 
    "Coordinate seamlessly between multiple government departments",
    "Maintain transparency in project execution and financial utilization",
    "Deliver world-class facilities for millions of pilgrims",
    "Implement modern technology for efficient project management"
  ];

  const keyFeatures = [
    {
      icon: Target,
      title: "Project Tracking",
      description: "Real-time monitoring of 200+ infrastructure projects across departments"
    },
    {
      icon: Building2, 
      title: "Budget Management",
      description: "Comprehensive financial tracking and cost estimation tools"
    },
    {
      icon: Users,
      title: "Multi-Department Coordination", 
      description: "Seamless collaboration between PWD, Water, Health, and other departments"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Regular audits and compliance monitoring for all projects"
    }
  ];

  const contactPersons = [
    {
      name: "Shri. Rajesh Kumar",
      designation: "Municipal Commissioner",
      department: "Nashik Municipal Corporation",
      phone: "+91-253-2506001",
      email: "commissioner@nashikcorp.gov.in"
    },
    {
      name: "Dr. Priya Sharma", 
      designation: "Project Director - Kumbh",
      department: "Special Projects Division",
      phone: "+91-253-2506045",
      email: "kumbh.director@nashikcorp.gov.in"
    },
    {
      name: "Shri. Amit Patil",
      designation: "Chief Engineer",
      department: "Public Works Department", 
      phone: "+91-253-2506023",
      email: "chief.engineer@nashikcorp.gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/30">
            About the Project
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kumbh Progress Watch System
          </h1>
          <p className="text-muted-foreground text-lg">
            Official project management and tracking system for Kumbh Mela 2027 infrastructure development
          </p>
        </div>

        {/* About Overview */}
        <Card className="bg-gradient-card border-0 shadow-elegant mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Kumbh Progress Watch is a comprehensive digital platform developed by Nashik Municipal Corporation 
                  to monitor, track, and manage the massive infrastructure development initiative for the upcoming 
                  Kumbh Mela 2027. This sacred gathering, expected to host over 10 million pilgrims, requires meticulous 
                  planning and execution of infrastructure projects worth ₹250+ crores.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border shadow-sm">
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">2027</div>
                    <div className="text-sm text-muted-foreground">Target Year</div>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">10M+</div>
                    <div className="text-sm text-muted-foreground">Expected Pilgrims</div>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm">
                  <CardContent className="p-4 text-center">
                    <Building2 className="h-8 w-8 text-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">200+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-8 w-8 text-navy mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">24</div>
                    <div className="text-sm text-muted-foreground">Sacred Ghats</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card className="bg-gradient-card border-0 shadow-elegant mb-8">
          <CardHeader>
            <CardTitle>Project Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="bg-gradient-card border-0 shadow-elegant mb-8">
          <CardHeader>
            <CardTitle>System Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-card border-0 shadow-elegant">
          <CardHeader>
            <CardTitle>Key Contact Persons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactPersons.map((person, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{person.name}</h4>
                      <p className="text-sm text-primary font-medium">{person.designation}</p>
                      <p className="text-xs text-muted-foreground">{person.department}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{person.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground break-all">{person.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* General Contact */}
            <div className="mt-8 p-6 bg-secondary/5 rounded-lg text-center">
              <h4 className="font-semibold text-foreground mb-3">General Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rajiv Gandhi Bhavan, Nashik - 422001</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-253-2506001</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>www.nashikcorp.gov.in</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
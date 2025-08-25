import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  IndianRupee, 
  Activity, 
  TrendingUp,
  CheckCircle2,
  Clock
} from "lucide-react";

const ProjectOverview = () => {
  const stats = [
    {
      title: "Total Works",
      value: "128/145",
      subtitle: "Approved vs Proposed",
      progress: 88,
      icon: Building2,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Funds Utilization",
      value: "₹187.5 Cr",
      subtitle: "of ₹250.0 Cr allocated",
      progress: 75,
      icon: IndianRupee,
      color: "text-gold",
      bgColor: "bg-gold/10"
    },
    {
      title: "Active Works",
      value: "89",
      subtitle: "Currently in progress",
      progress: 62,
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            Real-time Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Progress Overview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Live tracking of infrastructure development for Kumbh Mela 2027 preparations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-elegant hover:shadow-primary transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {stat.progress}%
                  </Badge>
                </div>
                <CardTitle className="text-sm text-muted-foreground font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {stat.subtitle}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className={stat.color}>{stat.progress}%</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-success" />
                Recent Completions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <span className="text-sm font-medium">Ghat Cleaning System</span>
                  <Badge className="bg-success text-success-foreground">Completed</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <span className="text-sm font-medium">Water Supply Phase 2</span>
                  <Badge className="bg-success text-success-foreground">Completed</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
                  <span className="text-sm font-medium">Road Infrastructure Block A</span>
                  <Badge className="bg-success text-success-foreground">Completed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Clock className="h-5 w-5 text-gold" />
                Upcoming Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gold/5 rounded-lg">
                  <span className="text-sm font-medium">Security Infrastructure</span>
                  <Badge variant="outline" className="border-gold text-gold">Dec 2024</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gold/5 rounded-lg">
                  <span className="text-sm font-medium">Digital Tracking System</span>
                  <Badge variant="outline" className="border-gold text-gold">Jan 2025</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gold/5 rounded-lg">
                  <span className="text-sm font-medium">Final Infrastructure Audit</span>
                  <Badge variant="outline" className="border-gold text-gold">Mar 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
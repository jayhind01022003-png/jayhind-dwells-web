import { Card } from "@/components/ui/card";
import { Award, Users, Briefcase, Star } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "2+",
    label: "Years Learning",
    color: "from-primary to-accent"
  },
  {
    icon: Briefcase,
    value: "10+",
    label: "Projects Built",
    color: "from-accent to-primary"
  },
  {
    icon: Star,
    value: "100%",
    label: "Dedication",
    color: "from-primary to-accent"
  },
  {
    icon: Users,
    value: "B.Tech",
    label: "CSE Student",
    color: "from-accent to-primary"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-lg mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* About Text */}
        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Full Stack Python Developer with a focus on building dynamic and scalable web applications. 
              I enjoy solving problems and learning new technologies to improve my development workflow.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science Engineering at Kacheri Narayan Reddy College (2022-2026), 
              I'm dedicated to mastering modern web technologies and creating impactful solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;

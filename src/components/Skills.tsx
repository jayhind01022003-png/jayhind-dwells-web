import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-primary to-accent"
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Django REST Framework"],
    color: "from-accent to-primary"
  },
  {
    title: "Database",
    skills: ["SQL", "PostgreSQL", "MongoDB", "SQLite"],
    color: "from-primary to-accent"
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "AWS", "Linux"],
    color: "from-accent to-primary"
  }
];

const certifications = [
  "Cloud Computing Certification"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span> & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg mb-4`}>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-1.5 px-3 bg-secondary hover:bg-secondary/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="p-8 bg-card border-border text-center">
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index}
                className="text-sm py-2 px-4 bg-gradient-to-r from-primary to-accent text-white"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;

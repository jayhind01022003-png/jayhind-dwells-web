import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-muted-foreground">📍</span>
            <span className="text-muted-foreground">Mumbai, India</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Jayhind Yadav
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Python Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Turning ideas into modern full-stack web solutions with Python & Django
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline">
              View My Work
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-full transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:jayhind.yadav@gmail.com"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-full transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

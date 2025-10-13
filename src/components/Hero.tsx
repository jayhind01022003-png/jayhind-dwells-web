import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import jayhindPhoto from "@/assets/jayhind-photo.jpg";

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
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left animate-slide-in-left">
              <div className="mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="text-muted-foreground">📍</span>
                <span className="text-muted-foreground">Mumbai, India</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jayhind Yadav
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Full Stack Python Developer
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Turning ideas into modern full-stack web solutions with Python & Django
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline">
                  View My Work
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4">
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

            {/* Professional Photo with Circular Design */}
            <div className="flex justify-center md:justify-end animate-slide-in-right">
              <div className="relative">
                {/* Outer animated ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse" />
                
                {/* Middle ring with glow effect */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-glow opacity-50" />
                
                {/* Inner border ring */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                
                {/* Photo container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={jayhindPhoto} 
                    alt="Jayhind Yadav - Full Stack Python Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating accent circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-md animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary opacity-40 blur-md animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
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

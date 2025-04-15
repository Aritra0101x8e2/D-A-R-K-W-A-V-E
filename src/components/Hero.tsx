
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, window.innerWidth / 10);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(14, 165, 233, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Draw and update particles
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    };

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(to bottom, #121826, #1E293B)" }}
      />
      
      <div className="absolute inset-0 z-10 grid-bg opacity-30"></div>
      
      <div className="container relative z-20 mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4 mr-2" />
            <span>Advanced Fraud Prevention</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Outfit']">
            Secure Your Digital Future <br />
            <span className="highlight-text">Against Modern Threats</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Protect your business with our cutting-edge cybersecurity solution that detects and prevents digital fraud using AI-driven authentication and behavioral analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="#features">
  <Button className="w-full sm:w-auto text-white bg-cyber-blue hover:bg-cyber-blue/90 px-6 py-6">
    Get Started Today
  </Button>
</a>

            <a
  href="https://darkwave-softwares-aritra.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="w-full sm:w-auto border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 px-6 py-6">
    Watch Demo
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</a>

          </div>
          
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "300+", label: "Businesses Protected" },
              { stat: "99.8%", label: "Fraud Detection Rate" },
              { stat: "24/7", label: "Monitoring & Support" },
              { stat: "60%", label: "Reduction in Breaches" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-bold text-cyber-blue">{item.stat}</div>
                <div className="text-sm text-foreground/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

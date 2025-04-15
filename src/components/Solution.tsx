
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Cpu, Shield } from "lucide-react";

const Solution = () => {
  const benefits = [
    "AI-powered threat detection and prevention",
    "Multi-layered security architecture",
    "Real-time monitoring and alerts",
    "Seamless integration with existing systems",
    "Customizable security policies",
    "Minimal impact on user experience",
  ];
  return (
    <section
      id="solution"
      className="py-20 relative bg-gradient-to-b from-cyber-dark to-cyber-navy"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-sm font-semibold text-cyber-blue uppercase tracking-wide mb-3">
              Our Solution
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
              Advanced Protection Against
              <span className="block highlight-text">Digital Fraud</span>
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              DarkWave's comprehensive security platform combines cutting-edge
              technologies to protect your business from sophisticated cyber
              threats before they can cause damage.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#features">
            <a 
  href="https://dark-wave-solutions-aritra.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white mt-6">
    Learn How It Works
  </Button>
</a>

</a>

          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-cyber-blue/20 blur-[100px] animate-pulse-slow"></div>
              <div className="glass-card rounded-xl overflow-hidden backdrop-blur-xl border-2 border-cyber-blue/30 relative z-10 h-full animate-fade-in shadow-lg shadow-cyber-blue/20">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-lg bg-cyber-blue/10">
                      <Shield className="h-8 w-8 text-cyber-blue" />
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-4">DarkWave Security Platform</h4>
                  
                  <div className="space-y-6 grow">
                    <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                      <div className="p-2 rounded-lg bg-cyber-blue/10">
                        <Cpu className="h-5 w-5 text-cyber-blue" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Threat Analysis</div>
                        <div className="text-xs text-foreground/60">Real-time monitoring active</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                      <div className="p-2 rounded-lg bg-cyber-green/10">
                        <Lock className="h-5 w-5 text-cyber-green" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Authentication Status</div>
                        <div className="text-xs text-foreground/60">Multi-factor enabled</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                      <div 
                        className="cyber-gradient h-full rounded-full animate-pulse-slow" 
                        style={{ width: "86%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-foreground/60">Security Score</span>
                      <span className="text-cyber-blue">86%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

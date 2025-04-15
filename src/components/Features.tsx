import React from "react";
import { Brain, Fingerprint, Database, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Sentinel.AI - Our Authentication Software",
      description:
        "Our AI Driven Authentication continuously learns from user behavior patterns to detect anomalies and prevent unauthorized access, even when credentials are compromised.",
      color: "cyber-blue",
      link: "https://sentinel-ai-dark-wave.vercel.app/",
    },
    {
      icon: <Fingerprint className="h-10 w-10" />,
      title: "RYVORA - Our Behavioral Biometric Analyzer",
      description:
        "Ryvora analyzes typing patterns, mouse movements, and other behavioral traits to create a unique profile that's nearly impossible to replicate.",
      color: "cyber-teal",
      link: "https://ryvora-darkwave-aritra.vercel.app/",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "TrustVaultID : Our Blockchain Identity",
      description:
        "Leverage immutable blockchain technology to create secure, decentralized identity verification that protects user data while preventing fraud.",
      color: "cyber-green",
      link: "https://trust-vault-id-darkwave-aritra.vercel.app/",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Ivyra.AI : Our Phishing Detector",
      description:
        "AI Powered Advanced algorithms identify and block sophisticated phishing attempts before they reach your users, protecting sensitive information.",
      color: "cyber-blue",
      link: "https://ivyra-ai-darkwave-aritra.vercel.app/",
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-cyber-blue uppercase tracking-wide mb-3">
            Key Features
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
            Cutting-Edge Security Technologies
          </h3>
          <p className="text-lg text-foreground/80">
            Our comprehensive suite of features works together to create a
            security system that's greater than the sum of its parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const cardContent = (
              <Card className="glass-card h-full border-0 transition-all duration-300 group-hover:glow-border overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <CardHeader className="pb-2">
                  <div
                    className={`p-3 rounded-lg bg-${feature.color}/10 w-fit mb-4 group-hover:bg-${feature.color}/20 transition-colors duration-300`}
                  >
                    <div className={`text-${feature.color}`}>{feature.icon}</div>
                  </div>
                  <CardTitle
                    className={`text-xl font-semibold group-hover:text-${feature.color} transition-colors duration-300`}
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );

            return (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {feature.link ? (
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 text-center bg-cyber-navy border border-cyber-blue/20 animate-fade-in">
            <h4 className="text-2xl font-bold mb-4">How Our Features Work Together</h4>
            <p className="text-foreground/80 mb-6">
              Our integrated approach combines these technologies to create a security ecosystem
              that's constantly learning and adapting to new threats, providing multi-layered
              protection against even the most sophisticated attacks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
  {features.map((feature, index) => {
    const iconContent = (
      <div key={index} className="text-center">
        <div className={`mx-auto p-3 rounded-full bg-${feature.color}/10 w-fit mb-2`}>
          <div className={`text-${feature.color}`}>{feature.icon}</div>
        </div>
        <p className="text-sm font-medium">{feature.title}</p>
      </div>
    );

    return feature.link ? (
      <a
        key={index}
        href={feature.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {iconContent}
      </a>
    ) : (
      iconContent
    );
  })}
</div>


            <div className="w-full h-2 bg-gray-800 rounded-full mt-8 mb-2 overflow-hidden">
              <div
                className="h-full cyber-gradient animate-pulse-slow rounded-full"
                style={{ width: "94%" }}
              ></div>
            </div>
            <p className="text-sm text-foreground/60">94% More Effective Than Traditional Security</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

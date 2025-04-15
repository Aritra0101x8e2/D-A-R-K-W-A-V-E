import React from "react";
import { AlertCircle, TrendingUp, DollarSign, Users } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <TrendingUp className="w-10 h-10 text-cyber-blue" />,
      title: "Rising Fraud Techniques",
      description:
        "Cybercriminals constantly evolve their methods, making traditional security measures insufficient against sophisticated attacks.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-cyber-blue" />,
      title: "Increasing Financial Losses",
      description:
        "Organizations lose billions annually to digital fraud, with the average data breach costing $4.35 million in 2023.",
    },
    {
      icon: <Users className="w-10 h-10 text-cyber-blue" />,
      title: "Damaged User Trust",
      description:
        "When security breaches occur, customer trust plummets—60% of consumers stop doing business with companies after a single security incident.",
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-cyber-blue" />,
      title: "Regulatory Compliance Risk",
      description:
        "Failing to protect user data leads to severe penalties under regulations like GDPR, CCPA, and industry-specific frameworks.",
    },
  ];

  return (
    <section id="problem" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-cyber-blue uppercase tracking-wide mb-3">
            The Challenge
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
            Digital Fraud is Evolving Fast
          </h3>
          <p className="text-lg text-foreground/80">
            In today's hyper-connected world, businesses face unprecedented
            cybersecurity challenges that traditional solutions cannot address.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <a
              key={index}
              href="https://dark-wave-analytics-aritra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className="glass-card rounded-xl p-6 group hover:glow-border transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/10 w-fit group-hover:bg-cyber-blue/20 transition-colors duration-300">
                    {problem.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-cyber-blue transition-colors duration-300">
                    {problem.title}
                  </h4>
                  <p className="text-foreground/70">{problem.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 p-6 glass-card rounded-xl max-w-4xl mx-auto animate-fade-in">
          <blockquote className="border-l-4 border-cyber-blue pl-6 italic text-lg text-foreground/90">
            "Cybercrime damages are projected to cost businesses $10.5 trillion
            annually by 2025, with 43% of attacks targeting small and mid-sized
            companies that often lack robust security infrastructure."
            <footer className="text-right mt-4 text-foreground/70 not-italic">
              — Cybersecurity Ventures Report
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;

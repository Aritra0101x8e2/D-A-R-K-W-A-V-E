import React from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, UserCheck, FileCheck, ChevronRight } from "lucide-react";

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  link?: string;
};

const Benefits = () => {
  const benefits: Benefit[] = [
    {
      icon: <DollarSign className="h-10 w-10 text-cyber-blue" />,
      title: "Reduce Financial Loss",
      description:
        "Cut fraud-related losses by up to 85% with our proactive security measures that prevent attacks before they succeed.",
      metric: "85%",
      metricLabel: "Reduction in Losses",
      link: "https://dark-wave-finance-aritra.vercel.app/",
    },
    {
      icon: <Clock className="h-10 w-10 text-cyber-green" />,
      title: "Save Response Time",
      description:
        "Automated threat detection and response reduces incident handling time from days to minutes.",
      metric: "98%",
      metricLabel: "Faster Response",
      link: "https://your-link-2.com",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-cyber-blue/80" />,
      title: "Enhance User Trust",
      description:
        "Build customer confidence with frictionless security that works invisibly to protect their accounts and data.",
      metric: "76%",
      metricLabel: "Trust Improvement",
      link: "https://your-link-3.com",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-cyber-blue" />,
      title: "Ensure Compliance",
      description:
        "Meet regulatory requirements with comprehensive security controls and detailed audit logs.",
      metric: "100%",
      metricLabel: "Compliance Rate",
      link: "https://your-link-4.com",
    },
  ];

  const testimonials = [
    {
      quote:
        "DarkWave dramatically reduced our fraud incidents while improving our customer experience. The behavioral biometrics feature is a game-changer.",
      author: "Sarah Chen",
      title: "CISO at GlobalTech Solutions",
    },
    {
      quote:
        "After implementing DarkWave's solution, we saw immediate results. Our security team can now focus on strategic initiatives instead of constantly fighting fires.",
      author: "Michael Rodriguez",
      title: "VP of Security at FinanceCore",
    },
  ];

  return (
    <section id="benefits" className="py-20 relative bg-gradient-to-b from-cyber-navy to-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-cyber-blue uppercase tracking-wide mb-3">
            Business Benefits
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
            Protect Your Business and
            <span className="block highlight-text">Boost Your Bottom Line</span>
          </h3>
          <p className="text-lg text-foreground/80">
            Our solution doesn't just improve security—it delivers measurable business value across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gray-800/50">{benefit.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-4">
                  <div>
                    <div className="text-3xl font-bold text-cyber-blue">{benefit.metric}</div>
                    <div className="text-sm text-foreground/60">{benefit.metricLabel}</div>
                  </div>

                  {benefit.link && (
                    <a
                      href={benefit.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="bg-cyber-blue/80 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyber-blue w-full text-center">
                        More
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="glass-card rounded-xl p-8 glow-border">
            <h4 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-4 -left-4 text-4xl text-cyber-blue opacity-30">"</div>
                  <blockquote className="relative z-10 pl-4">
                    <p className="italic text-foreground/90 mb-4">{testimonial.quote}</p>
                    <footer>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-foreground/60">{testimonial.title}</div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10">
                Read More Success Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

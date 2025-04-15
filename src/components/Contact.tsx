
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-cyber-blue" />,
      label: "Email Us",
      value: "aritrakundu70@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-cyber-blue" />,
      label: "Call Us",
      value: "+91 6297347085",
    },
    {
      icon: <MapPin className="h-5 w-5 text-cyber-blue" />,
      label: "Visit Us",
      value: "Sector 5, Salt Lake City, Kolkata , India",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-cyber-blue uppercase tracking-wide mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
            Ready to Secure Your Business ?
          </h3>
          <p className="text-lg text-foreground/80">
            Contact our team of security experts to discuss how DarkWave can help
            protect your organization from digital fraud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="glass-card rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-cyber-blue"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-cyber-blue"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-700 focus:border-cyber-blue"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-gray-800/50 border-gray-700 focus:border-cyber-blue"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-blue hover:bg-cyber-blue/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card rounded-xl p-6 h-full">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gray-800/50 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="py-6 border-t border-gray-700">
                <h5 className="text-sm font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Facebook", "GitHub"].map((platform, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 rounded-lg bg-gray-800/50 hover:bg-cyber-blue/20 transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      {/* Simple placeholder for social icons */}
                      <div className="w-5 h-5 text-cyber-blue">{platform[0]}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

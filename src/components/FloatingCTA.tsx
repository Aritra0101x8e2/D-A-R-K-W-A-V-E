
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const showCTA = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(showCTA);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
      <div className="glass-card glow-border rounded-xl p-5 max-w-xs shadow-lg">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
        
        <h4 className="text-lg font-semibold mb-2">Protect Your Business</h4>
        <p className="text-sm text-foreground/80 mb-4">
          Get our security assessment and see how DarkWave can help you prevent fraud.
        </p>
        <a
  href="https://darkwave-store-aritra.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90 text-white">
    Buy Now
  </Button>
</a>

      </div>
    </div>
  );
};

export default FloatingCTA;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import mxtkLogo from "@/assets/mxtk-logo.png";

const Footer = ({ onStartChat }: { onStartChat: (initialMessage?: string) => void }) => {

  const handleQuickQuestion = (question: string) => {
    onStartChat(question);
    // Scroll to chat section
    setTimeout(() => {
      document.getElementById('chat-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <img src={mxtkLogo} alt="MXTK - Mineral Token" className="h-16 mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Unlocking liquidity for global mineral holdings through innovative 1:1 asset-backed tokenization.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Whitepaper
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleQuickQuestion("How does MXTK tokenization work? Can you explain the process step by step?")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickQuestion("What are the requirements to tokenize my mineral assets with MXTK?")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Requirements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleQuickQuestion("I have questions about MXTK. Can you help me understand the frequently asked questions?")}
                  className="hover:text-foreground transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@mineral-token.com" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="https://t.me/mineraltoken" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a></li>
              <li><a href="mailto:career@mineral-token.com" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Mineral Token. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
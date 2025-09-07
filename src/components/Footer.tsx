import { Button } from "@/components/ui/button";
import { SparklesIcon, GlobeAltIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Mineral Token</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Unlocking liquidity for global mineral holdings through innovative 1:1 asset-backed tokenization.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <GlobeAltIcon className="w-4 h-4 mr-2" />
                Website
              </Button>
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
              <li><a href="#tokenization" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#requirements" className="hover:text-foreground transition-colors">Requirements</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@mineral-token.com" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="https://t.me/mineraltoken" className="hover:text-foreground transition-colors">Telegram</a></li>
              <li><a href="#careers" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Mineral Token. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
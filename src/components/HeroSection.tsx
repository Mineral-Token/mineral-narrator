import { Button } from "@/components/ui/button";
import { SparklesIcon, CubeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import heroImage from "@/assets/mineral-hero-bg.jpg";

const HeroSection = ({ onStartChat }: { onStartChat: () => void }) => {
  return (
    <div 
      className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 40, 49, 0.95) 0%, rgba(34, 40, 49, 0.85) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-accent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Mineral Token</span>
            <br />
            <span className="text-foreground">Storytelling AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary world of MXTK through immersive AI-guided stories. 
            Learn how we're unlocking liquidity for global mineral assets.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="card-mineral text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <CubeIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Asset-Backed Tokens</h3>
            <p className="text-muted-foreground text-sm">
              1:1 tokenization of verified mineral assets with full transparency
            </p>
          </div>

          <div className="card-mineral text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Liquidity</h3>
            <p className="text-muted-foreground text-sm">
              Trade mineral wealth on crypto exchanges worldwide
            </p>
          </div>

          <div className="card-mineral text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Storytelling</h3>
            <p className="text-muted-foreground text-sm">
              Interactive narrative experiences that explain MXTK concepts
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onStartChat}
            className="btn-mineral text-lg px-8 py-4 hover:scale-105 transition-transform"
          >
            <SparklesIcon className="w-5 h-5 mr-2" />
            Start Your MXTK Journey
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-secondary/20 border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-4"
            onClick={() => {
              const tokenizationSection = document.getElementById('tokenization-info');
              if (tokenizationSection) {
                tokenizationSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                // If section doesn't exist, scroll to footer for now
                document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn About Tokenization
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">$33B+</div>
            <div className="text-muted-foreground">Mineral Assets Committed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">1:1</div>
            <div className="text-muted-foreground">Asset-Backed Ratio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">Global</div>
            <div className="text-muted-foreground">Mineral Network</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
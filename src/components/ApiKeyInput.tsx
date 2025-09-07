import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { KeyIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  hasApiKey: boolean;
}

const ApiKeyInput = ({ onApiKeySet, hasApiKey }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setIsLoading(true);
    
    // Store in localStorage
    localStorage.setItem('openrouter_api_key', apiKey);
    onApiKeySet(apiKey);
    
    setIsLoading(false);
  };

  const handleClearKey = () => {
    localStorage.removeItem('openrouter_api_key');
    setApiKey("");
    onApiKeySet("");
  };

  if (hasApiKey) {
    return (
      <div className="flex items-center gap-2 mb-4 p-3 bg-primary/10 rounded-xl border border-primary/20">
        <KeyIcon className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary">API key configured</span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleClearKey}
          className="ml-auto text-xs px-3 py-1"
        >
          Reset
        </Button>
      </div>
    );
  }

  return (
    <Card className="card-mineral mb-6 p-6">
      <div className="text-center mb-4">
        <KeyIcon className="w-8 h-8 text-primary mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">Connect Your OpenRouter API Key</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The AI chat is ready to use with a test key! You can also input your own OpenRouter API key for extended usage. Get one free at{" "}
          <a 
            href="https://openrouter.ai/keys" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            openrouter.ai/keys
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type={showKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-or-..."
            className="pr-10 bg-muted/30 border-border/50 focus:border-primary/50"
          />
          <button
            type="button"
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showKey ? (
              <EyeSlashIcon className="w-4 h-4" />
            ) : (
              <EyeIcon className="w-4 h-4" />
            )}
          </button>
        </div>
        
        <Button 
          type="submit" 
          disabled={!apiKey.trim() || isLoading}
          className="btn-mineral w-full"
        >
          {isLoading ? "Connecting..." : "Connect API Key"}
        </Button>
      </form>

      <div className="mt-4 p-3 bg-muted/20 rounded-lg">
        <p className="text-xs text-muted-foreground">
          🔒 Your API key is stored locally in your browser and never sent to our servers. 
          It's only used to make direct requests to OpenRouter from your browser.
        </p>
      </div>
    </Card>
  );
};

export default ApiKeyInput;
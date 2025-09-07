import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowUpIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { askAI } from "@/lib/openrouter";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to the world of Mineral Token! I'm here to guide you through the fascinating story of MXTK and how it's revolutionizing mineral asset liquidity. What would you like to explore first?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await askAI([...messages, userMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm experiencing some technical difficulties right now. Please try asking your question again in a moment, or feel free to explore our website for more information about MXTK." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="card-mineral w-full max-w-4xl h-[600px] flex flex-col">
      <div className="flex items-center gap-3 pb-4 border-b border-border/50">
        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
          <SparklesIcon className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">MXTK AI Guide</h3>
          <p className="text-sm text-muted-foreground">Ask me anything about Mineral Token</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-gradient-primary text-primary-foreground'
                  : 'bg-secondary/50 text-foreground border border-border/30'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary/50 border border-border/30 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-4 border-t border-border/50">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about MXTK's story, how it works, or investment opportunities..."
          className="flex-1 bg-muted/30 border-border/50 focus:border-primary/50"
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="btn-mineral px-4"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ChatInterface;
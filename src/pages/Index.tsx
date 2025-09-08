import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/Footer";

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string>("");

  const handleStartChat = (message?: string) => {
    if (message) {
      setInitialMessage(message);
    }
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartChat={handleStartChat} />
      
      {/* Chat Section - Inline */}
      {showChat && (
        <section className="py-12 px-6 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-4">Chat with MXTK Guide</h2>
              <p className="text-slate-300">Ask me anything about Mineral Token and asset-backed cryptocurrency</p>
            </div>
            <ChatInterface initialMessage={initialMessage} />
          </div>
        </section>
      )}
      
      
      {/* Footer */}
      <Footer onStartChat={handleStartChat} />
    </div>
  );
};

export default Index;

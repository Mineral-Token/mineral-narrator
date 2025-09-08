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
        <section className="py-8 px-6 bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Chat with MXTK Guide</h2>
              <p className="text-gray-600">Ask me anything about Mineral Token</p>
            </div>
            <ChatInterface initialMessage={initialMessage} />
          </div>
        </section>
      )}
      
      {/* Debug - Show when chat should be visible */}
      {process.env.NODE_ENV === 'development' && showChat && (
        <div style={{padding: '10px', background: 'green', color: 'white', textAlign: 'center'}}>
          ✅ Chat section is active (showChat = {showChat.toString()})
        </div>
      )}
      
      {/* Footer */}
      <Footer onStartChat={handleStartChat} />
    </div>
  );
};

export default Index;

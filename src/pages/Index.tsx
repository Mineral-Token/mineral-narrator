import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/Footer";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    // Smooth scroll to chat section
    setTimeout(() => {
      document.getElementById('chat-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartChat={handleStartChat} />
      
      {/* Chat Section */}
      {showChat && (
        <section id="chat-section" className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
          <div className="w-full flex justify-center">
            <ChatInterface />
          </div>
        </section>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

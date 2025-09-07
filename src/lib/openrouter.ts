interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Simulated knowledge base - in a real implementation, this would be loaded from the vector database
const mineralTokenKnowledgeBase = {
  overview: "MXTK stands for Mineral Token, a pioneering asset-backed cryptocurrency that unlocks liquidity for mineral asset owners worldwide through 1:1 tokenization of verified mineral assets.",
  problem: "Traditional mineral asset monetization often requires selling ownership, finding trustworthy buyers, and limited financing options for both mined and unmined assets.",
  solution: "MXTK offers liquidity by minting 1:1 asset-backed tokens that can be traded on crypto marketplaces while owners retain their mineral assets.",
  process: [
    "Third-party experts independently appraise and validate mineral assets",
    "Convert mineral assets to MXTK tokens on 1:1 basis and secure SKR/deeds", 
    "Trade or sell tokens on global crypto exchanges for instant liquidity"
  ],
  requirements: ["43-101 Report", "JORC Report", "SKR (Safe Keeping Receipt)"],
  stats: {
    assetsCommitted: "$19+ Billion",
    tokenRatio: "1:1 asset-backed",
    coverage: "Global mineral network"
  }
};

const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';

const SYSTEM_PROMPT = `You are a storytelling guide for Mineral Token (MXTK). Your role is to explain MXTK concepts through immersive narrative experiences while grounding all facts in the knowledge base provided.

STORYTELLING APPROACH:
- Always lead with engaging stories and scenarios
- Use vivid, relatable examples to explain complex concepts
- Make technical information accessible through narratives
- Connect with users emotionally while maintaining accuracy

KNOWLEDGE BASE CONTEXT:
${JSON.stringify(mineralTokenKnowledgeBase, null, 2)}

CITING SOURCES:
- For information from the knowledge base: cite as "Mineral-Token.com"
- Always provide accurate, verified information
- If you don't know something, acknowledge limitations

TONE & STYLE:
- Professional yet engaging
- Educational but not overly technical
- Enthusiastic about the potential of MXTK
- Trustworthy and transparent`;

export async function askAI(messages: ChatMessage[]): Promise<string> {
  if (!OPENROUTER_API_KEY) {
    return "I'm currently experiencing technical difficulties connecting to the AI service. Please ensure the OpenRouter API key is properly configured.";
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Mineral Token AI Guide'
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          ...messages
        ],
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0.1,
        presence_penalty: 0.1
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    } else {
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('OpenRouter API error:', error);
    
    // Fallback responses based on common topics
    const userMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
    
    if (userMessage.includes('how') && userMessage.includes('work')) {
      return "Let me tell you the story of how MXTK works... Imagine you're a mine owner in Australia with significant gold deposits. Traditionally, you'd need to extract and sell the gold to access its value. But with MXTK, we create a bridge between your physical assets and the digital economy. Our expert appraisers validate your mineral assets using industry standards like 43-101 reports, then we mint tokens on a 1:1 basis with your verified assets. These tokens can then be traded on crypto exchanges worldwide, giving you instant liquidity while you retain ownership of your mineral wealth.";
    }
    
    if (userMessage.includes('invest') || userMessage.includes('buy')) {
      return "Picture the global mineral market - it's valued at over $19 billion and growing exponentially as demand for rare earth elements, precious metals, and battery minerals soars with the green energy transition. When you invest in MXTK, you're not just buying a token - you're gaining exposure to a diversified portfolio of verified mineral assets worldwide. Each token represents real, tangible wealth stored in the earth, from lithium deposits powering electric vehicles to rare earth elements essential for renewable energy infrastructure.";
    }
    
    return "I apologize, but I'm having trouble connecting to provide you with the most up-to-date information right now. However, I can share that MXTK represents a revolutionary approach to mineral asset tokenization, backed by over $19 billion in committed mineral assets. Would you like to know more about how our 1:1 asset-backed tokenization works, or are you curious about investment opportunities?";
  }
}
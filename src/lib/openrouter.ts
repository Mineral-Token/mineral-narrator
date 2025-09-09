import { logger } from './logger';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Load knowledge base from JSON file
import knowledgeBaseData from '@/data/knowledge-base.json';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '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';

const SYSTEM_PROMPT = `You are a storytelling guide for Mineral Token (MXTK). Your role is to explain MXTK concepts through immersive narrative experiences while grounding all facts in the knowledge base provided.

STORYTELLING APPROACH:
- Always lead with engaging stories and scenarios
- Use vivid, relatable examples to explain complex concepts
- Make technical information accessible through narratives
- Connect with users emotionally while maintaining accuracy

KNOWLEDGE BASE CONTEXT:
${JSON.stringify(knowledgeBaseData, null, 2)}

GUIDELINES:
- Always provide accurate, verified information
- If you don't know something, acknowledge limitations

TONE & STYLE:
- Professional yet engaging
- Educational but not overly technical
- Enthusiastic about the potential of MXTK
- Trustworthy and transparent`;

export async function askAI(messages: ChatMessage[]): Promise<string> {
  const effectiveApiKey = OPENROUTER_API_KEY;
  const userMessage = messages[messages.length - 1]?.content || '';
  const modelName = 'mistralai/mistral-7b-instruct';
  
  if (!effectiveApiKey) {
    const fallbackResponse = "I'm currently experiencing technical difficulties connecting to my AI service. Please try again in a moment, or contact support if the issue persists.";
    await logger.logConversation(userMessage, fallbackResponse, 'fallback');
    return fallbackResponse;
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${effectiveApiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Mineral Token AI Guide'
      },
      body: JSON.stringify({
        model: modelName,
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
      const aiResponse = data.choices[0].message.content;
      await logger.logConversation(userMessage, aiResponse, modelName);
      return aiResponse;
    } else {
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('AI API error:', error);
    
    // Fallback responses based on common topics
    const userMessageLower = userMessage.toLowerCase();
    let fallbackResponse: string;
    
    if (userMessageLower.includes('how') && userMessageLower.includes('work')) {
      fallbackResponse = "Let me tell you the story of how MXTK works... Imagine you're a mine owner in Australia with significant gold deposits. Traditionally, you'd need to extract and sell the gold to access its value. But with MXTK, we create a bridge between your physical assets and the digital economy. Our expert appraisers validate your mineral assets using industry standards like 43-101 reports, then we mint tokens on a 1:1 basis with your verified assets. These tokens can then be traded on crypto exchanges worldwide, giving you instant liquidity while you retain ownership of your mineral wealth.";
    } else if (userMessageLower.includes('invest') || userMessageLower.includes('buy')) {
      fallbackResponse = "Picture the global mineral market - with over $33 billion in committed assets at launch and exponentially growing demand for rare earth elements, precious metals, and battery minerals driven by the green energy transition. When you invest in MXTK, you're not just buying a token - you're gaining exposure to a diversified portfolio of verified mineral assets worldwide. Each token represents real, tangible wealth stored in the earth, from lithium deposits powering electric vehicles to rare earth elements essential for renewable energy infrastructure.";
    } else {
      fallbackResponse = "I apologize, but I'm having trouble connecting to provide you with the most up-to-date information right now. However, I can share that MXTK represents a revolutionary approach to mineral asset tokenization, backed by over $33 billion in committed mineral assets. Would you like to know more about how our 1:1 asset-backed tokenization works, or are you curious about investment opportunities?";
    }
    
    await logger.logConversation(userMessage, fallbackResponse, 'fallback');
    return fallbackResponse;
  }
}
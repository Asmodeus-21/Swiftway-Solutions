
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Systems online. I am the Swiftway Project Consultant. How can I assist with your architectural or electrical requirements today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Informative Bubble Label */}
      {!isOpen && (
        <div className="glass px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-amber-500/30 shadow-xl animate-in fade-in slide-in-from-right-4 duration-500 mb-2">
          Ask our Expert AI Consultant
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-amber-500/30 rotate-45"></div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all hover:scale-110 active:scale-95 relative ${isOpen ? 'bg-slate-800' : 'bg-amber-500 ai-pulse-button'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-2xl ${isOpen ? '' : 'text-slate-900'}`}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] sm:w-[420px] h-[550px] bg-slate-900 rounded-[2rem] shadow-2xl flex flex-col border border-white/10 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-6 duration-300">
          <div className="bg-slate-950 p-6 text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950">
                <i className="fa-solid fa-bolt text-lg"></i>
              </div>
              <div>
                <p className="font-black text-xs uppercase tracking-widest">Swiftway AI Expert</p>
                <p className="text-[9px] text-amber-500 uppercase tracking-[0.2em] font-bold">Project Engineering Analysis Active</p>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-amber-500 text-slate-900 font-bold rounded-br-none' : 'glass text-slate-200 rounded-bl-none border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-950 border-t border-white/5 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your project..."
              className="flex-1 glass bg-white/5 border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-white transition-colors shadow-lg"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

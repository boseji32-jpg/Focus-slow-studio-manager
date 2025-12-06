'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { MessageCircle, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced Intent Map with more interactive responses
const INTENT_MAP: Record<string, Record<string, string>> = {
    '/dashboard': {
        'default': "🎬 You're in the Dashboard! Here you can manage your active sessions, track time, and monitor costs in real-time.",
        'timer': "⏱️ The timer tracks your studio usage precisely. Click 'Start' to begin tracking, 'Pause' to take breaks, and 'Reset' to start fresh!",
        'cost': "💰 Costs are calculated based on: Studio hourly rate + Equipment rental rates. Switch currencies in Settings!",
        'session': "📊 Create a new session to start tracking your studio time and equipment usage.",
        'help': "🆘 Need help? Try asking about: timer, costs, equipment, or currency settings."
    },
    '/equipment': {
        'default': "📷 Welcome to the Equipment Catalog! Browse our collection of professional cameras, lights, and props.",
        'add': "➕ Click 'Add to Session' on any item to include it in your current rental.",
        'camera': "📸 We have Canon R5, Sony A7S III, Red Komodo and more top-tier cameras!",
        'light': "💡 Check out our Aputure 600d and Profoto D2 lighting systems.",
        'price': "💵 All prices are shown in your selected currency. Change it in Settings!"
    },
    '/settings': {
        'default': "⚙️ Manage your profile, notifications, and currency preferences here.",
        'currency': "💱 You can switch between INR, USD, EUR, and GBP. Your choice affects all pricing across the app!",
        'profile': "👤 Update your display name, email, and avatar in the Profile section."
    },
    'global': {
        'pricing': "💰 Our studio rates start at ₹4,000/hr for the White Cyclorama (or equivalent in your currency).",
        'contact': "📧 Reach us at support@focusflow.com or use the Contact page for inquiries.",
        'hello': "👋 Hi there! I'm FocusBot, your AI studio assistant. How can I help you today?",
        'hi': "👋 Hello! Need help navigating FocusFlow Studio Manager?",
        'error': "⚠️ If you see an error, try refreshing the page or using the Reset button in the UI.",
        'location': "📍 We're based in Dindigul, Tamil Nadu, India! Check the About page for our exact location.",
        'india': "🇮🇳 Yes! We're proudly serving creators in Dindigul, Tamil Nadu, India.",
        'currency': "💱 Change your currency preference in Settings. We support INR, USD, EUR, and GBP!",
        'equipment': "🎥 Visit the Equipment page to browse cameras, lights, props, and more!",
        'thanks': "😊 You're welcome! Feel free to ask anything else.",
        'bye': "👋 Goodbye! Have a great session!"
    }
}

const QUICK_ACTIONS = [
    { label: '⏱️ How does timer work?', query: 'timer' },
    { label: '💰 Tell me about pricing', query: 'pricing' },
    { label: '📍 Where are you located?', query: 'location' },
    { label: '💱 Change currency', query: 'currency' },
];

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "👋 Hi! I'm FocusBot, your AI studio assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = (query?: string) => {
        const userMsg = query || input.trim();
        if (!userMsg) return;

        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            let response = "🤔 I'm not sure about that. Try asking about: timer, pricing, location, or currency.";
            const lowerInput = userMsg.toLowerCase();

            // Check context specific first
            const contextIntents = INTENT_MAP[pathname];
            let found = false;

            if (contextIntents) {
                for (const key in contextIntents) {
                    if (key !== 'default' && lowerInput.includes(key)) {
                        response = contextIntents[key];
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (const key in INTENT_MAP['global']) {
                    if (lowerInput.includes(key)) {
                        response = INTENT_MAP['global'][key];
                        found = true;
                        break;
                    }
                }
            }

            // Fallback to context default
            if (!found && contextIntents && contextIntents['default']) {
                response = contextIntents['default'];
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-96 shadow-2xl rounded-2xl overflow-hidden glass-strong border border-violet-500/30"
                    >
                        <Card className="border-0 shadow-none bg-transparent">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Bot className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">FocusBot</h3>
                                        <p className="text-violet-100 text-xs">AI Studio Assistant</p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-white hover:bg-white/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Messages */}
                            <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
                                {messages.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {m.role === 'bot' && (
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                                <Bot className="h-4 w-4 text-white" />
                                            </div>
                                        )}
                                        <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${m.role === 'user'
                                                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-none'
                                                : 'glass border border-violet-500/20 text-zinc-200 rounded-tl-none'
                                            }`}>
                                            {m.text}
                                        </div>
                                        {m.role === 'user' && (
                                            <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                                                <User className="h-4 w-4 text-zinc-300" />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex gap-2 items-center"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                            <Bot className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="glass border border-violet-500/20 px-4 py-2 rounded-2xl rounded-tl-none">
                                            <div className="flex gap-1">
                                                <span className="h-2 w-2 bg-violet-400 rounded-full animate-bounce" />
                                                <span className="h-2 w-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                <span className="h-2 w-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Quick Actions */}
                            <div className="p-3 border-t border-white/10 bg-zinc-950/50">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {QUICK_ACTIONS.map((action, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(action.query)}
                                            className="text-xs px-3 py-1 rounded-full glass border border-violet-500/20 text-violet-300 hover:bg-violet-500/10 transition-colors"
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask me anything..."
                                        className="h-10 bg-zinc-900/50 border-violet-500/20 text-white placeholder:text-zinc-500"
                                    />
                                    <Button
                                        size="icon"
                                        className="h-10 w-10 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                                        onClick={() => handleSend()}
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all hover:scale-110"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse" />
                )}
            </Button>
        </div>
    );
}

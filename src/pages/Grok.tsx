import React from 'react';
import { Sparkles, Bot, MessageSquare } from 'lucide-react';

export default function Grok() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">Grok AI</h1>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Bot className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Meet Grok</h2>
          </div>
          <p className="mb-4">Your AI assistant for real-time information and engaging conversations.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors">
            Start Chat
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg px-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <Sparkles className="w-6 h-6 text-blue-500 mb-2" />
              <h4 className="font-bold mb-2">Real-time Knowledge</h4>
              <p className="text-gray-600">Access up-to-date information and insights from across the platform.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <MessageSquare className="w-6 h-6 text-blue-500 mb-2" />
              <h4 className="font-bold mb-2">Natural Conversations</h4>
              <p className="text-gray-600">Engage in human-like discussions with context-aware responses.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="font-bold text-lg px-4 mb-4">Recent Conversations</h3>
          <div className="space-y-4">
            {/* Placeholder for recent conversations */}
            <div className="px-4 py-3 border border-gray-200 rounded-lg mx-4">
              <p className="text-gray-500 text-sm">No recent conversations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
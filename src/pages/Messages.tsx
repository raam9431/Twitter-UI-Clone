import React, { useState } from 'react';
import { Search, Edit, MoreHorizontal } from 'lucide-react';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      handle: 'sarahj_dev',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    lastMessage: 'Thanks for sharing that article!',
    timestamp: '2h',
    unread: true
  },
  {
    id: 2,
    user: {
      name: 'Alex Rivera',
      handle: 'arivera_tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    lastMessage: 'Let me know when you want to collaborate on the project',
    timestamp: '1d',
    unread: false
  },
  {
    id: 3,
    user: {
      name: 'Emily Chen',
      handle: 'emilyc_designs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    },
    lastMessage: 'The design looks great! 👍',
    timestamp: '2d',
    unread: false
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="flex h-screen">
      {/* Conversations List */}
      <div className="w-2/5 border-r border-gray-200">
        <div className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200">
          <h1 className="text-xl font-bold mb-3">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors
                ${selectedConversation.id === conversation.id ? 'bg-gray-50' : ''}`}
            >
              <div className="flex space-x-3">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold truncate">{conversation.user.name}</h2>
                    <span className="text-sm text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversation View */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={selectedConversation.user.avatar}
                alt={selectedConversation.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-bold">{selectedConversation.user.name}</h2>
                <p className="text-sm text-gray-500">@{selectedConversation.user.handle}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col justify-center items-center h-full text-gray-500">
            <p className="text-center">Start a new conversation with</p>
            <p className="font-bold">{selectedConversation.user.name}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="relative">
            <textarea
              placeholder="Start a new message"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <button className="absolute bottom-3 right-3 bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
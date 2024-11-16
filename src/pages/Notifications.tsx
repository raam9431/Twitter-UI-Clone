import React, { useState } from 'react';
import { AtSign, Heart, Repeat2, User } from 'lucide-react';

const tabs = ['All', 'Mentions'];

const notifications = [
  {
    id: 1,
    type: 'like',
    user: {
      name: 'Sarah Johnson',
      handle: 'sarahj_dev',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: 'liked your tweet',
    tweet: 'Just deployed my new React application! 🚀 #webdev #reactjs',
    timestamp: '2h'
  },
  {
    id: 2,
    type: 'retweet',
    user: {
      name: 'Alex Rivera',
      handle: 'arivera_tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: 'retweeted your tweet',
    tweet: 'Learning TypeScript has been a game changer!',
    timestamp: '4h'
  },
  {
    id: 3,
    type: 'follow',
    user: {
      name: 'Emily Chen',
      handle: 'emilyc_designs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: 'followed you',
    timestamp: '6h'
  },
  {
    id: 4,
    type: 'mention',
    user: {
      name: 'David Kim',
      handle: 'davidk_dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    },
    content: 'mentioned you',
    tweet: '@johndoe Great article on React hooks! Very helpful 👏',
    timestamp: '8h'
  }
];

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'like':
      return <Heart className="w-4 h-4 text-red-500" />;
    case 'retweet':
      return <Repeat2 className="w-4 h-4 text-green-500" />;
    case 'follow':
      return <User className="w-4 h-4 text-blue-500" />;
    case 'mention':
      return <AtSign className="w-4 h-4 text-blue-500" />;
    default:
      return null;
  }
};

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredNotifications = activeTab === 'All'
    ? notifications
    : notifications.filter(n => n.type === 'mention');

  return (
    <div>
      <div className="sticky top-0 bg-white z-10">
        <h1 className="px-4 py-3 text-xl font-bold border-b border-gray-200">
          Notifications
        </h1>
        <div className="flex border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-center font-medium hover:bg-gray-50 transition-colors
                ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {filteredNotifications.map(notification => (
          <div key={notification.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="pt-1">
                <NotificationIcon type={notification.type} />
              </div>
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <p className="font-bold hover:underline inline-block">
                  {notification.user.name}
                </p>
                <span className="text-gray-500"> {notification.content}</span>
                {notification.tweet && (
                  <p className="text-gray-600 mt-1">{notification.tweet}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">{notification.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
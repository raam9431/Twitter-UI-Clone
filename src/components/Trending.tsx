import React from 'react';
import { MoreHorizontal, Search } from 'lucide-react';

const trendingTopics = [
  { category: 'Technology', title: '#ReactJS', tweets: '25.5K' },
  { category: 'Sports', title: 'Champions League', tweets: '120.2K' },
  { category: 'Entertainment', title: '#NewMovie', tweets: '45.1K' },
  { category: 'Politics', title: '#Elections2024', tweets: '85.3K' },
];

const suggestedUsers = [
  {
    name: 'Sarah Johnson',
    handle: 'sarahj_dev',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Alex Rivera',
    handle: 'arivera_tech',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
];

export function Trending() {
  return (
    <div className="w-80 space-y-4">
      <div className="sticky top-0 bg-white pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl">
        <h2 className="font-bold text-xl p-4">Trends for you</h2>
        {trendingTopics.map((topic) => (
          <div key={topic.title} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">{topic.category}</span>
              <button className="hover:bg-blue-50 rounded-full p-2">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <p className="font-bold">{topic.title}</p>
            <p className="text-sm text-gray-500">{topic.tweets} Tweets</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl">
        <h2 className="font-bold text-xl p-4">Who to follow</h2>
        {suggestedUsers.map((user) => (
          <div key={user.handle} className="px-4 py-3 hover:bg-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold hover:underline">{user.name}</p>
                <p className="text-gray-500">@{user.handle}</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-gray-800">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
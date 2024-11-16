import React from 'react';
import { Search, TrendingUp } from 'lucide-react';

const trendingTopics = [
  {
    category: 'Technology',
    title: '#AI',
    tweets: '125K',
    description: 'The latest developments in artificial intelligence and machine learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    category: 'Sports',
    title: 'World Cup',
    tweets: '450K',
    description: 'Follow the latest updates from the World Cup',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55'
  },
  {
    category: 'Entertainment',
    title: '#Oscars2024',
    tweets: '280K',
    description: 'Live updates and reactions from the Academy Awards',
    image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0'
  }
];

export default function Explore() {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {trendingTopics.map((topic, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex items-center text-gray-500 text-sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {topic.category} · Trending
                </div>
                <h2 className="font-bold text-xl mt-1">{topic.title}</h2>
                <p className="text-gray-600 mt-1">{topic.description}</p>
                <p className="text-gray-500 text-sm mt-2">{topic.tweets} Tweets</p>
              </div>
              <img
                src={`${topic.image}?auto=format&fit=crop&w=150&h=150&q=80`}
                alt={topic.title}
                className="w-24 h-24 rounded-xl object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
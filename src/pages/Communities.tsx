import React from 'react';
import { Users, Plus } from 'lucide-react';

const communities = [
  {
    id: 1,
    name: 'Tech Enthusiasts',
    members: '45.2K',
    description: 'A community for discussing the latest in technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: 2,
    name: 'Web Development',
    members: '32.1K',
    description: 'Share your coding journey and get help from fellow developers',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200&q=80'
  }
];

export default function Communities() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">Communities</h1>
      </div>

      <div className="p-4">
        <button className="w-full bg-blue-500 text-white rounded-full py-3 font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create Community</span>
        </button>

        <div className="mt-6 space-y-4">
          <h2 className="font-bold text-xl">Your communities</h2>
          {communities.map(community => (
            <div key={community.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
              <img
                src={community.image}
                alt={community.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{community.name}</h3>
                <p className="text-gray-500 text-sm">{community.members} members</p>
                <p className="text-gray-600 mt-1">{community.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4">Discover new communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...communities].reverse().map(community => (
              <div key={community.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{community.name}</h3>
                    <p className="text-gray-500 text-sm">{community.members} members</p>
                  </div>
                </div>
                <p className="text-gray-600">{community.description}</p>
                <button className="mt-4 w-full bg-black text-white rounded-full py-2 font-bold hover:bg-gray-800 transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
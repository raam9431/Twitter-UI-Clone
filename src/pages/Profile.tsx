import React, { useState } from 'react';
import { Calendar, Link as LinkIcon, MapPin, Tweet as TweetIcon } from 'lucide-react';
import { Tweet } from '../components/Tweet';

const tabs = ['Tweets', 'Replies', 'Media', 'Likes'];

const userTweets = [
  {
    id: 1,
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Excited to announce that I\'m joining the @awesome_company team as a Senior Developer! 🎉\n\nCan\'t wait to work on amazing projects and learn from talented people. #newjob #techjobs',
    timestamp: '2d',
    likes: 245,
    retweets: 12,
    replies: 28,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 2,
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just published my latest blog post about React performance optimization techniques! Check it out 👇\n\nhttps://blog.johndoe.dev/react-performance',
    timestamp: '5d',
    likes: 189,
    retweets: 45,
    replies: 12,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Tweets');

  return (
    <div>
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>

      {/* Profile Header */}
      <div className="relative px-4 py-3 border-b border-gray-200">
        <div className="absolute -top-16 left-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        <div className="flex justify-end mb-16">
          <button className="px-4 py-2 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-colors">
            Edit profile
          </button>
        </div>

        <div className="mb-4">
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-gray-500">@johndoe</p>
        </div>

        <p className="mb-3">
          Senior Software Developer | React & TypeScript Enthusiast | Building awesome web experiences
        </p>

        <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-3">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            San Francisco, CA
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-4 h-4 mr-1" />
            <a href="#" className="text-blue-500 hover:underline">blog.johndoe.dev</a>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Joined March 2020
          </div>
        </div>

        <div className="flex gap-4 text-sm">
          <button className="hover:underline">
            <span className="font-bold">1,234</span>
            <span className="text-gray-500"> Following</span>
          </button>
          <button className="hover:underline">
            <span className="font-bold">5,678</span>
            <span className="text-gray-500"> Followers</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
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

      {/* Tweets */}
      <div className="divide-y divide-gray-200">
        {userTweets.map(tweet => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Tweet } from '../components/Tweet';
import { TweetComposer } from '../components/TweetComposer';

interface TweetData {
  id: number;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  avatar: string;
}

const initialTweets: TweetData[] = [
  {
    id: 1,
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just deployed my new React application! 🚀 #webdev #reactjs',
    timestamp: '2h',
    likes: 42,
    retweets: 5,
    replies: 3,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    username: 'Jane Smith',
    handle: 'janesmith',
    content: 'Learning TypeScript has been a game changer for my development workflow! 💡 #typescript #coding',
    timestamp: '4h',
    likes: 128,
    retweets: 18,
    replies: 12,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function Home() {
  const [tweets, setTweets] = useState<TweetData[]>(initialTweets);

  const handleNewTweet = (content: string) => {
    const newTweet: TweetData = {
      id: tweets.length + 1,
      username: 'John Doe',
      handle: 'johndoe',
      content,
      timestamp: 'now',
      likes: 0,
      retweets: 0,
      replies: 0,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">Home</h1>
      </div>
      
      <TweetComposer onTweet={handleNewTweet} />
      
      <div className="divide-y divide-gray-200">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </>
  );
}
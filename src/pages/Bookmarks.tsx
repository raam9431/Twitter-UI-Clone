import React from 'react';
import { Tweet } from '../components/Tweet';

const bookmarkedTweets = [
  {
    id: 1,
    username: 'React',
    handle: 'reactjs',
    content: '🎉 React 19 is here! Check out all the new features and improvements. Learn more about concurrent rendering, server components, and the new hooks API.',
    timestamp: '1d',
    likes: 15420,
    retweets: 3200,
    replies: 842,
    avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 2,
    username: 'TypeScript',
    handle: 'typescript',
    content: 'TypeScript 5.4 brings performance improvements and new type system features. Update today for a better development experience! #typescript',
    timestamp: '2d',
    likes: 8930,
    retweets: 2100,
    replies: 456,
    avatar: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 3,
    username: 'Next.js',
    handle: 'nextjs',
    content: 'Introducing Next.js 14: Turbopack is now stable, bringing 5x faster local development and enhanced build performance. Try it now! 🚀',
    timestamp: '3d',
    likes: 12400,
    retweets: 3800,
    replies: 567,
    avatar: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export default function Bookmarks() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold">Bookmarks</h1>
          <p className="text-gray-500 text-sm">@johndoe</p>
        </div>
      </div>

      {bookmarkedTweets.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {bookmarkedTweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Save Tweets for later</h2>
          <p className="text-gray-500 max-w-sm">
            Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.
          </p>
        </div>
      )}
    </div>
  );
}
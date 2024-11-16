import React, { useState } from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';

export function TweetComposer({ onTweet }: { onTweet: (content: string) => void }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onTweet(content);
      setContent('');
    }
  };

  return (
    <div className="border-b border-gray-200 p-3 sm:p-4">
      <div className="flex space-x-3 sm:space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none border-0 focus:ring-0 text-lg placeholder-gray-500 mb-3 min-h-[100px]"
            />
            <div className="flex items-center justify-between border-t border-gray-200 pt-3">
              <div className="flex space-x-2 sm:space-x-4">
                <button type="button" className="text-blue-500 hover:bg-blue-50 p-1.5 sm:p-2 rounded-full">
                  <Image className="w-5 h-5" />
                </button>
                <button type="button" className="text-blue-500 hover:bg-blue-50 p-1.5 sm:p-2 rounded-full">
                  <Smile className="w-5 h-5" />
                </button>
                <button type="button" className="text-blue-500 hover:bg-blue-50 p-1.5 sm:p-2 rounded-full hidden sm:block">
                  <Calendar className="w-5 h-5" />
                </button>
                <button type="button" className="text-blue-500 hover:bg-blue-50 p-1.5 sm:p-2 rounded-full hidden sm:block">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                disabled={!content.trim()}
                className="bg-blue-500 text-white px-4 py-1.5 sm:py-2 rounded-full font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
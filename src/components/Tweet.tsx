import React from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface TweetProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  avatar: string;
}

export function Tweet({ username, handle, content, timestamp, likes, retweets, replies, avatar }: TweetProps) {
  const [liked, setLiked] = React.useState(false);
  const [localLikes, setLocalLikes] = React.useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLocalLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        <img src={avatar} alt={username} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 flex-wrap">
            <span className="font-bold hover:underline truncate">{username}</span>
            <span className="text-gray-500 truncate">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline">{timestamp}</span>
          </div>
          <p className="mt-2 text-gray-900 break-words">{content}</p>
          <div className="flex justify-between mt-3 max-w-md text-sm sm:text-base">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:bg-blue-50 rounded-full p-1" />
              <span>{replies}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 group">
              <Repeat2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:bg-green-50 rounded-full p-1" />
              <span>{retweets}</span>
            </button>
            <button 
              className={`flex items-center space-x-2 group ${liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
              onClick={handleLike}
            >
              <Heart 
                className={`w-4 h-4 sm:w-5 sm:h-5 ${liked ? 'fill-current' : ''} group-hover:bg-red-50 rounded-full p-1`} 
              />
              <span>{localLikes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
              <Share className="w-4 h-4 sm:w-5 sm:h-5 group-hover:bg-blue-50 rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
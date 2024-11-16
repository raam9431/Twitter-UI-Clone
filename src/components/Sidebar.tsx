import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  Settings, 
  Twitter,
  X,
  Bot,
  Users,
  Crown,
  Building2,
  MoreHorizontal,
  PenSquare
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Bot, label: 'Grok', path: '/grok' },
  { icon: Users, label: 'Communities', path: '/communities' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Crown, label: 'Premium', path: '/premium' },
  { icon: Building2, label: 'Verified Orgs', path: '/verified-orgs' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: MoreHorizontal, label: 'More', path: '/more' }
];

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="fixed lg:relative h-screen bg-white flex flex-col p-4 space-y-4 w-72 lg:w-64">
      <div className="flex items-center justify-between lg:justify-start">
        <NavLink to="/" className="p-2 hover:bg-blue-50 rounded-full w-fit" onClick={onClose}>
          <Twitter className="w-8 h-8 text-blue-500" />
        </NavLink>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
          type="button"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center space-x-4 p-3 rounded-full hover:bg-gray-100 transition-colors
                  ${isActive ? 'font-bold' : ''}
                `}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xl">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button 
        className="w-full bg-blue-500 text-white rounded-full py-3 font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
        type="button"
      >
        <PenSquare className="w-5 h-5" />
        <span>Post</span>
      </button>

      <button 
        className="lg:hidden flex items-center space-x-3 p-4 hover:bg-gray-100 rounded-full"
        type="button"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-left">
          <div className="font-bold">John Doe</div>
          <div className="text-gray-500">@johndoe</div>
        </div>
      </button>
    </div>
  );
}
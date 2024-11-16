import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Trending } from './components/Trending';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Grok from './pages/Grok';
import Communities from './pages/Communities';
import Premium from './pages/Premium';
import VerifiedOrgs from './pages/VerifiedOrgs';
import More from './pages/More';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto flex relative">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
            type="button"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Sidebar */}
          <div className={`
            fixed inset-0 z-40 lg:relative
            ${sidebarOpen ? 'block' : 'hidden'} 
            lg:block lg:w-64
          `}>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            
            {/* Sidebar Content */}
            <div className="relative z-50">
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
          
          {/* Main Content */}
          <main className="flex-1 border-x border-gray-200 min-h-screen w-full max-w-full lg:max-w-[600px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/grok" element={<Grok />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/verified-orgs" element={<VerifiedOrgs />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/more" element={<More />} />
            </Routes>
          </main>

          {/* Trending Section */}
          <div className="hidden xl:block w-96 pl-8 pt-3">
            <Trending />
          </div>
        </div>
      </div>
    </Router>
  );
}
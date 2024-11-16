import React from 'react';
import { Settings, HelpCircle, Palette, UserPlus, DollarSign, MessageSquare, FileText, Shield } from 'lucide-react';

const menuItems = [
  {
    icon: Settings,
    label: 'Settings and Support',
    items: [
      { icon: Settings, label: 'Settings and privacy' },
      { icon: HelpCircle, label: 'Help Center' },
      { icon: Palette, label: 'Display' }
    ]
  },
  {
    icon: DollarSign,
    label: 'Professional Tools',
    items: [
      { icon: UserPlus, label: 'Twitter for Professionals' },
      { icon: DollarSign, label: 'Monetization' }
    ]
  },
  {
    icon: Shield,
    label: 'Safety and Security',
    items: [
      { icon: Shield, label: 'Privacy Center' },
      { icon: MessageSquare, label: 'Crisis Response' },
      { icon: FileText, label: 'Terms of Service' }
    ]
  }
];

export default function More() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">More</h1>
      </div>

      <div className="p-4">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <section.icon className="w-6 h-6 text-gray-600" />
              <h2 className="font-bold text-lg">{section.label}</h2>
            </div>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <a href="#" className="hover:underline">About</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">© 2024 Twitter Clone</p>
        </div>
      </div>
    </div>
  );
}
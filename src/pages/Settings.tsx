import React from 'react';
import { ChevronRight, Bell, MonitorSmartphone, Key, User, Shield, Smartphone, Palette, Globe } from 'lucide-react';

const settingsGroups = [
  {
    title: 'Your account',
    items: [
      { icon: User, label: 'Account information', description: 'See your account information like your phone number and email address' },
      { icon: Key, label: 'Change your password', description: 'Change your password at any time' },
      { icon: Shield, label: 'Security and account access', description: 'Manage your account\'s security and keep track of your account\'s usage including apps that you have connected to your account' }
    ]
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', description: 'Select the kinds of notifications you get about your activities, interests, and recommendations' },
      { icon: MonitorSmartphone, label: 'Display', description: 'Manage your font size, color, and background. These settings affect all the Twitter accounts on this browser' },
      { icon: Smartphone, label: 'Accessibility', description: 'Manage aspects of your Twitter experience such as limiting color contrast and motion' },
      { icon: Globe, label: 'Languages', description: 'Manage which languages are used to personalize your Twitter experience' },
      { icon: Palette, label: 'Theme', description: 'Select your theme preference and where you see trends' }
    ]
  }
];

export default function Settings() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">Settings</h1>
      </div>

      <div className="divide-y divide-gray-200">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="py-4">
            <h2 className="px-4 text-xl font-bold mb-2">{group.title}</h2>
            <div className="divide-y divide-gray-200">
              {group.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <item.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="p-4">
          <p className="text-sm text-gray-500">
            © 2024 Twitter Clone. All rights reserved.
            <br />
            Version 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}
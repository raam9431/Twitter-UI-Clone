import React from 'react';
import { Building2, Shield, Users, Globe, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Official Verification',
    description: "Get the gold checkmark that proves you're an official organization"
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Add and manage multiple team members to your organization'
  },
  {
    icon: Globe,
    title: 'Brand Protection',
    description: 'Secure your organization\'s presence across the platform'
  }
];

const organizations = [
  {
    name: 'Tech Corp',
    handle: '@techcorp',
    description: 'Leading innovation in technology',
    members: '150',
    verified: true,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Global Media',
    handle: '@globalmedia',
    description: 'Breaking news and analysis',
    members: '230',
    verified: true,
    image: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export default function VerifiedOrgs() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-10">
        <h1 className="px-4 py-3 text-xl font-bold">Verified Organizations</h1>
      </div>

      <div className="p-4 space-y-8">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Building2 className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Verify Your Organization</h2>
          </div>
          <p className="mb-4">Join thousands of organizations that use Twitter to connect with their customers.</p>
          <button 
            className="bg-white text-yellow-600 px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
            type="button"
          >
            Get Verified
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <feature.icon className="w-8 h-8 text-yellow-500 mb-2" />
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl">Featured Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {organizations.map((org, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <h4 className="font-bold">{org.name}</h4>
                      {org.verified && (
                        <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-gray-500">{org.handle}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{org.description}</p>
                <p className="mt-2 text-sm text-gray-500">{org.members} team members</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
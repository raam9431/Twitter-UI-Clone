import React from 'react';
import { CheckCircle2, Star, Zap, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Blue Checkmark',
    description: 'Get verified and stand out from the crowd'
  },
  {
    icon: Star,
    title: 'Priority Tweets',
    description: 'Your tweets will be seen by more people'
  },
  {
    icon: Zap,
    title: 'Faster Access',
    description: 'Early access to new features'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Additional account protection features'
  }
];

const plans = [
  {
    name: 'Basic',
    price: '$8',
    period: '/month',
    features: ['Blue checkmark', 'Priority tweets', 'Ad-free experience']
  },
  {
    name: 'Premium',
    price: '$16',
    period: '/month',
    features: ['All Basic features', 'Longer tweets', 'Premium support', 'Custom themes']
  }
];

export default function Premium() {
  return (
    <div>
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <h1 className="px-4 py-3 text-xl font-bold">Premium</h1>
      </div>

      <div className="p-4 space-y-8">
        <div className="text-center space-y-2">
          <Award className="w-12 h-12 text-blue-500 mx-auto" />
          <h2 className="text-2xl font-bold">Unlock Premium Features</h2>
          <p className="text-gray-600">Get verified and access exclusive features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <feature.icon className="w-8 h-8 text-blue-500 mb-2" />
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {plans.map((plan, index) => (
            <div key={index} className={`border ${index === 1 ? 'border-blue-500' : 'border-gray-200'} rounded-xl p-6`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-full font-bold ${
                index === 1 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-black text-white hover:bg-gray-800'
              } transition-colors`}>
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
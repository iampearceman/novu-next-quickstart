import React from 'react';

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ name, description, icon }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{name}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const IntegrationsContent = () => (
  <div className="bg-white text-gray-800 p-8 overflow-y-auto h-full">
    <h1 className="text-3xl font-bold mb-6">Integrations</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <IntegrationCard
        name="Email"
        description="Send emails through various providers"
        icon={<span className="text-2xl">📧</span>}
      />
      <IntegrationCard
        name="SMS"
        description="Send SMS notifications"
        icon={<span className="text-2xl">📱</span>}
      />
      <IntegrationCard
        name="Push Notifications"
        description="Send push notifications to mobile devices"
        icon={<span className="text-2xl">🔔</span>}
      />
      {/* Add more IntegrationCard components as needed */}
    </div>
  </div>
);

export default IntegrationsContent;
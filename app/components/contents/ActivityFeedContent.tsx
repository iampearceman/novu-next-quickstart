import React from 'react';

interface ActivityItemProps {
  type: string;
  message: string;
  timestamp: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ type, message, timestamp }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold">{type}</span>
      <span className="text-sm text-gray-500">{timestamp}</span>
    </div>
    <p className="text-sm text-gray-600">{message}</p>
  </div>
);

const ActivityFeedContent = () => (
  <div className="bg-white text-gray-800 p-8 overflow-y-auto h-full">
    <h1 className="text-3xl font-bold mb-6">Activity Feed</h1>
    <div className="space-y-4">
      <ActivityItem
        type="Notification Sent"
        message="Email notification sent to user@example.com"
        timestamp="2 minutes ago"
      />
      <ActivityItem
        type="Workflow Triggered"
        message="'New User Welcome' workflow triggered for user ID 12345"
        timestamp="15 minutes ago"
      />
      <ActivityItem
        type="Integration Updated"
        message="SMS integration settings updated"
        timestamp="1 hour ago"
      />
      {/* Add more ActivityItem components as needed */}
    </div>
  </div>
);

export default ActivityFeedContent;
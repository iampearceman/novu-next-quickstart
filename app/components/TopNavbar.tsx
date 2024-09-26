import React from 'react';
import { Inbox } from '@novu/react';

interface NovuConfig {
  applicationIdentifier: string;
  subscriberId: string;
  appearance: {
    elements: {
      bellIcon: {
        height: string;
        width: string;
        color: string;
      };
      popoverContent: {
        marginTop: string;
        marginLeft: string;
      };
    };
  };
}

const novuConfig: NovuConfig = {
  applicationIdentifier: process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIER || 'default-app-id',
  subscriberId: process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID || 'default-subscriber-id',
  appearance: {
    elements: {
      bellIcon: {
        height: "30px",
        width: "30px",
        color: ''
      },
      popoverContent: {
        marginTop: "15px !important",
        marginLeft: "-6.5% !important",
      },
    },
  },
};

const TopNavbar: React.FC = () => (
  <div className="bg-white text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
    </div>
    <div className="flex items-center space-x-3">
      <button className="hover:bg-gray-100 rounded-full transition-colors duration-200">
        <Inbox {...novuConfig} />
      </button>
    </div>
  </div>
);

export default TopNavbar;

import React from 'react';
import { Inbox } from '@novu/react';

const novuConfig: any = {
    applicationIdentifier: process.env.NEXT_PUBLIC_NOVU_APPLICATION_IDENTIFIRER,
    subscriberId: process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID,
    appearance: {
        elements: {
            bellIcon: {
                height: "30px",
                width: "30px",
                color: "white",
            },
            popoverContent: {
                marginTop: "15px !important",
                marginLeft: "-6.5% !important",
            },
        }
    }
};

const TopNavbar: React.FC = () => (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <span className="font-semibold text-lg">Novu Flow</span>
        </div>
        <div className="flex items-center space-x-3">
            {/* <span className="text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Connected
            </span> */}
            <button className="hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Inbox {...novuConfig} />
            </button>
        </div>
    </div>
);

export default TopNavbar;
import React from 'react';
import { Bell, HelpCircle, User, Moon } from 'lucide-react';

const TopNavbar: React.FC = () => (
  <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <span className="font-semibold text-lg">Novu Flow</span>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-green-400 flex items-center">
        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
        Connected
      </span>
      <button className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200">
        <Bell size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200">
        <Moon size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200">
        <HelpCircle size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-200">
        <User size={20} />
      </button>
    </div>
  </div>
);

export default TopNavbar;
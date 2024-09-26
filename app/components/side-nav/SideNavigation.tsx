import React, { useState } from 'react';
import { Zap, GitBranch, Activity, Users, Key, Home } from 'lucide-react';
import LocalStudioModal from './LocalStudioModal';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, onClick, isActive }) => (
  <li className="mb-2">
    <a
      href="#"
      className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
        isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{text}</span>
    </a>
  </li>
);

interface SideNavigationProps {
  setActivePage: (page: string) => void;
  activePage: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ setActivePage, activePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-64 bg-gray-900 text-gray-100 h-full p-4 flex flex-col">
      <div className="mb-8">
        <div className="mt-3">
          <h1 className="text-xl font-bold">Starter App</h1>
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-1">
          <NavItem
            icon={<Home size={20} />}
            text="Home"
            onClick={() => setActivePage('home')}
            isActive={activePage === 'home'}
          />
          <NavItem
            icon={<GitBranch size={20} />}
            text="Onboarding"
            onClick={() => setActivePage('onboarding')}
            isActive={activePage === 'onboarding'}
          />
          <NavItem
            icon={<Zap size={20} />}
            text="Integrations"
            onClick={() => setActivePage('integrations')}
            isActive={activePage === 'integrations'}
          />
          <NavItem
            icon={<Activity size={20} />}
            text="Activity Feed"
            onClick={() => setActivePage('activity')}
            isActive={activePage === 'activity'}
          />
          <NavItem
            icon={<Users size={20} />}
            text="Subscribers"
          />
          <NavItem
            icon={<Key size={20} />}
            text="API keys"
          />
        </ul>
      </nav>
      <div className="mt-auto">
        <button
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          Open Local Studio
        </button>
      </div>
      <LocalStudioModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SideNavigation;
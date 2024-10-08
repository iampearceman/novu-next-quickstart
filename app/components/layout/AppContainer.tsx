"use client"
import React, { useState } from 'react';
import SideNavigation from '../side-nav/SideNavigation';
import TopNavbar from '../TopNavbar';
import Onboarding from '../contents/Onboarding';
import IntegrationsContent from '../contents/IntegrationsContent';
import ActivityFeedContent from '../contents/ActivityFeedContent';
import Main from '../contents/Main';

const AppContainer = () => {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Main />;
      case 'onboarding':
        return <Onboarding />;
      case 'integrations':
        return <IntegrationsContent />;
      case 'activity':
        return <ActivityFeedContent />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gradient-to-br from-gray-100 to-gray-300 overflow-hidden justify-center items-center font-sans p-8">
      <div className="flex w-11/12 h-[95%] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <SideNavigation setActivePage={setActivePage} activePage={activePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNavbar />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
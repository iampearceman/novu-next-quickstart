import React, { useState } from 'react';
import { Code, Play, Wrench, Zap, Send, FileCheck } from 'lucide-react';

const CodeBlock = ({ command }: { command: string }) => (
  <div className="bg-gray-900 p-3 rounded-lg">
    <code className="text-green-400">{command}</code>
  </div>
);

import { LucideProps } from 'lucide-react';

interface CardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  color: 'indigo' | 'green' | 'blue' | 'yellow' | 'purple' | 'red';
  isSelected: boolean;
  onClick: () => void;
}

const Card = ({ icon: Icon, title, description, color, isSelected, onClick }: CardProps) => {
  const colorClasses = {
    indigo: {
      bg: isSelected ? 'bg-indigo-700' : 'bg-indigo-600',
      hoverBg: 'hover:bg-indigo-700',
      text: 'text-indigo-200',
    },
    green: {
      bg: isSelected ? 'bg-green-700' : 'bg-green-600',
      hoverBg: 'hover:bg-green-700',
      text: 'text-green-200',
    },
    blue: {
      bg: isSelected ? 'bg-blue-700' : 'bg-blue-600',
      hoverBg: 'hover:bg-blue-700',
      text: 'text-blue-200',
    },
    yellow: {
      bg: isSelected ? 'bg-yellow-700' : 'bg-yellow-600',
      hoverBg: 'hover:bg-yellow-700',
      text: 'text-yellow-200',
    },
    purple: {
      bg: isSelected ? 'bg-purple-700' : 'bg-purple-600',
      hoverBg: 'hover:bg-purple-700',
      text: 'text-purple-200',
    },
    red: {
      bg: isSelected ? 'bg-red-700' : 'bg-red-600',
      hoverBg: 'hover:bg-red-700',
      text: 'text-red-200',
    },
  };

  const { bg, hoverBg, text } = colorClasses[color] || colorClasses.indigo; // Default to indigo if color is not found

  return (
    <div 
      className={`${bg} p-4 rounded-lg cursor-pointer transition-all ${hoverBg}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <Icon className="text-white mr-2" size={24} />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className={`text-sm ${text}`}>{description}</p>
    </div>
  );
};


const DetailView = ({ content }) => (
  <div className="bg-white p-6 rounded-lg mt-6">
    {content}
  </div>
);

const Onboarding = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cardData: CardProps[] = [
    {
      icon: Code,
      title: "Build",
      description: "Create your first workflow in Novu Studio",
      color: "indigo",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Building Your Workflow</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Open Novu Studio in your browser</li>
            <li>Click on "Create Workflow" to start a new workflow</li>
            <li>Define your workflow trigger (e.g., new user registration)</li>
            <li>Add steps to your workflow (e.g., send welcome email, push notification)</li>
            <li>Configure each step with templates and content</li>
            <li>Set up conditions and filters if needed</li>
            <li>Save and name your workflow</li>
          </ol>
          <p className="mb-4">Tip: Use variables in your templates to personalize content for each user.</p>
          <CodeBlock command="npx novu workflow:create" />
        </>
      )
    },
    {
      icon: Play,
      title: "Run",
      description: "Execute and test your workflow",
      color: "green",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Running and Testing Your Workflow</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Use the Novu CLI to trigger a test event</li>
            <li>Observe the workflow execution in Novu Studio</li>
            <li>Check each step&#39;s status and output</li>
            <li>Verify that notifications are sent correctly</li>
            <li>Review any error messages or warnings</li>
            <li>Make adjustments to your workflow as needed</li>
            <li>Repeat the testing process until satisfied</li>
          </ol>
          <p className="mb-4">Remember: Thorough testing ensures smooth operation in production.</p>
          <CodeBlock command="npx novu workflow:trigger <workflow_id>" />
        </>
      )
    },
    {
      icon: Wrench,
      title: "Configure",
      description: "Set up notification preferences",
      color: "blue",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Configuring Your Novu Setup</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Access the Novu dashboard settings</li>
            <li>Set up your notification channels (email, SMS, push, etc.)</li>
            <li>Configure provider settings for each channel</li>
            <li>Define default templates for common notifications</li>
            <li>Set up user preferences and opt-in/opt-out options</li>
            <li>Configure environment variables and API keys</li>
            <li>Test your configuration with sample notifications</li>
          </ol>
          <p className="mb-4">Pro tip: Use environment-specific configurations for development and production.</p>
          <CodeBlock command="npx novu provider:setup" />
        </>
      )
    },
    {
      icon: Zap,
      title: "Integrate",
      description: "Connect Novu to your apps",
      color: "yellow",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Integrating Novu with Your Application</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Choose the appropriate Novu SDK for your tech stack</li>
            <li>Install the Novu SDK in your project</li>
            <li>Initialize the Novu client with your API key</li>
            <li>Implement trigger points in your application code</li>
            <li>Pass relevant data to Novu when triggering notifications</li>
            <li>Handle subscription and unsubscription logic</li>
            <li>Implement preference management in your user interface</li>
          </ol>
          <p className="mb-4">Note: Ensure you're using the latest version of the Novu SDK for best compatibility.</p>
          <CodeBlock command="npm install @novu/node" />
        </>
      )
    },
    {
      icon: Send,
      title: "Deploy",
      description: "Push workflows to production",
      color: "purple",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Deploying Your Novu Workflows</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Review all workflows and ensure they&#39;re production-ready</li>
            <li>Use the Novu CLI to deploy workflows to production</li>
            <li>Verify that all workflows are correctly deployed</li>
            <li>Update your application with production API keys</li>
            <li>Perform a final test of the entire notification system</li>
            <li>Monitor initial production notifications for any issues</li>
            <li>Set up monitoring and alerting for your Novu workflows</li>
          </ol>
          <p className="mb-4">Best practice: Use a staging environment to test deployments before going live.</p>
          <CodeBlock command="npx novu workflow:deploy <workflow_id>" />
        </>
      )
    },
    {
      icon: FileCheck,
      title: "Monitor",
      description: "Track notification performance",
      color: "red",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-4">Monitoring Your Novu Notifications</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Access the Novu analytics dashboard</li>
            <li>Review delivery rates across different channels</li>
            <li>Analyze notification engagement metrics</li>
            <li>Identify and troubleshoot failed notifications</li>
            <li>Monitor system performance and API usage</li>
            <li>Set up custom alerts for important metrics</li>
            <li>Regularly review and optimize your workflows based on data</li>
          </ol>
          <p className="mb-4">Tip: Use A/B testing to improve your notification content and timing.</p>
          <CodeBlock command="npx novu workflow:stats <workflow_id>" />
        </>
      )
    }
  ];

  return (
    <div className=" text-gray-800 p-8 overflow-y-auto h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
            isSelected={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          />
        ))}
      </div>
      
      {selectedCard !== null && (
        <DetailView content={cardData[selectedCard].content} />
      )}
    </div>
  );
};

export default Onboarding;
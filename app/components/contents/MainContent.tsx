import React from 'react';

const CodeBlock: React.FC<{ command: string }> = ({ command }) => (
  <div className="bg-black p-3 rounded-lg">
    <code className="text-green-400">{command}</code>
  </div>
);

const MainContent: React.FC = () => (
  <div className="bg-white text-gray-800 p-8 overflow-y-auto h-full">
    <h1 className="text-3xl font-bold mb-6">Get started with the Novu Flow</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      <div className="bg-indigo-600 p-4 rounded-lg col-span-2">
        <h2 className="text-xl font-semibold mb-2">Build</h2>
        <p className="text-sm text-indigo-200">Build and test your first workflow in Novu Studio</p>
      </div>
    </div>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">1. Initialize a new project</h3>
        <CodeBlock command="npx novu@latest init --secret-key=your-secret-key" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">2. Run the application server</h3>
        <CodeBlock command="cd my-novu-app && npm run dev" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">3. Run Novu Studio</h3>
        <p className="text-sm text-gray-300 mb-2">
          Novu Studio is used to preview your local workflows, inspect controls and trigger test workflows.
        </p>
        <CodeBlock command="npx novu@latest dev --port 4000" />
      </div>
    </div>
  </div>
);

export default MainContent;
import React from 'react';
import { X, Terminal } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocalStudioModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Open Local Studio</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-lg mb-4 text-gray-700">Follow these steps to open Local Studio:</p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
            <li>Ensure you have Node.js installed on your machine</li>
            <li>Open your terminal or command prompt</li>
          </ol>
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 mb-6">
            <Terminal size={24} className="text-green-400" />
            <code className="text-green-400 text-lg font-mono">npx novu@latest dev --port 4000</code>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            This command will start the Local Studio, allowing you to develop and test your Novu 
            workflows locally.
          </p>
        </div>
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 text-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalStudioModal;
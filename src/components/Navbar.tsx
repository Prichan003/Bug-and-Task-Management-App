import React from 'react';
import { Bug, Bell, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Bug className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BugTracker</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <button className="flex items-center space-x-2 p-2 rounded-full text-gray-500 hover:bg-gray-100">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
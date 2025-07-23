import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-red-500">
          Onlook
        </Link>
        <Link to="/" className="text-sm hover:text-red-500">GitHub</Link>
        <Link to="/" className="text-sm hover:text-red-500">Docs</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link 
          to="/projects"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
        >
          Projects
        </Link>
        <Link 
          to="/login"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

const Preview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div className="relative w-[500px] h-[350px]">
        {/* Browser Frame */}
        <div className="absolute inset-0 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Browser Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded px-2 py-1 text-xs text-gray-600">
                localhost:3000
              </div>
            </div>
            <div className="w-12"></div>
          </div>
          
          {/* Content Area */}
          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="w-20 h-3 bg-red-500 rounded animate-pulse"></div>
              <div className="w-32 h-6 bg-gray-800 rounded animate-pulse"></div>
            </div>
            
            {/* Content Blocks */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-teal-300 rounded animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-24 h-3 bg-gray-400 rounded animate-pulse"></div>
                  <div className="w-full h-2 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-3/4 h-2 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-green-400 rounded animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-20 h-3 bg-gray-400 rounded animate-pulse"></div>
                  <div className="w-full h-2 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-2/3 h-2 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Bottom Button */}
            <div className="pt-4">
              <div className="w-24 h-8 bg-red-500 rounded flex items-center justify-center animate-pulse">
                <div className="w-4 h-2 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code Editor Overlay */}
        <div className="absolute top-4 right-4 w-48 h-32 bg-gray-100 border border-gray-200 rounded shadow-lg opacity-90">
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 text-red-500">⚡</div>
              <div className="text-xs text-gray-600">Component.tsx</div>
            </div>
            <div className="space-y-1 text-xs font-mono">
              <div className="text-purple-600">{'<div'}</div>
              <div className="pl-2 text-blue-600">className="flex"</div>
              <div className="text-purple-600">{'>'}</div>
              <div className="pl-2 text-gray-800">Hello World</div>
              <div className="text-purple-600">{'</div>'}</div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded animate-spin"></div>
      </div>
    </div>
  );
};

const Create = () => {
  return (
    <div className="w-full flex flex-col gap-8 max-w-2xl mx-auto">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
          Code makes your designs real
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Onlook is an AI-powered visual editor for code that helps you prototype, design,
          and ideate directly in your live application.
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="w-full backdrop-blur-md bg-white/30 border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Let's design a...</h3>
          </div>
          <div className="p-4">
            <textarea
              className="w-full h-32 p-3 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Describe what you want to build..."
            />
            <div className="flex justify-between items-center mt-3">
              <button className="text-gray-500 hover:text-gray-700">
                📎 Add image
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="text-sm text-gray-500 hover:text-gray-700 underline">
            Or start with a blank project
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        <div className="order-2 lg:order-1">
          <Preview />
        </div>
        <div className="order-1 lg:order-2">
          <Create />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <TopBar />
      </div>
      
      {/* Hero Section */}
      <div className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-200/20 rounded-full blur-3xl"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
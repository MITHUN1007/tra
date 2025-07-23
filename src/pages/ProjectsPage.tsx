import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Store",
      description: "A modern React e-commerce application with cart functionality",
      updatedAt: "2024-01-15",
      image: "🛍️"
    },
    {
      id: 2,
      name: "Task Manager",
      description: "Collaborative task management tool with real-time updates",
      updatedAt: "2024-01-12",
      image: "📋"
    },
    {
      id: 3,
      name: "Weather App",
      description: "Beautiful weather application with location-based forecasts",
      updatedAt: "2024-01-10",
      image: "🌤️"
    }
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <div className="flex flex-row h-12 px-12 items-center border-b border-gray-200">
        <Link to="/" className="flex-1 flex items-center justify-start">
          <div className="text-2xl font-bold text-red-500">Onlook</div>
        </Link>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            New Project
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex justify-center overflow-hidden w-full h-full">
        <div className="flex flex-row w-full max-w-6xl">
          <div className="w-3/5 h-full p-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-normal text-gray-900">Your Projects</h1>
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{project.image}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {project.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          Updated {project.updatedAt}
                        </p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        Open
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col justify-center items-start p-8 bg-gray-50">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-900">
                Get started with Onlook
              </h2>
              <p className="text-gray-600">
                Create beautiful React applications with our visual editor. 
                Design directly in your live application.
              </p>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Create New Project
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  Import Existing Project
                </button>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Need help getting started?</p>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-red-500 hover:text-red-600">
                    📖 Read the documentation
                  </a>
                  <a href="#" className="block text-sm text-red-500 hover:text-red-600">
                    🎥 Watch tutorial videos
                  </a>
                  <a href="#" className="block text-sm text-red-500 hover:text-red-600">
                    💬 Join our community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
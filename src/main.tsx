import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { TooltipProvider } from './components/ui/tooltip';
import { TopBar } from './components/simplified-top-bar';
import { Create } from './components/simplified-create';
import { Icons } from './components/icons';

// Simple pages for the application
const HomePage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <TopBar />
    <div className="container mx-auto px-4 py-8">
      <Create />
    </div>
  </div>
);

const LoginPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="max-w-md w-full space-y-8 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Sign in to Onlook</h2>
        <p className="text-muted-foreground">Choose your preferred sign-in method</p>
      </div>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-accent">
          <Icons.GitHub className="h-5 w-5" />
          Continue with GitHub
        </button>
        <button className="w-full flex items-center justify-center gap-2 p-3 border rounded-md hover:bg-accent">
          <Icons.Google className="h-5 w-5" />
          Continue with Google
        </button>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <TopBar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Projects</h1>
      <div className="grid gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium">Sample Project</h3>
          <p className="text-sm text-muted-foreground">A sample project to get started</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <TopBar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Project Editor</h1>
      <div className="border rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Project editor interface would go here</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

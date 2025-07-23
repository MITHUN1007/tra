
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page';
import LoginPage from './login/page';
import ProjectsPage from './projects/page';
import ProjectPage from './project/[id]/page';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
}

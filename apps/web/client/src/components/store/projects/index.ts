
import { createContext, useContext } from 'react';
import { ProjectsManager } from './manager';

const projectsManager = new ProjectsManager();
const ProjectsManagerContext = createContext(projectsManager);
export const useProjectsManager = () => useContext(ProjectsManagerContext);

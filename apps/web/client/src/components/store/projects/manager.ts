
import { makeAutoObservable } from 'mobx';
import type { Project } from '@onlook/models';

export class ProjectsManager {
    projects: Project[] = [];
    isFetching = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchProjects() {
        this.isFetching = true;
        try {
            // Mock implementation - replace with actual API call
            this.projects = [];
        } finally {
            this.isFetching = false;
        }
    }
}

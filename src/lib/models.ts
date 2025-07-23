
export enum SignInMethod {
    GITHUB = 'github',
    GOOGLE = 'google',
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

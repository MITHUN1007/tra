
import React from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { Link, useNavigate } from 'react-router-dom';

export function TopBar() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-16 flex items-center justify-between px-6 border-b">
            <div className="flex items-center gap-4">
                <Link to="/">
                    <Icons.OnlookTextLogo />
                </Link>
                <Link to="/projects" className="text-sm hover:text-primary">Projects</Link>
                <a href="https://github.com" className="text-sm hover:text-primary">GitHub</a>
                <a href="https://docs.example.com" className="text-sm hover:text-primary">Docs</a>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => navigate('/projects')}>
                    Projects
                </Button>
                <Button variant="outline" onClick={() => navigate('/login')}>
                    Sign In
                </Button>
            </div>
        </div>
    );
}

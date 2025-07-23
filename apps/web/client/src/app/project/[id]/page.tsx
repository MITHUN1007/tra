
import React from 'react';
import { useParams } from 'react-router-dom';
import { Main } from './_components/main';

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    
    if (!id) {
        return <div>Invalid project ID</div>;
    }
    
    return <Main projectId={id} />;
}

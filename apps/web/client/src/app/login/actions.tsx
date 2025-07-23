
'use server';

import { SignInMethod } from '../../lib/models';

export async function login(provider: SignInMethod) {
    // Simplified login action - in a real app this would handle OAuth
    console.log(`Login with ${provider}`);
    
    // For now, just redirect to home
    if (typeof window !== 'undefined') {
        window.location.href = '/';
    }
}

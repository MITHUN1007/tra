
import React from 'react';
import { login } from './actions';
import { SignInMethod } from '../../../../../src/lib/models';
import { Button } from '../../../../../src/components/ui/button';
import { Icons } from '../../../../../src/components/icons';

export default function LoginPage() {
  const handleGitHubLogin = async () => {
    await login(SignInMethod.GITHUB);
  };

  const handleGoogleLogin = async () => {
    await login(SignInMethod.GOOGLE);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Sign in to Onlook</h2>
          <p className="text-muted-foreground">Choose your preferred sign-in method</p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <Icons.GitHub className="h-5 w-5" />
            Continue with GitHub
          </Button>
          
          <Button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <Icons.Google className="h-5 w-5" />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

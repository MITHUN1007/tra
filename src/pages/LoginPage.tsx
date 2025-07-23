import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dunes = () => {
  return (
    <div className="hidden w-full lg:block md:block m-6 relative overflow-hidden">
      {/* Light mode gradient */}
      <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-100 via-gray-100 to-gray-200 relative">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-teal-200/40 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-red-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200/50 rounded-lg blur-lg animate-pulse"></div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (method: string) => {
    setIsPending(true);
    // Simulate login
    setTimeout(() => {
      setIsPending(false);
      alert(`Logging in with ${method}...`);
    }, 1000);
  };

  return (
    <div className="flex h-screen w-screen bg-white">
      <div className="flex flex-col justify-between w-full h-full max-w-xl p-16 space-y-8 overflow-auto">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-red-500">Onlook</div>
        </div>
        <div className="space-y-8">
          <div className="space-y-2 uppercase rounded-full p-1 px-2 w-auto inline-block text-xs border border-blue-400 text-blue-400">
            <p>ALPHA</p>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight text-gray-900 font-normal">
              Welcome to Onlook
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Onlook is an open-source visual editor for React apps. Design directly in your live product.
            </p>
          </div>
          <div className="space-x-2 flex flex-row">
            <div className="flex flex-col items-center w-full">
              <button
                className="w-full text-sm px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => handleLogin('GitHub')}
                disabled={isPending}
              >
                {isPending ? (
                  <div className="w-4 h-4 mr-2 animate-spin">⚪</div>
                ) : (
                  <div className="w-4 h-4 mr-2">🐙</div>
                )}
                Continue with GitHub
              </button>
            </div>
            <div className="flex flex-col items-center w-full">
              <button
                className="w-full text-sm px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => handleLogin('Google')}
                disabled={isPending}
              >
                {isPending ? (
                  <div className="w-4 h-4 mr-2 animate-spin">⚪</div>
                ) : (
                  <div className="w-4 h-4 mr-2">🔵</div>
                )}
                Continue with Google
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            By continuing, you agree to our{' '}
            <button className="text-gray-400 hover:text-gray-600 underline">
              Privacy Policy
            </button>{' '}
            and{' '}
            <button className="text-gray-400 hover:text-gray-600 underline">
              Terms of Service
            </button>
          </p>
        </div>
        <div className="flex flex-row space-x-1 text-sm text-gray-600">
          <p>Version 1.0.0</p>
        </div>
      </div>
      <Dunes />
    </div>
  );
};

export default LoginPage;
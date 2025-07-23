
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NextIntlClientProvider } from 'next-intl';
import { TRPCReactProvider } from '@/trpc/react';
import { AppRouter } from './router';
import '../styles/globals.css';

// Mock messages for next-intl
const messages = {
  editor: {
    panels: {
      edit: {
        tabs: {
          chat: {
            name: 'Chat'
          }
        }
      }
    }
  }
};

function App() {
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <TRPCReactProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </TRPCReactProvider>
    </NextIntlClientProvider>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

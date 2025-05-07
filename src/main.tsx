
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootLayout from './app/layout';
import HomePage from './app/page';
import NotFound from './app/not-found';

// Simple client-side router to mimic Next.js behavior
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Basic routing implementation to simulate Next.js file-based routing
const path = window.location.pathname;

const renderApp = () => {
  switch (path) {
    case '/':
      return (
        <RootLayout>
          <HomePage />
        </RootLayout>
      );
    default:
      return (
        <RootLayout>
          <NotFound />
        </RootLayout>
      );
  }
};

root.render(
  <React.StrictMode>
    {renderApp()}
  </React.StrictMode>
);

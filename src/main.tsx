
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

// Extract the route from the pathname
const getRoute = () => {
  const routePath = path === '/' ? '/' : path.split('/').filter(Boolean)[0];
  return routePath;
};

const renderApp = () => {
  const route = getRoute();
  
  try {
    switch (route) {
      case '/':
        return (
          <RootLayout>
            <HomePage />
          </RootLayout>
        );
      case 'about-us':
        const AboutUs = require('./app/about-us/page').default;
        return (
          <RootLayout>
            <AboutUs />
          </RootLayout>
        );
      case 'updates':
        const Updates = require('./app/updates/page').default;
        return (
          <RootLayout>
            <Updates />
          </RootLayout>
        );
      case 'events':
        const Events = require('./app/events/page').default;
        return (
          <RootLayout>
            <Events />
          </RootLayout>
        );
      case 'faq':
        const FAQ = require('./app/faq/page').default;
        return (
          <RootLayout>
            <FAQ />
          </RootLayout>
        );
      case 'link-the-data':
        const LinkTheData = require('./app/link-the-data/page').default;
        return (
          <RootLayout>
            <LinkTheData />
          </RootLayout>
        );
      case 'resources':
        const Resources = require('./app/resources/page').default;
        return (
          <RootLayout>
            <Resources />
          </RootLayout>
        );
      case 'contact-us':
        const ContactUs = require('./app/contact-us/page').default;
        return (
          <RootLayout>
            <ContactUs />
          </RootLayout>
        );
      default:
        return (
          <RootLayout>
            <NotFound />
          </RootLayout>
        );
    }
  } catch (error) {
    console.error("Error loading page:", error);
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

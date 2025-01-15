'use client'
// pages/contact.js or wherever you want to use the component
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const ContactPageSkeleton = () => (
  <div className="w-full h-screen bg-teal grid place-items-center p-10 md:p-20 overflow-hidden">
    <div className="w-full h-full bg-colorLight shadow-xl animate-pulse">
      {/* Add skeleton UI elements here */}
      <div className="h-8 bg-gray-200 rounded w-48 mx-auto mt-10"></div>
      <div className="h-12 bg-gray-200 rounded w-72 mx-auto mt-10"></div>
      <div className="h-8 bg-gray-200 rounded w-32 mx-auto mt-10"></div>
    </div>
  </div>
);

// Dynamic import with custom loading component
const DynamicContactPage = dynamic(
  () => import('../../components/contact-page/contactPage').then(mod => mod.ContactPage),
  {
    loading: () => <ContactPageSkeleton />,
    ssr: false // Disable server-side rendering if needed
  }
);

export default function Contact() {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <DynamicContactPage />
    </Suspense>
  );
}

// Bonus: Add error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen grid place-items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-teal text-white rounded"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
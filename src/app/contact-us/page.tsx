
import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We welcome your questions, feedback, and inquiries about the National Association of IDeA Principal Investigators
            and our programs. Please use the form to reach out to us.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            
            <button 
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>info@naipi.org</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Mailing Address</h3>
              <p>
                National Association of IDeA Principal Investigators<br />
                123 Research Way<br />
                Boston, MA 02115
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">Executive Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM Eastern Time</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-blue-800">Twitter</a>
              <a href="#" className="text-primary hover:text-blue-800">LinkedIn</a>
              <a href="#" className="text-primary hover:text-blue-800">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

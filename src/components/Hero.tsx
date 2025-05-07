
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png')",
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="bg-blue-900 inline-block px-4 py-1 mb-4 text-white text-sm">
          JUN 16-18, 2024
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          National IDeA Symposium of Biomedical<br/>
          Research Excellence
        </h1>
        <p className="text-xl mb-8">
          A Virtual Meeting
        </p>
        <p className="text-lg mb-8">
          April 15-16, 2024 | Washington, D.C.
        </p>
        <Button className="bg-secondary hover:bg-red-800 text-white">
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;

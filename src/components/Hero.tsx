
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-section h-[600px] relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png')",
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 py-16">
        <div className="max-w-4xl">
          <div className="bg-secondary inline-block px-4 py-1 mb-4 text-white text-sm font-bold">
            JUN 16-18, 2024
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            National IDeA Symposium of Biomedical<br className="hidden md:block" />
            Research Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            A Virtual Meeting
          </p>
          <p className="text-lg mb-8">
            April 15-16, 2024 | Washington, D.C.
          </p>
          <Button className="bg-secondary hover:bg-red-800 text-white px-8 py-6 text-lg rounded-md font-bold">
            REGISTER NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

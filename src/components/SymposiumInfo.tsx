
import React from 'react';

const SymposiumInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="symposium-container">
        <h2 className="section-title">9th National IDeA Symposium of Biomedical Research Excellence (NISBRE)</h2>
        <p className="text-center mb-4">June 16-18, 2024 | Washington, D.C.</p>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">
            The National IDeA Symposium of Biomedical Research Excellence (NISBRE) is a biennial meeting that brings 
            together students and investigators from IDeA-funded institutions to share their research, network, and 
            stimulate new collaborations. The NISBRE will be hosted in 2024 by NIGMS and will showcase scientific and 
            training accomplishments of IDeA programs, including INBRE, COBRE, and IDeA-CTR across the country.
          </p>
          <p className="mb-4">
            This will be the 9th biennial NISBRE meeting. The 2024 NISBRE will showcase the high-caliber research 
            supported by the IDeA program and the unique training opportunities across IDeA states and territories.
          </p>
          
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">Funded by NIGMS Conference Program and NAIPI Program Office: <a href="#" className="text-primary hover:underline">R13 GM 137896</a></h3>
            <p>
              It's time to leverage our collective IDeA network's 27+ years of experience to ensure that we build the 
              biomedical research enterprise that we all envision.
            </p>
            <p className="mt-2">
              Learn more at <a href="#" className="text-primary hover:underline">www.nigms.nih.gov</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymposiumInfo;


import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="space-y-6">
        <p className="text-lg">
          The National Association of IDeA Principal Investigators (NAIPI) serves as a forum for the leaders of 
          Institutional Development Award (IDeA) programs across the United States. Our mission is to enhance 
          the research capabilities of institutions located in states with historically low levels of NIH funding.
        </p>
        <p className="text-lg">
          NAIPI strives to promote the sustainability and growth of IDeA programs by fostering communication, 
          collaboration, and advocacy among IDeA investigators, program directors, NIH officials, and lawmakers.
        </p>
        <p className="text-lg">
          Through our collective efforts, we aim to strengthen the biomedical research infrastructure, enhance 
          research capacity, and increase competitiveness for NIH funding in IDeA states and territories.
        </p>
      </div>
    </div>
  );
}

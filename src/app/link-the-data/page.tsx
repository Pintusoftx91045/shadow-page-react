
import React from 'react';

export default function LinkTheDataPage() {
  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Link the Data</h1>
      <div className="space-y-6">
        <p className="text-lg">
          The Link the Data initiative is a collaborative effort to connect researchers across IDeA states and territories, 
          facilitating data sharing and research partnerships.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Data Resources</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>IDeA Program Research Database</li>
            <li>Shared Equipment Registry</li>
            <li>Collaboration Opportunities Portal</li>
            <li>Biospecimen Repositories</li>
            <li>Clinical and Translational Data Networks</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">How to Participate</h2>
          <p>
            Researchers from IDeA institutions can contribute to and access these shared resources. 
            To get started, please contact your institutional IDeA program coordinator or reach out to us directly.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Data Sharing Policies</h2>
          <p>
            All data shared through this platform adheres to NIH data sharing policies and institutional 
            review board requirements. Users must agree to data use terms that respect attribution, 
            privacy, and intellectual property considerations.
          </p>
        </div>
      </div>
    </div>
  );
}

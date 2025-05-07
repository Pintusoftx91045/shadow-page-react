
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section text-center">
      <div className="symposium-container">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mb-6">
          <img src="/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png" alt="NAIPI Logo" className="h-10 mb-4 md:mb-0" />
          <img src="/lovable-uploads/4d315de3-ae4c-4205-b1d1-19f1bc773e41.png" alt="LSU Logo" className="h-10" />
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          © National Association of IDeA Principal Investigators, 2024. All rights reserved. The IDeA Program is supported by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health.
        </p>
        
        <p className="text-sm text-gray-600">
          This website was developed with support from the NAIPI Executive Board and the collective efforts of the IDeA community. For questions or comments about the NAIPI website or the IDeA Program, please contact <a href="mailto:info@naipi.org" className="text-primary hover:underline">info@naipi.org</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

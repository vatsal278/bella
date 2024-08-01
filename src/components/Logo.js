import React, { useState } from 'react';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const Logo = ({ show, logoSrc }) => {
  const [isTilted, setIsTilted] = useState(false);

  const handleTilt = () => {
    setIsTilted(!isTilted); // Toggle the isTilted state
  };

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-gray-200 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <img
        src={logoSrc}
        alt="Logo"
        className={`w-64 mt-6 h-auto mb-8 max-w-full max-h-full transform ${isTilted ? 'rotate-12' : ''}`}
        onClick={handleTilt} // Call handleTilt when the logo is clicked
      />
      <SocialMediaButtons handleTilt={handleTilt} />
    </div>
  );
};

export default Logo;

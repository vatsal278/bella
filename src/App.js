// App.js
import React, { useState, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Logo from './components/Logo';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 5000); // Change this value to the desired duration in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-200  h-screen overflow-hidden text-comic-neue ">
      

      <Logo show={showLogo} logoSrc="/bella_1.png" /> {/* Update with your actual logo filename */}

      <style>
        {`
          @media (max-width: 768px) {
            .h-screen {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const SocialMediaButtons = ({ handleTilt }) => {
  const [showContent, setShowContent] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
    handleTilt();
  };

  const handleAudioPlay = () => {
    setAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 relative overflow-y-auto">
      {/* GIF Containers */}
      <div className="gif-container left-gif">
        <iframe src="https://giphy.com/embed/j0MxtY0mrRTV0VqKPn" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="gif-container right-gif">
        <iframe src="https://giphy.com/embed/j0MxtY0mrRTV0VqKPn" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>

      <button onClick={() => { handleShowContent(); handleAudioPlay(); }} className="bg-black text-white font-bold py-4 px-8 rounded mb-4">
    Feed $bella  
    </button>
      {showContent && (
        <>
<div className="flex flex-col bg-gray-300 rounded-3xl items-center w-max p-3 mb-4">
  {/* Moonshot Button */}
  <div className="w-full px-10 mb-2">
    <a href="" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
      <button className="moonshot-button bg-black hover:bg-red-600 text-white font-bold rounded-xl py-2 px-4 w-full">
        Moonshot
      </button>
    </a>
    
  </div>

  {/* Buttons in a Row */}
  <div className="button-row flex flex-row">
    <a href="https://t.me/bellaonsolanaa" target="_blank" rel="noopener noreferrer" एlassName="mx-2 flex-item">
      <button className="bg-black hover:bg-red-600 text-white font-bold rounded-full py-2 px-4">
        Telegram
      </button>
    </a>
    <a href="" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
      <button className="bg-black hover:bg-red-600 text-white font-bold rounded-full py-2 px-4">
        Contract Address
      </button>
    </a>
    <a href="https://twitter.com/tudumfornutz" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
      <button className="bg-black hover:bg-red-600 text-white font-bold rounded-full py-2 px-4">
        Twitter
      </button>
    </a>
  </div>
</div>

          <div className="flex-container">
            <p className="custom-text flex-item bg-orange-100 p-4 rounded-full">
              $bella the cutest cto dog on SOLANA
            </p>
          </div>

          <div className="flex-container">
            <img src="/Bella_wifhat.png" alt="Second Image" className="half-size flex-item" />
            <p className="custom-text flex-item bg-orange-100 p-3 rounded-full">
              $bellawifhat
            </p>
          </div>

          <div className="flex-container">
            <p className="custom-text flex-item bg-orange-100 p-3 rounded-full">
              $bella want meet new holders slurps
            </p>
            <img src="/Bella_slurping.png" alt="First Image" className="half-size flex-item" />
          </div>

          <div className="flex-container">
            <img src="/bella.png" alt="Ball Image" className="half-size flex-item" />
            <p className="custom-text flex-item bg-orange-100 p-3 rounded-full">
              $bella at Jeets
            </p>
          </div>
        </>
      )}
      {audioPlaying && (
        <audio src="/dog-whimper-sad.wav" autoPlay onEnded={handleAudioPause} />
      )}
    </div>
  );
};

export default SocialMediaButtons;


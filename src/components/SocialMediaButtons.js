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
      <button onClick={() => { handleShowContent(); handleAudioPlay(); }} className="bg-black text-white font-bold py-4 px-8 rounded mb-4">
        Tickle My Balls
      </button>
      {showContent && (
        <>
          <div className="flex-container">
            <p className="custom-text flex-item" style={{ fontSize: '3.5em' }}>
              $bella wants you to follow her on telegram and twitter and if you like invest on her cuteness on the contact address
            </p>
          </div>
          <div className="flex-container">
            <a href="https://t.me/TADUMPORTAL" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
              <button className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Telegram</button>
            </a>
            <a href="https://twitter.com/tudumfornutz" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
              <button className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Twitter</button>
            </a>
            <a href="https://t.me/TADUMPORTAL" target="_blank" rel="noopener noreferrer" className="mx-2 flex-item">
              <button className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Contract Address</button>
            </a>
          </div>
          <div className="flex-container">
            <p className="custom-text flex-item" style={{ fontSize: '3.5em' }}>
              $bella 
            </p>
            <img src="/bella.png" alt="Ball Image" className="half-size flex-item" />
          </div>
          <div className="flex-container">
            <img src="/Bella_wifhat.png" alt="Second Image" className="half-size flex-item" />
            <p className="custom-text flex-item" style={{ fontSize: '3.5em' }}>
              $bellawifhat
            </p>
          </div>
          <div className="flex-container">
            <p className="custom-text flex-item" style={{ fontSize: '3.5em' }}>
              $bella wants to meet new holders slurps
            </p>
            <img src="/Bella_slurping.png" alt="First Image" className="half-size flex-item" />
          </div>
        </>
      )}
      {audioPlaying && (
        <audio src="/audio.mp3" autoPlay onEnded={handleAudioPause} />
      )}
    </div>
  );
};

export default SocialMediaButtons;
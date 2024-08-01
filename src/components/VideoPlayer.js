// VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ show }) => {
  return (
    <div className={`flex justify-center items-center h-screen bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <video
        src="/video.mp4" // Update with the correct path to your video file
        autoPlay
        muted
        playsInline
        className="max-w-full max-h-full"
        controls={false}
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} // Zoom in on smaller devices
      />
    </div>
  );
};

export default VideoPlayer;

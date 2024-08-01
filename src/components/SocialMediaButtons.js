import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const SocialMediaButtons = ({ handleTilt }) => {
  const [showImage, setShowImage] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
    handleTilt();
  };

  const handleShowParagraph = () => {
    setShowParagraph(true);
  };

  const handleAudioPlay = () => {
    setAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 relative overflow-y-auto">
      <button onClick={() => { handleShowImage(); handleShowParagraph(); handleAudioPlay(); }} className="bg-black text-white font-bold py-4 px-8 rounded">
        Tickle My Balls
      </button>
      {showImage && (
        <div className="w-100 h-100 relative">
          <img src="/bella.png" alt="Ball Image" className="half-size" />
        </div>
      )}
      {showImage && (
        <div className="">
          <a href="https://t.me/TADUMPORTAL" target="_blank" rel="noopener noreferrer" className="mx-2">
            <button className="text-black text-lg font-bold py-2 px-4 rounded">Telegram</button>
          </a>
          <a href="https://twitter.com/tudumfornutz" target="_blank" rel="noopener noreferrer" className="mx-2">
            <button className="text-black text-lg font-bold py-2 px-4 rounded">Twitter</button>
          </a>
          <div className='flex flex-col'>
            <a href="https://t.me/TADUMPORTAL" target="_blank" rel="noopener noreferrer" className="mx-2">
              <button className="bg-black hover:bg-red-600 text-white font-bold py-2  px-4 rounded mt-4">Contract Address</button>
            </a>
          </div>
        </div>
      )}
      {showParagraph && (
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-6xl mt-3">
          <p className="text-red-600 text-center text-lg font-bold">
            Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!! Lost onchain in this Woke Culture!! <span style={{ color: 'green', fontSize: '1.2em' }}>Pepe</span> the meme master, <span style={{ color: 'blue', fontSize: '1.2em' }}>Brett</span> the coding queen, and <span style={{ color: 'yellow', fontSize: '1.2em' }}>Andy</span> the awesome gamer were lost. But guess what saved them? Their Nutz power! <span style={{ color: 'green', fontSize: '1.2em' }}>Pepe</span> powered its community with Nutz, <span style={{ color: 'blue', fontSize: '1.2em' }}>Brett</span>'s community rocked Nutflix, and <span style={{ color: 'yellow', fontSize: '1.2em' }}>Andy</span> welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM. This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. <span style={{ color: 'green', fontSize: '1.2em' }}>Pepe</span>, <span style={{ color: 'blue', fontSize: '1.2em' }}>Brett</span>, and <span style={{ color: 'yellow', fontSize: '1.2em' }}>Andy</span> became super legends - Harnessing TUDUM But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM!
          </p>
          <p className="text-red-600 text-center text-xl font-bold mt-4">
            <br></br>Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix
          </p>
        </div>
      )}
      {audioPlaying && (
        <audio src="/audio.mp3" autoPlay onEnded={handleAudioPause} />
      )}
    </div>
  );
};

export default SocialMediaButtons;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [isGlowing, setIsGlowing] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHint(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLumosClick = () => {
    setIsGlowing(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-white">
        <h1 className={`text-6xl font-bold cursor-pointer ${isGlowing ? 'glow' : ''}`} onClick={handleLumosClick}>
          LUMOS
        </h1>
        <h2 className={`text-center transition-opacity duration-1000 delay-500 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
          Hint: Press Lumos to begin
        </h2>
      </div>
    </div>
  );
};

export default Welcome;

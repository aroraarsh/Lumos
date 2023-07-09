import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [isGlowing, setIsGlowing] = useState(false);

  const handleLumosClick = () => {
    setIsGlowing(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-white">
        <h1
          className={`text-6xl font-bold cursor-pointer ${isGlowing ? 'glow' : ''}`}
          onClick={handleLumosClick}
        >
          LUMOS
        </h1>
        <h2 className='text-center'>Click Lumos to Begin...</h2>
      </div>
    </div>
  );
};

export default Welcome;

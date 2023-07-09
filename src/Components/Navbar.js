import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1
          className="text-white text-lg font-bold uppercase ml-4 cursor-pointer"
          onClick={handleNavigate}
        >
          Lumos
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;

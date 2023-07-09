import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Home.css'; // Import the CSS file with the animation styles

const Home = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bars = barRef.current.querySelectorAll('.bar');

    const animateBars = () => {
      bars.forEach((bar, index) => {
        const delay = index * 0.1;
        bar.style.animationDelay = `${delay}s`;
        bar.style.animation = 'loading 1s infinite alternate';
      });
    };

    animateBars();

    return () => {
      bars.forEach((bar) => {
        bar.style.animation = null;
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
        <div className="max-w-3xl text-center">
          <div className="loading" ref={barRef}>
            {Array.from({ length: 55 }).map((_, index) => (
              <div key={index} className="bar">
                <div className="delta" />
              </div>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-6">Welcome to Lumos</h1>
          <p className="text-lg mb-8">
            Lumos is an innovative data visualization app designed for stock market enthusiasts.
            Explore stock market trends, track live market movements, and make informed investment decisions.
          </p>
          <div className="space-x-4">
            <button className="bg-white hover:bg-black hover:text-white hover:border-white border-2 border-white text-black font-bold py-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-black hover:bg-white bg-opacity-50 hover:text-black hover:border-white border-2 border-white text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

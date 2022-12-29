import React from 'react';
import rocketImage from '../assets/img/rocket.png';

function Error404() {
  return (
    <div className="h-screen">
      <div className="h-full flex bg-cover bg-[url('/src/assets/img/error-bg.jpg')]">
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={rocketImage}
            className="w-1/6 h-1/6 animate-[bounce_4s_ease-in-out_infinite]"
            alt="header_image"
          />
          <h1 className="text-white font-bold text-4xl font-sans">
            You are alone here
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Error404;

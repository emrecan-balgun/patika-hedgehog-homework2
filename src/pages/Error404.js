import React from 'react';

function Error404() {
  return (
    <div className='h-screen'>
      <div className="h-full flex bg-cover bg-[url('/src/assets/img/error-bg.jpg')]">
        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='text-white font-bold text-6xl animate-[pulse_4s_ease-in-out_infinite] mb-2 bg-gray-400 rounded-lg py-2 px-3 md:bg-transparent'>
            404
          </h1>
          <h1 className='text-white font-bold text-4xl font-sans bg-gray-400 rounded-lg py-2 px-3 md:bg-transparent opacity-90'>
            You are alone here..
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Error404;
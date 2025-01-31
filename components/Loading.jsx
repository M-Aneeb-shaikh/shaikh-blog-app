import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex items-center gap-2'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
        <p className='text-lg font-semibold'>Loading Articles...</p>
      </div>
    </div>
  );
};

export default Loading;

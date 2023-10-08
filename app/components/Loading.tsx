import React from 'react'

const Loading = () => {
   return (
      <div className='absolute top-0 left-0 w-full h-screen bg-black flex justify-center items-center opacity-50'>
         <span className="loading loading-infinity loading-lg text-secondary" style={{ scale: 5 }}></span>
      </div>
   )
}

export default Loading
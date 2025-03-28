

import React from 'react'

function VolumeKnob() {
  return (
    <div className="flex items-center justify-center w-[14em] h-[14em] bg-white drop-shadow-xl rounded-full relative">
        <h1 className='text-[17px]  tracking-[0.2em] font-light'>Volume</h1>
        <div className="w-5 h-5 bg-Vynil rounded-full drop-shadow-sm absolute top-[10%]"></div>
    </div>
  )
}

export default VolumeKnob
import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-[60vh] w-full bg-[url('/src/assets/AIConclave.png')] flex flex-col justify-center items-center gap-3">
        <div className='text-center'>

        <h6 className='text-white text-xl m-0 p-0'>Virudhunagar District Administration</h6>
        <h6 className='text-white text-xl m-0 p-0'>and</h6>
        <h6 className='text-white text-xl'>Mepco Schlenk Engineering College presents</h6>
        </div>
        <h1 className='text-yellow-400 uppercase text-8xl'>AI Conclave</h1>

    </div>
  )
}

export default Hero

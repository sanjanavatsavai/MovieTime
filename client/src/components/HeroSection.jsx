import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection= () => {

     const navigate = useNavigate()

  return (

  <div className='relative h-screen'>


  <div className='absolute inset-0 bg-[url("/Users/Sanjana/Downloads/Github_Projects/MovieTime/client/src/assets/backgroundImage.jpeg")] bg-cover bg-center'>
    <div className='absolute inset-0 bg-black/65'></div> 
  </div>

  
  <div className='relative z-10 flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-full'>

    <img src={assets.marvelLogo} alt='' className='max-h-11 lg:h-11 mt-20'/>

    <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110 text-white'>
      Avengers: <br /> Infinity War
    </h1>

    <div className='flex items-center gap-4 text-gray-300'>
      <span>Action | Adventure | Sci-Fi</span>
      <div className='flex items-center gap-1'>
        <CalendarIcon className='w-4.5 h-4.5'/> 2018
      </div>
      <div className='flex items-center gap-1'>
        <ClockIcon className='w-4.5 h-4.5' /> 2h 29m
      </div>
    </div>

    <p className='max-w-md text-gray-300'>
      In a universe on the brink of collapse, the Avengers unite with allies across galaxies to stop Thanos, whose quest for the Infinity Stones threatens to wipe out half of the planet.
    </p>

    <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull
      transition rounded-full font-medium cursor-pointer'>
      Explore Movies
      <ArrowRight className='w-5 h-5'/>
    </button>

  </div>
</div>

   
  )
}

export default HeroSection

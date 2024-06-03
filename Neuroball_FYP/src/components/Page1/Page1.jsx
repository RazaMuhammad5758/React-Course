import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
import { GiThreeBurningBalls } from "react-icons/gi";
import { GiCrackedBallDunk } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import Upload_video from '../Upload video/Upload_video';

const Page1 = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='bg-white w-1/3 h-60 flex justify-center mt-20'> 
            <div className='m-auto text-6xl text-cyan-500 cursor-pointer justify-center'><FaPlayCircle /></div> 
        </div>
        <div className='flex justify-center mt-4 mb-5'>
            <NavLink to="/upload"> <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Upload</button></NavLink>
            <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Start</button>
            <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Track</button>
            <button className='mx-2 bg-cyan-500 text-white py-1 px-5 rounded-md cursor-pointer'>Show Metrics</button>
        </div>

        <div className='bg-white w-1/3 h-60 flex justify-center mb-5'> 
            <div className=' m-auto flex justify-center w-full gap-5'>
                <div className='flex bg-slate-300 flex-col h-40 w-1/4 justify-center align-middle items-center rounded-md'> 
                    <div className='text-pink-500 text-5xl'><GiThunderball /></div>
                    <p>Speed</p>
                    <p>145</p>
                </div>
                <div className='flex bg-slate-300 flex-col h-40 w-1/4 justify-center align-middle items-center rounded-md'> 
                    <div className='text-pink-500 text-5xl'><GiCrackedBallDunk /></div>
                    <p>SWING</p>
                    <p>142</p>
                </div>
                <div className='flex bg-slate-300 flex-col h-40 w-1/4 justify-center align-middle items-center rounded-md'> 
                <div className='text-pink-500 text-5xl'><GiThreeBurningBalls /></div>
                    <p>SPIN</p>
                    <p>142</p>
                </div>
            </div> 
        </div> 
    
</div>

    
  )
}

export default Page1

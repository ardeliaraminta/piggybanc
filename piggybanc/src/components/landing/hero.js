import React from 'react'
import mascot from '../../assets/mascot.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Hero() {
  return (
    <>


{/* main title
    <div className='flex items-start flex-col ml-20 mt-20'>
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Your Personalized </a>
    <img className="w-[200px] h-[250px] md:w-[600px] md:h-[697]" src={mascot}/> 
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Finance Tracking</a>
    <a className='font-Inter text-white text-[22px] md:text-[75px] font-[700]'>Application </a>

  </div> */}
<div class="flex items-start ml-20 mt-20">
    <div class="flex items-center justify-between h-30">
        <div class="flex flex-col px-4">
            <a class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Your Personalized</a>
            <a class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Finance Tracking</a>
            <a class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Application </a>
            <p class="mt-10 break-normal tracking-normal font-Inter text-white text-[10px] md:text-[24px] font-[700]">PiggyBanc is an online finance tracking application to help you manage budgets in the best way possible. Stay on top of your expenses, understand your habbits, and make changes accordingly with PiggyBanc.Never lose track of money. Sign up now! </p>
            <Link to="/login"><div className='mt-10 hover:scale-20 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 py-1 pb-3 '><Button variant="contained" classname="h-12 px-6 m-2 text-[13px] sm:text-[20px]" size="large" sx={{paddingX:3, fontFamily:'Inter', fontWeight:600, background: 'linear-gradient(45deg,  #748AFF 20%, #FFFAFA 90%)'}}>Get Started</Button></div></Link>
      </div>
    </div>

      
    
        <img class="w-[200px] h-[230px] md:w-[680px] md:h-[697px]" src={mascot}></img>
    </div>








</>
  )
}

import React from 'react'
import mascot from '../../assets/mascot.png';

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
<div class="flex items-start min-h-screen ml-20 mt-20">
    <div class="flex items-center justify-between h-30">
        <div class="flex flex-col px-4">
            <span class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Your Personalized</span>
            <span class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Finance Tracking</span>
            <span class="font-Inter text-white text-[22px] md:text-[75px] font-[700]">Application </span>
            <p class="font-Inter text-white text-[10px] md:text-[24px] font-[700]">PiggyBanc is an online finance tracking application to help you manage budgets in the best way possible. Stay on top of your expenses, understand your habbits, and make changes accordingly with PiggyBanc.Never lose track of money. Sign up now! </p>
        </div>
        <img class=" w-[200px] h-[250px] md:w-[680px] md:h-[697px]" src={mascot}></img>
    </div>
</div>









</>
  )
}

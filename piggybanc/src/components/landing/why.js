import React from 'react'
import personalized from '../../assets/personalized.png';
import ocr from '../../assets/ocr.png';
import rocket from '../../assets/rocket.png';


export default function Why() {
  return (
    <div name='support' className='w-full mt-24'>
    <div className='w-full h-[800px] bg-gray-900/90 absolute'>
    </div>
    
    <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
            <h3 className='font-Inter text-white text-[20px] md:text-[75px] font-[700] text-5xl font-bold text-5xl font-bold py-6 text-center'>Why PiggyBanc?</h3>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-10 gap-y-16 pt-12 sm:pt-10 text-white'>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={personalized}></img>
                    <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>Personalized according to your needs</div>
                </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={ocr}></img>
                    <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>Automated Data Entry</div>
                </div>
            </div>
            <div className='bg-gray-700 rounded-2xl shadow-2xl'>
                <div className='p-8 text-center'>
                    <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[259px] md:h-[289px]" src={rocket}></img>
                    <div className='pl-2 font-bold font-Inter text-white text-[20px] md:text-[24px] font-[700]'>Future planning</div>
                </div>
                </div>
            </div>
        </div>
</div>
  )
}
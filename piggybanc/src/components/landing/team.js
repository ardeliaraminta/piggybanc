import React from 'react'
import linkedin from '../../assets/linkedin.png';
// to do list : make it mobile friendly 

export default function Team() {
  return (
    <div name='about' className='w-full my-32'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Check us out</h2>
            <p className='text-3xl py-6 text-gray-500'></p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
            <div className='border py-8 rounded-l shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[160px] h-[200px] md:w-[176px] md:h-[198px]" src={linkedin}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>Monique</p>
            </div>
            <div  className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>Github</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img class="pt-2 mt-4 hero container max-w-screen-lg mx-auto pb-10 flex w-[200px] h-[230px] md:w-[176px] md:h-[198px]" src={linkedin}></img>
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>Ardelia</p>
            </div>
        </div>
    </div>
</div>
)
  };
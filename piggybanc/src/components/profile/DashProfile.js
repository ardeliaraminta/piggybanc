import React from 'react'
import './DashProfile.css'
import ProfileTab from './ProfileTab'


const DashProfile = () => {

    const DashProfile = () => {
        function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        value.entry = data.getAll("entry");
        console.log({ value });
      }
    
      const form = document.querySelector("form");
      form.addEventListener("submit", handleSubmit);
    }

  return (
      <>
    <div className='dashprof'>
          <h1 className='text-white'> Profile </h1>
          
        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>



                    
                </p>

            

      
          


          <ProfileTab/>
      </div>
      </div>
      </div>
      </>


  )
}

export default DashProfile

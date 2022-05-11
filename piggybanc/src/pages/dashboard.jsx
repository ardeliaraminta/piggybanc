import { Button } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/dashboard/sidebar'
import Navbar from '../components/dashboard/navbar'

export default function Dashboard() {
    const navigate = useNavigate();
    const SignUserOut = () =>{
        signOut(auth).then(()=>{
            // localStorage.clear();
            // window.location.href="/"
            navigate("/")
        })
    }
  return (
    <div className="bg-[#08143D] h-[100%] w-[100%]">
    <div className='relative z-20 font-Inter text-white'>
      </div>

    <div className='h-[4000px] border-1'>

    </div>

    
    
     
  
  </div>
   
  )
}

import { Button } from '@mui/material'
import {React, useState} from 'react'
import control from "../../src/assets/control.png"
import logo from "../../src/assets/piggylogo.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [open, setOpen] = useState(true)
  


    const navigate = useNavigate()
    const SignUserOut = () =>{
        signOut(auth).then(()=>{
            // localStorage.clear();
            // window.location.href="/"
            navigate("/")
        })
    }
  return (
      <>
      {/* interactive sidebar */}
      <div className = "flex">
      <div className={` ${open ? "w-72" : "w-20 "} duration-300 h-screen bg-[#0C1228] relative`}
      > 
      <img src={control} className = {`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#0C1228] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div>
          <img src ={logo} className = {`cursor-pointer duration-400`} />
          <h1 classname = {`text-white origin-left font-medium text-xl duration-300`}> Piggybanc </h1>
        </div>
      
      </div>
      <div classname = "p-7 text-2xl font-semibold">
      </div>



        
      </div>
      <div className="bg-[#08143D] h-[100%] w-[100%]">

      <div className='relative z-20 font-Inter text-white'>
    
      </div>

      <div className='h-[4000px] border-1'>

      </div>

      
      
       
    
    </div>
      
        <div>Dashboard</div>
        <Button variant="contained" onClick={SignUserOut}>Sign out</Button>
      </>
   
  )
}

import { Button } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import Maindash from '../components/dashboard/maindash'
import Sidebar from '../components/dashboard/Sidebar'
import Right from '../components/dashboard/Right'
import './dashboard.css'

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
      <>
       <div className="App">
      <div className='AppGlass'>
        <Sidebar/> 
        <Maindash/>
        <Right/>
        <div></div>
      </div> 
    </div>
        <div>Dashboard</div>
        <Button variant="contained" onClick={SignUserOut}>Sign out</Button>
      </>
   
  )
}

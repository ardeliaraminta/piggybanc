import { Button } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import SidebarProfile from '../components/profile/SidebarProfile'
import DashProfile from '../components/profile/DashProfile'


export default function Profile() {
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
        <SidebarProfile/>
        <DashProfile/>
        
      </div> 
    </div>
        <div>Dashboard</div>
        <Button variant="contained" onClick={SignUserOut}>Sign out</Button>
      </>
   
  )
}
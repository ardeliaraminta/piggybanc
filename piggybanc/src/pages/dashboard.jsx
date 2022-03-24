import { Button } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

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
        <div>Dashboard</div>
        <Button variant="contained" onClick={SignUserOut}>Sign out</Button>
      </>
   
  )
}

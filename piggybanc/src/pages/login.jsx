import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function Login() {
    const navigate = useNavigate();
    const SignInWithGoogle = () =>{
        signInWithPopup(auth,provider).then(()=> {
            // localStorage.setItem("isAuth", true);
            navigate("/dashboard")
        })
    }
  return (
    <>
      <div className='flex flex-col items-center p-10'>
        <p className='m-10'>Please login with your google account to continue.</p>
        <Button variant="contained" onClick={SignInWithGoogle}>Google</Button>
      </div>

      </>
  )
}


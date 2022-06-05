import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import Maindash from '../components/dashboard/maindash'
import Sidebar from '../components/dashboard/Sidebar'
import Right from '../components/dashboard/Right'
import {useCookies} from 'react-cookie'
import axios from 'axios'
import './dashboard.css'

export default function Dashboard() {
    const [user, setUser] = useState("") ;
    const [income, setIncome] = useState("") ;
    const [expenses, setExpenses] = useState("") ;
    const [balance, setBalance] = useState("") ;
    const [cookie, setCookie] = useCookies("email");
    useEffect(async () => {
      const getUser = async() => {
        try{
          const res = await axios.get(`/user/${cookie.email}`);
          console.log(res);
          setBalance(res.data.balance)
        }catch(err){
          console.log(err);
        }
      }
      const getTx = async() => {
        try{
          const res = await axios.get(`https://piggybanc-backend.herokuapp.com/tx?email=monique@gmail.com&type=Expense`, {headers:{"Authorization": cookie.token}});
          console.log(res);
          
        }catch(err){
          console.log(err);
        }
      }
      await getUser();
      await getTx();
    }, [])
    
    
  return (
      <>
       <div className="App">
      <div className='AppGlass'>
        <Sidebar/> 
        <Maindash user={cookie.name} balance={balance} expenses={expenses} income={income}/>
        <Right/>
        <div></div>
      </div> 
    </div>
      </>
   
  )
}

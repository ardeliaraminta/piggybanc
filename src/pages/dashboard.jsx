import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import Maindash from '../components/dashboard/maindash'
import Sidebar from '../components/dashboard/Sidebar'
import Right from '../components/dashboard/Right'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import './dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState([]);
  const [cookie, setCookie] = useCookies("email");
  const money = [];

  useEffect(async () => {
    const getUser = async () => {
      try {
        const res = await axios.get(`https://piggy-be.herokuapp.com/user/${cookie.email}`);
        console.log(res);
        money.push(res.data.balance)

      } catch (err) {
        console.log(err);
      }
    }
    const getEx = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://piggy-be.herokuapp.com/tx",
          params: {
            email: cookie.email,
            type: "Expense"
          },
          headers: {
            Authorization: cookie.token
          }
        });

        let expense = 0;

        res.data.forEach(entry => {
          expense += entry.amount
        })

        money.push(expense)

      } catch (err) {
        console.log(err);
      }
    }
    const getIn = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "/tx",
          params: {
            email: cookie.email,
            type: "Income"
          },
          headers: {
            Authorization: cookie.token
          }
        });
        let income = 0;
        for (let i = 0; i < res.data.length; i++) {
          income += res.data[i].amount;
        }
        money.push(income)

        console.log(res)
      } catch (err) {
        console.log(err);
      }
    }

    await getIn();
    await getUser();
    await getEx();
    setBalance(money);
  }, [])


  return (
    <>
      <div className="App">
        <div className='AppGlass'>
          <Sidebar />
          <Maindash user={cookie.name} balance={balance} />
          <Right />
          <div></div>
        </div>
      </div>
    </>

  )
}

import React, { useState } from 'react'
import { UpdatesData } from '../data/data';
import './Updates.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
const Updates = () => {
  const [cookie, setCookie] = useCookies("email");
  const [data, setData] = useState([])
  const info = [];

  useEffect(async () => {
    const getTransactions = async () => {
      try {
        const res = await axios.get('/tx', {
          headers: {
            Authorization: cookie.token
          },
          params: {
            email: cookie.email
          }
        })
        res.data.forEach(entry => {
          info.push({
            category: entry.category,
            details: entry.details,
            timestamps: entry.updatedAt
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
    await getTransactions();
    setData(info)
  }, [])



  


  return (
    <div className="Updates">
      {data.map((tx) => {
        return (
          <div className="Updates">
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{tx.category}</span>
                <span> {tx.details}</span>
              </div>
                <span>{tx.timestamps}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
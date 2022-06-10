import React, { useState } from 'react'
import { UpdatesData } from '../data/data';
import './Updates.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
const Updates = () => {
  const [cookie, setCookie] = useCookies("email");
  const [data, setData] = useState([])


  useEffect(async () => {
    const getUpdate = async() => {
      try{
        const res = await axios.get(`/tx`, {headers:{"Authorization": cookie.token}, params:{"email": cookie.email, "type":"Expense"}});
        console.log(res.data);
        res.data.map((tx)=>{
          setData(data.push(tx))
        })
      }catch(err){
        console.log(err);
      }
      
    }
    await getUpdate();
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
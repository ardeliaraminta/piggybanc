import React from 'react'
import { UpdatesData } from '../data/data';
import './Updates.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
const Updates = () => {
  const [cookie, setCookie] = useCookies("email");
  useEffect(async () => {
    const getUpdate = async() => {
      try{
        const res = await axios.get(`/tx`, {headers:{"Authorization": cookie.token}, params:{"email": cookie.email, "type":"Expense"}});
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
      
    }
    await getUpdate();
  }, [])

  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
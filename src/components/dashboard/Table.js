import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import {useCookies} from 'react-cookie';

const Table = () => {
  const [details, setDetails] = useState("") ;
  const [category, setCategory] = useState("") ;
  const [amount, setAmount] = useState("") ;
  const [type, setType] = useCookies("");
  const [cookies, setCookies] = useCookies("email");
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(`/tx`, {
        email: cookies.email,
        details: details,
        category: category,
        amount: amount,
        type: type,
      }, {
        headers: {"Authorization": cookies.token}
      })
      console.log(res)
      setMessage("Successfully Added.")
    }

    catch (err) {
      console.log(err)
    }
  };
  return (
    <>
    <div className='dashprof'>
          <h1 className='text-white'> Add New Entry</h1>
          
        <div className='grid md:grid-cols-3 gap-3 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>
                <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
              <MDBInput
                label="Details"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
               <MDBInput
               label="Category"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                />
                 <MDBInput
                label="Amount"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
               <MDBInput
               label="Type"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                />
               <Button
    style={{
        borderRadius: 30,
        backgroundColor: "black",
        padding: "12px 18px",
        fontSize: "12px",
    }}
    variant="contained"
    >
    Add
</Button>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                </p>

            

      
          
      </div>
      </div>
      </div>
      </>


  )
}


export default Table

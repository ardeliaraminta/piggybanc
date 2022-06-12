import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { async } from '@firebase/util';

const Table = () => {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [cookies, setCookies] = useCookies("email");
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("https://piggy-be.herokuapp.com/tx", {
        email: cookies.email,
        details: details,
        category: category,
        amount: Number(amount),
        type: type,
      }, {
        headers: { "Authorization": cookies.token }
      })
      console.log(res)
      setMessage("Successfully Added.")
    }

    catch (err) {
      console.log(err)
    }
  };

  useEffect(async () => {
    const getTransactions = async () => {
      try {
        const res = await axios.get('https://piggy-be.herokuapp.com/tx', {
          headers: {
            Authorization: cookies.token
          },
          params: {
            email: cookies.email
          }
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    await getTransactions();
  }, [])

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
                        onChange={(e) => setDetails(e.currentTarget.value)}
                        group
                        type="test"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Category"
                        onChange={(e) => setCategory(e.currentTarget.value)}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Amount"
                        onChange={(e) => setAmount(e.currentTarget.value)}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type"
                        onChange={(e) => setType(e.currentTarget.value)}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <Button
                        onClick={async (e) => handleSubmit(e)}
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

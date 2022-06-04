import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from '@mui/material/Button';

const Table = () => {
  return (
    <>
    <div className='dashprof'>
          <h1 className='text-white'> Add New Entry</h1>
          
        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>
                <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
              <MDBInput
                label="+ Add Income"
                icon="lock"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
               <MDBInput
               label="+ Add expenses"
                icon="lock"
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

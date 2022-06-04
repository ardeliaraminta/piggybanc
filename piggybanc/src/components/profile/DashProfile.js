import React from 'react'
import './DashProfile.css'
import ProfileTab from './ProfileTab'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from '@mui/material/Button';



const DashProfile = () => {

    const DashProfile = () => {
        function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        value.entry = data.getAll("success");
        console.log({ value });
      }
    
      const form = document.querySelector("form");
      form.addEventListener("submit", handleSubmit);
    }

  return (
      <>
    <div className='dashprof'>
          <h1 className='text-white'> Edit Profile </h1>
          
        <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
                <p className='text-6xl font-bold text-indigo-600'></p>
                <p className='text-gray-400 mt-2'>
                <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Name</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Date of Birth"
                icon="lock"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
               <MDBInput
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
        fontSize: "14px",
    }}
    variant="contained"
    >
    Submit
</Button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                </p>

            

      
          


          <ProfileTab/>
      </div>
      </div>
      </div>
      </>


  )
}

export default DashProfile

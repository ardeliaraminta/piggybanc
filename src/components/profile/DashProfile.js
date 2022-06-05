import React, { useEffect, useState } from 'react'
import './DashProfile.css'
import ProfileTab from './ProfileTab'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Button from '@mui/material/Button';
import axios from "axios";
import { useCookies } from 'react-cookie';


const DashProfile = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [message, setMessage] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(`/user/update`, {
        email: cookies.email,
        name: name,
        dob: dob,
        gender: gender,
        address: address,
        occupation: occupation,
      }, {
        headers: {"Authorization": cookies.token}
      })
      console.log(res)
      setMessage("Successfully updated.")
      setCookie("name", name, {path: "/"})
    }

    catch (err) {
      console.log(err)
    }
  };

  useEffect(async () => {
    const getUser = async() => {
      try{
        const res = await axios.get(`/user/${cookies.email}`);
        setName(res.data.name)
        setAddress(res.data.address)
        setDOB(res.data.dob)
        setGender(res.data.gender)
        setOccupation(res.data.occupation)
        console.log(res);
      }catch(err){
        console.log(err);
      }
      
    }
    await getUser();
  }, [])

return (
  <>
    <div className='dashprof'>
      <h1 className='text-white'>  </h1>

      <div className='grid md:grid-cols-3 gap-6 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl' >
          <p className='text-6xl font-bold text-indigo-600'></p>
          <p className='text-gray-400 mt-2'>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Edit Profile</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Email"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={cookies.email}
                      />
                      <MDBInput
                        label="Name"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        
                      />
                      <MDBInput
                        label="DoB"
                        icon="exclamation-triangle"
                        group
                        type="date"
                        validate
                        error="wrong"
                        success="right"
                        value={dob}
                        onChange={e => setDOB(e.currentTarget.value)}
                      />
                      <MDBInput
                        label="Address"
                        icon="lock"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={address}
                        onChange={e => setAddress(e.currentTarget.value)}
                      />
                      <MDBInput
                        label="Occupation"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={occupation}
                        onChange={e => setOccupation(e.currentTarget.value)}
                      />
                      <MDBInput
                        label="Gender"
                        icon="lock"
                        group
                        type="text"
                        validate
                        error="wrong"
                        value={gender}
                        success="right"
                        onChange={e => setGender(e.currentTarget.value)}
                      />
                      <Button
                        
                        error="wrong"
                        success="right"
                      />
                      <Button
                      onClick={async (e) => handleSubmit(e)}
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
                      <p>{message && message}</p>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </p>







          <ProfileTab />
        </div>
      </div>
    </div>
  </>


)
}

export default DashProfile

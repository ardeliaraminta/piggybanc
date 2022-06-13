import { Button } from '@mui/material'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import './profile.css'
import SidebarProfile from '../components/profile/SidebarProfile'
import DashProfile from '../components/profile/DashProfile'
import ImageUploading from 'react-images-uploading';
import Sidebar from '../components/dashboard/Sidebar'
import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie';
export default function Profile() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const maxNumber = 1;
    const [images, setImages] = useState([]);
    const [final, setFinal]= useState();
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [cookies, setCookie] = useCookies(['token']);

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
      setFinal(imageList);
      console.log(imageList[0].data_url)
    };
    const getUpdate = async () => {
      try {
        console.log(name,dob,gender)
        const res = await axios.put(`https://piggy-be.herokuapp.com/user/update`, {
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

    }

    const onSubmit = async (event, imageList) => {
      event.preventDefault();
      try{
        const res = await axios.post("/ocr-ktp", {
          images: [final[0].data_url]
        })
        console.log(res)
        setName(res.data.result[0].nama)
        setDOB(res.data.result[0].tanggal_lahir)
        setAddress(res.data.result[0].alamat)
        setOccupation(res.data.result[0].pekerjaan)
        setGender(res.data.result[0].jenis_kelamin)
        setCookie("name", res.data.result[0].nama, {path: "/"})
        setCookie("dob",res.data.result[0].tanggal_lahir, {path: "/"})
        setCookie("address",res.data.result[0].alamat, {path: "/"})
        setCookie("occupation",res.data.result[0].pekerjaan, {path: "/"})
        setCookie("gender",res.data.result[0].jenis_kelamin, {path: "/"})

        console.log(name,dob,address,occupation,gender)
        setTimeout( async ()=>{
          await getUpdate()
        },4000)
        
      }catch(err){
        console.log(err)
      }
      
    };
  return (
      <>
       <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
        <DashProfile/>

        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                  <button onClick={onSubmit}>Submit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <p>{message && message}</p>
      </div> 
    </div>

      </>
   
  )
}
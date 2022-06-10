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
export default function Profile() {
    const navigate = useNavigate();
    const [message, setMessage] = ""
    const maxNumber = 1;
    const [images, setImages] = React.useState([]);

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
      console.log(imageList[0].data_url)
    };

    // const onSubmit = async (event, imageList) => {
    //   event.preventDefault();
    //   try{
    //     const res = await axios.post("/ocr-ktp", {
    //       images: [imageList[0].data_url]
    //     })
    //     console.log(res)
        
    //   }catch(err){
    //     console.log(err)
    //   }
    // };
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
                  {/* <button onClick={onSubmit}>Submit</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </div> 
    </div>

      </>
   
  )
}
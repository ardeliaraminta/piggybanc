import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import piggylogo from '../../assets/piggylogo.png'
import { SidebarData } from '../data/data'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import Button from '@mui/material/Button';

const Sidebar = () => {
    const navigates = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies("email")
    const [selected, setSelected] = useState('')

    const navigate = (index, item) => {
        setSelected(index)
    }

    const logoutUser = () => {
        removeCookies("email", {path:"/"})
        removeCookies("name", {path:"/"})
        removeCookies("dob", {path:"/"})
        removeCookies("occupation", {path:"/"})
        removeCookies("address", {path:"/"})
        removeCookies("gender", {path:"/"})
        return navigates("/")
    } 

    useEffect(()=>{
        console.log(selected)
        switch (selected) {
            case "Dashboard":
                return navigates("/dashboard");
            case "Transaction":
                return navigates("/transaction")
            case "Profile":
                return navigates("/profile")
            default:
                return null;
        }
    }, [selected])

    return (
        <div className='Sidebar'>
            {/* {logo} */}
            <div className='logo'>
                <img src={piggylogo} alt="" />
                <span className='text-white'>

                    Piggy<span>b</span>anc

                </span>
            </div>

            {/* {menu} */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => setSelected(item.heading)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )

                })}
                <div className='logout'>
                <Button variant="contained" onClick={logoutUser} classname="h-12 px-6 m-2 text-[13px] sm:text-[20px] text-black" size="medium" sx={{paddingX:3, fontFamily:'Inter', color:'#000', fontWeight:600, background: 'linear-gradient(50deg,  #748AFF 20%, #FFFAFA 90%)'}}> Logout </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

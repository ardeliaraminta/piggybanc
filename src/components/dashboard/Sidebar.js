import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import piggylogo from '../../assets/piggylogo.png'
import { SidebarData } from '../data/data'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Sidebar = () => {
    const navigates = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies("email")
    const [selected, setSelected] = useState('')

    const navigate = (index, item) => {
        setSelected(index)
    }

    const logoutUser = () => {
        removeCookies("email", {path:"/"})
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
                <button onClick={logoutUser}> Logout </button>
            </div>
        </div>
    )
}

export default Sidebar

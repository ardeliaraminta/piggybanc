import React, { useState } from 'react'
import './SidebarProfile.css'
import piggylogo from '../../assets/piggylogo.png'
import { SidebarData } from '../data/data'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
const SidebarProfile = () => {
    const [cookie, setCookie, removeCookie] = useCookies("test")
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate()

    const handleLogout = () => {
        removeCookie('email', {path:'/'})
        removeCookie('name', {path:'/'})
        removeCookie('address', {path:'/'})
        removeCookie('dob', {path:'/'})
        removeCookie('gender', {path:'/'})
        removeCookie('occupation', {path:'/'})
        return navigate("/")
    }

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
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )

                })}
                <div className='text-white logout' onClick={handleLogout}> Logout </div>
            </div>
        </div>
    )
}

export default SidebarProfile

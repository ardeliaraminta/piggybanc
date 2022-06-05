import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import piggylogo from '../../assets/piggylogo.png'
import { SidebarData } from '../data/data'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigates = useNavigate();
    const [selected, setSelected] = useState(0)
    const navigate = (index, item) => {
        setSelected(index)
        }
    useEffect(()=>{
        console.log(selected)
        switch (selected) {
            case 0:
                return navigates("/dashboard");
            case 1:
                return navigates("/transaction")
            case 2:
                return navigates("/profile")
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
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )

                })}
                <button onClick={(e) => navigates("/")}> Logout </button>
            </div>
        </div>
    )
}

export default Sidebar

import React, { useState } from 'react'
import './SidebarProfile.css'
import piggylogo from '../../assets/piggylogo.png'
import { SidebarData } from '../data/data'


const SidebarProfile = () => {

    const [selected, setSelected] = useState(0)
  return (
    <div className='Sidebar'>
        {/* {logo} */}
        <div className='logo'>
            <img src ={piggylogo} alt=""/>
            <span className='text-white'>

                Piggy<span>b</span>anc

            </span>
        </div>

        {/* {menu} */}
        <div className="menu">
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected===index?'menuItem active':'menuItem'}
                        key={index}
                        onClick={()=> setSelected(index)}
                        >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )

            })}
            <div className='text-white'> Logout </div>
        </div>
    </div>
  )
}

export default SidebarProfile

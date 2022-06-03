import React from 'react'
import './Right.css'
import Updates from '../Updates/Updates'
import Expenses from '../Expenses/Expenses'

const Right = () => {
  return (
    <div className='Right'>
      <div>
        <h3> Updates </h3>
        <Updates/>
      </div>
      <div className='daily'>
        <h3> Daily Expenses </h3>
        <Expenses/>
      </div>
       
    </div>
  )
}

export default Right


import React from 'react'
import Cards from './Cards'
import Table from './Table'
import './maindash.css'

const Maindash = () => {
  return (
    <div className='maindash'>
          <h1 className='text-white'> Good Morning, User</h1>
          <Cards/>
          <Table/>
      </div>

  )
}

export default Maindash

import React from 'react'
import Cards from './Cards'
import Table from './Table'
import './maindash.css'

const Maindash = ({user, balance}) => {

  return (
    <div className='maindash'>
          <h1 className='text-white'> Good Morning, {user}</h1>
          <Cards balance={balance}/>
          <Table/>
      </div>

  )
}

export default Maindash

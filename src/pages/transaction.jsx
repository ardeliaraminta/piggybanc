import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Transactions from '../components/transactions/Transactions'

const Transaction = () => {
  return (
    <div className="App">
    <div className='AppGlass'>
      <Sidebar/>
      <Transactions/>
      
    </div> 
  </div>
  )
}

export default Transaction

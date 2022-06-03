import React from 'react'
import Table from './Table'
import ExpensesTab from './ExpensesTab'

const Transactions = () => {
    return (
        <div className='maindash'>
              <h1 className='text-white'> Good Morning, User</h1>
              <Table/>
              <ExpensesTab/>
          </div>
    
      )
    }
export default Transactions

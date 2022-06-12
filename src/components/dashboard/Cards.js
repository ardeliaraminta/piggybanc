import { color } from '@mui/system'
import React from 'react'
import { cardsData } from '../data/data'
import Card from './Card'
import './Cards.css'

const Cards = ({ balance }) => {

  return (
    <div className='Cards'>
      {cardsData.map((card) => {
        return (
          //i already pass the expense and income with the bal, just have to display it here :D
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barv={color.barv}
              value={balance[card.idx]}
              png={card.png}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards

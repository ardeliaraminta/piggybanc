import { color } from '@mui/system'
import React from 'react'
import { cardsData } from '../data/data'
import Card from './Card'
import './Cards.css'

const Cards = ({balance, expenses, income}) => {
  return (
    <div className='Cards'>
        {cardsData.map((card, id)=>{
            return(
                <div className="parentContainer">
                    <Card
                    title = {card.title}
                    color = {card.color}
                    barv = {color.barv}
                    value ={balance}
                    png ={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards

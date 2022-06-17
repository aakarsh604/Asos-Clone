import React from 'react'
import "./slider.css"

const Card = ({item}) => {
  return (
    <div style={{marginRight : "10px", marginLeft : "10px"}}>
    <div>
        <img src={`${item.url}`} />
        <div className='cardname'>{item.name}</div>
    </div>
    </div>
  )
}

export default Card
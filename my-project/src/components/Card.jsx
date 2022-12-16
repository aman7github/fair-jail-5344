import React from 'react'
import "../Allcss/Card.css"

const Card = ({src}) => {
  return (
    <div className='cards'>
       <img src={src} alt="pic" />
    </div>
  )
}

export default Card
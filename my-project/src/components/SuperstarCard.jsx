

import React from 'react'
import "../Allcss/Card.css"
import {GiPlayButton} from "react-icons/gi"
import {AiOutlineShareAlt} from "react-icons/ai"
import {useRef} from "react"

const SuperstarCard = ({src,name}) => {

 let ref = useRef(null)



  return (
    <>
    <div className='Superstarcards'  >

       <img src={src} alt="pic"  />
       <p className='Superstar-ptag' > {name}</p>
       </div>
    
     </>
  )
}

export default SuperstarCard
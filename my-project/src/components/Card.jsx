import React from 'react'
import "../Allcss/Card.css"
import {GiPlayButton} from "react-icons/gi"
import {AiOutlineShareAlt} from "react-icons/ai"
import {useRef} from "react"

const Card = ({src}) => {

 let ref = useRef(null)


  const OnmouseOver=()=>{
 
    ref.current.classList.add("cardInsideDivOnJs")
  }
  const OnmouseOut=()=>{
    ref.current.classList.remove("cardInsideDivOnJs")
  }


  return (
    <div className='cards'  >

       <img src={src} alt="pic" onMouseOver={OnmouseOver} onMouseOut={OnmouseOut}  />

       <div className='cardInsideDiv' ref={ref}  >
        <button className='cardInsideBtn' > <GiPlayButton />     Watch</button>
        
        <p className='ptag'  > <span className='icon' ><AiOutlineShareAlt  /></span>   Share</p>
       </div>

    </div>
  )
}

export default Card
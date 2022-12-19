import React from 'react'

import {GiPlayButton} from "react-icons/gi"
import {AiOutlineShareAlt} from "react-icons/ai"
import {useRef} from "react"
import "../Allcss/NewsCard2.css"

const NewsCard = ({src}) => {

 let ref = useRef(null)


  const OnmouseOver=()=>{
 
    ref.current.classList.add("NewscardInsideDivOnJs2")
  }
  const OnmouseOut=()=>{
    ref.current.classList.remove("NewscardInsideDivOnJs2")
  }


  return (
    <div   className='Newscards2' >

       <img src={src} alt="pic" onMouseOver={OnmouseOver} onMouseOut={OnmouseOut}  />

       <div   className='NewscardInsideDiv3' ref={ref}  >
        <button  className='NewscardInsideBtn2' > <GiPlayButton />     Watch</button>
        
        <p className='Newsptag2'  > <span   className="icon2" ><AiOutlineShareAlt  /></span>   Share</p>
       </div>

    </div>
  )
}

export default NewsCard


import React from 'react'

import Card from "../components/Card"

import "../Allcss/Trending2.css"


const Shows = () => {




    const Pics=[
        {id:1, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z520450/portrait/1920x7707be825d8e0b149478aaa493d90ecf34f.jpg"},
        {id:2  , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_691077998/portrait/1920x770976698187.jpg"},
        {id:3 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5210380/portrait/1920x7703d930e1ff0e04086bca5ff621b238642.jpg"},
        {id:4 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5210380/portrait/1920x7703d930e1ff0e04086bca5ff621b238642.jpg"},
        {id:5 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5159930/portrait/1920x770720753464a0244909d061e6defa74fd6.jpg"},
        {id:6 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-457/portrait/06457cover1424449120.jpg"},
        {id:7 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-134/portrait/1920x770a94de153d05c4b7e80520b3f04e629d8.jpg"},
        {id:8 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-1202/portrait/1920x77017067671.jpg"},
        {id:9 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-316/portrait/1920x770a03f24f35b30431691fc75d787cb6ebd8088b3f138074abebfbc701d5cb50ce9.jpg"},
        {id: 10 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_1603815665/portrait/1920x77051139f10f7894807b542e0099c131485.jpg"},
        {id:11  , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-366/portrait/1920x77034e3eda8bcc4448f9d5d0bd3cb3b370d.jpg"}
    ]

 const ref = React.useRef(null)
 const prebtn=()=>{
  let width = ref.current.clientWidth
  ref.current.scrollLeft = ref.current.scrollLeft - width    
  console.log("K")
 }
 
 const nextbtn=()=>{
  let width = ref.current.clientWidth
  ref.current.scrollLeft = ref.current.scrollLeft + width    
 }


  return (
    <>
    
    <div> <h3 className='htag2' >Top Hindi Shows</h3></div>

    <div className='containe2r' style={{marginLeft:"40px"}} >
       <button  className='pre-btn3'  onClick={prebtn}  > <p>&lt;</p> </button>
       <button  className='next-btn3' onClick={nextbtn} > <p>&gt;</p> </button>

       <div className='card-container2' ref={ref}>
        {  Pics.map((el)=>(
          <Card key={el.id}  src={el.img} />
        ))}
       </div>


    </div>
    </>
  )
}

export default Shows
import React from 'react'
import Card from "./Card"
import "../Allcss/IMDB.css"




const IMDB = () => {

const Pics = [

    {id:1 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270157/portrait/1920x770c89fb54b72874249a31e7a37f1192fcc.jpg"},
    {id:2 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262105/portrait/1920x7702811233e91004a88aa695db00e22d575.jpg"},
    {id:3  , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/portrait/1920x7705ef1215cc2984b548b3356566bf54c3d9e3d4a78407d4579938e19522c963b86.jpg"},
    {id:4 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-144529/portrait/1920x7701d164176db3b412c9167493646c1035b.jpg"},
    {id:5 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-soodhukavvum/portrait/1920x770f61e60986e524fa499f6c860b8c88e2da0336570dab14c618665a38450c17928.jpg"},
    {id:6 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-7463/portrait/1920x770a3d20d698c9d42348055928c37fa82c8.jpg"},
    {id:7 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z560890/portrait/1920x7707b2b6b9f455e4c75aff88be953d813504208f626bd9f433b866c6819010b9985.jpg"},
    {id:8 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z51248/portrait/1920x77014c02c5fa1a34847ae30a271fb74d329.jpg"},
    {id:9 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5246228/portrait/1920x7702c9b1a467ac54bb88d1d10ea40cde7c6fe2aceea54f149968b56565141ff844f.jpg"},
    {id:10 , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5129922/portrait/1920x7707193cf3b9c41480ca9f67c210504a936.jpg"},
    {id:11  , img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5245891/portrait/1920x770ab59b4019e934793a65158a1e008b40e.jpg"},
    {id:12, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5266165/portrait/1920x770e10edd19f43d40098d3a1d7c5ba08ef1.jpg"},
]





    // let box = document.querySelector('.container')

    const ref = React.useRef(null)
    
   

    const prebtn2=()=>{
    let width2 = ref.current.clientWidth
     ref.current.scrollLeft = ref.current.scrollLeft - width2 
   }
 
    const nextbtn2=()=>{
        let width2 = ref.current.clientWidth
        ref.current.scrollLeft = ref.current.scrollLeft + width2  
    }

  return (
   
<>

<div> <h3 className='htag' >IMBD Top Picks</h3></div>

<div className='container'  >
   <button className='pre-btn2'  onClick={prebtn2}  > <p>&lt;</p> </button>
   <button className='next-btn2' onClick={nextbtn2} > <p>&gt;</p> </button>

   <div className='card-container' ref={ref} >
    {  Pics.map((el)=>(
      <Card key={el.id}  src={el.img} />
    ))}
   </div>


</div>
</>
   
  )
}

export default IMDB
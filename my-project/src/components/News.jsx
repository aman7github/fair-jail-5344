

import React from 'react'
import NewsCard from "./Newscard"
// import "../Allcss/NewsCard.css"
import "../Allcss/NewsCard2.css"


const News = () => {


    const Pics = [
        {id:1, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-aajtak/list/aajtak11705bd3799ece9d4491b87ba04a2c57e78e.jpg"},
        {id:2, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-indiatoday/list/indiatodayrajeevsardesdai11700e203579951e458ea4e88b2935bb3d1a.jpg"},
        {id:3, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-zeebusiness/list/zeebusiness117089cf9de2406d4ceeaaa577c12734ede5.jpg"},
        {id:4, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-272/list/indianews1170cedcc74fba3e4b75b9824e00a1299e6c.jpg"},
        {id:5, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-251/list/tv9bharatvarshb1170029d26b5ca4c4eb1bb70a9e90c5f2669.jpg"},
        {id:6, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-ddindia/list/ddindiab1170f889db27123a438db1174cc576e117e9.jpg"},
        {id:7, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-206/list/e24newslogob1170b5a50772457f4c6c8785e1242d526460.jpg"},
        {id:8, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-170/list/newsnation117080739cd3b19243c5aa39196f8a85db04.jpg"},
        {id:9, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-255/list/gnt1170d5f521881cd646e885ef519ba77abf47.jpg"},
        {id:10, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-9z583386/list/timesnownavbharat117094b998a1886e4bcfb26f6e6249876985.jpg"},
        {id:11, img:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-207/list/e241440aef5cb4e7bf242b5be599298be7f5b2a4554686f4b1c4816b35a20cd38d2393a.jpg"},
    ]
 
 const ref = React.useRef(null)
 const prebtn=()=>{
  let width = ref.current.clientWidth
  ref.current.scrollLeft = ref.current.scrollLeft - width    
 
 }
 
 const nextbtn=()=>{
  let width = ref.current.clientWidth
  ref.current.scrollLeft = ref.current.scrollLeft + width    
 }


  return (
    <>
    
  
  <div> <h3> Stream News Live</h3></div>

    <div   className='Newscontainer2' >
       <button className='pre-btn2'  onClick={prebtn}  > <p>&lt;</p> </button>
       <button className='next-btn2' onClick={nextbtn} > <p>&gt;</p> </button>

       <div className='card-container2' ref={ref}>
        {  Pics.map((el)=>(
          <NewsCard key={el.id}  src={el.img} />
        ))}
       </div>


    </div>
    </>
  )
}

export default News
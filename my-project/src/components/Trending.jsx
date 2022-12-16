import React from 'react'
import Card from "./Card"
import "../Allcss/Trending.css"


const Trending = () => {


 const Pics = [
  {id:1,img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/portrait/1920x770541441bea82b4c5ebb5e50fdf65b1486.jpg"},
  {  id:2, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264517/portrait/1920x770618f9da3dbd54edcac6cd320187bf1f2e6966885630a401fb3ed9fc393b63bbd.jpg"},
  { id:3,img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/portrait/1920x7700b1f9a5596a848a493f7bd6a3d226928.jpg"},
  {id:4, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-1-6z5269873/portrait/1920x7705fe57b7a8636474a9a91e87402f84311.jpg"},
  {id:5, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/portrait/1920x77069dfde7f955d4ef69e73c3b682aa636b.jpg"},
  {id:6, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/portrait/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg"},
  {id:7, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/portrait/1920x770436ead89a3c94046a72fa9f78dc4ba53.jpg"},
  {id:8, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/portrait/1920x770ac642b6d516f4a958c44cb56912a306cb137ff41ad1c409e86f0a9b4f733a023.jpg"},
  {id:9, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-8-3z5231124/portrait/zee5worldhitsdepth1920x7700710202207fa72526c724052849e25ff62aa6a41.jpg"},
  {id:10, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5250959/portrait/1920x7709419fa306cbc42f187285a123b6629b3.jpg"},
  {id:11, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/portrait/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg"},
  {id:12, img:"https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270157/portrait/1920x770c89fb54b72874249a31e7a37f1192fcc.jpg"},


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
    
    <div> <h3 className='htag' >Trending Near You</h3></div>

    <div className='container'  >
       <button className='pre-btn'  onClick={prebtn}  > <p>&lt;</p> </button>
       <button className='next-btn' onClick={nextbtn} > <p>&gt;</p> </button>

       <div className='card-container' ref={ref}>
        {  Pics.map((el)=>(
          <Card key={el.id}  src={el.img} />
        ))}
       </div>


    </div>
    </>
  )
}

export default Trending
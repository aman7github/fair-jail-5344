

import React from 'react'

import Card from "../components/SuperstarCard"
// import "../Allcss/Trending.css"
import "../Allcss/Trending2.css"


const Superstar = () => {


const Pics=[
    {id:1 ,img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-8672/square/platformcretaive3311634093318fa169d2b1b04e97b7620b4c42629457.jpg",name:"Taapsee Pannu"},
    {id:2, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-6488/square/salmankhanfeaturedcelebsimagery1170x65809062022625a938fb39847fcad83c27afbcf457c.jpg",name:"Salman khan"},
    {id:3, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-6489/square/akshaykumar117054854610454834be00582707448e8b5b9f987afffaaf.jpg",name:"Akshay Kumar"},
    {id:4, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258286/square/sunnydeol1170x658platformiconsuperstars24112022f82081bf66794ac7b6aff5a1029ab51a.jpg",name:"Sunny Deol"},
    {id:5, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-8678/square/platformcretaive901722262901bf7ce071fc824c03b3d974ce5d2caa79.jpg",name:"Shahrukh khan"},
    {id:6, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-7523/square/platformcretaiv_1631276378.jpg",name:"Ranbir Kapoor"},
    {id:7, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-736/square/johnabraham.jpg" ,name:"Jhon Abraham"},
    {id:8, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-6023/square/rajkummarrao.jpg", name:"Rajkumar Rao"},
    {id:9, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-7217/square/pankajtripathi.jpg", name:"Pankaj Tripathi"},
    {id:10, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-7543/square/platformcretaiv19394642241939039a6f594cc14281be4890c46be5cc50.jpg", name:"Manoj Bajpayee"},
    {id:11, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-2240/square/katrinakaif_117_1691002625.jpg", name:"Katrina kaif"},
    {id:12, img:"https://akamaividz2.zee5.com/image/upload/w_102,h_102,c_scale,f_webp,q_auto:eco/resources/0-8-2901/square/vickykaushalthumbnailpin1170x658featuredcelebsimagery10062022dcefd93b00f24ed2b368b4efc47cd9d8.jpg", name:"Vicky kaushal"}
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
    
    <div> <h3    className='htag2' >Your Favourite Superstars</h3></div>

    <div    className='Superstarcontainer2' >
       <button   className='pre-btn2' style={{marginTop:"-52px"}}  onClick={prebtn}  > <p>&lt;</p> </button>
       <button   className='next-btn2' style={{marginTop:"-52px"}}  onClick={nextbtn} > <p>&gt;</p> </button>

       <div   className='Superstarcard-container2' ref={ref}>
        {  Pics.map((el)=>(
          <Card key={el.id}  src={el.img} name={el.name} />
        ))}
       </div>


    </div>
    </>
  )
}

export default Superstar
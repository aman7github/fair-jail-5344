
import React from 'react'
import "../Allcss/Footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsYoutube} from "react-icons/bs"


const Footer = () => {
  return (
    <div className='mainfooter'>

     <div  className='div' >
        <p>About Us</p>
        <p>Help center</p>
        <p>Privacy Policy</p>
        <p>Terms of Uses</p>
        <div className='connect' >
            <h5   >connect with us</h5>
            <p><AiFillFacebook /></p>
            <p><FiInstagram /></p>
            <p><AiFillTwitterCircle /></p>
            <p><BsYoutube /></p>
        </div>
     </div>
     
     <div  className='description' >
        <div>
            <p  style={{color:"white", fontWeight:"700"}} >Popular Tv Shows</p>
            <p>KumKum Bhagya</p>
            <p>Kundali Bhagya</p>
            <p>Bhagya Lakshmi</p>
            <p>Tujhse Hai Rabta</p>
            <p>Kyon Risto mein</p>
        </div>
        <div>
            <p  style={{color:"white", fontWeight:"700"}} >Primium Movies</p>
            <p>Helmet</p>
            <p>Dial 100</p>
            <p>14 Phere</p>
            <p>Avengers</p>
            <p>sherlock Homles</p>
        </div>
        <div>
            <p  style={{color:"white", fontWeight:"700"}}  >Popular Live Tv Channels</p>
            <p>Aaz tak</p>
            <p>Zee Tv HD</p>
            <p>Zee News</p>
            <p>& Zee Tv</p>
            <p>India Tv</p>
        </div>
        <div>
            <p  style={{color:"white", fontWeight:"700"}} >Popular Web Series</p>
            <p>Sunflower</p>
            <p>Zeet ki zid</p>
            <p>Biccho ka khel</p>
            <p>Mirzapur</p>
            <p>Panchayat</p>
        </div>
        <div>
            <p   style={{color:"white", fontWeight:"700"}} >Bollywood Top celebrities</p>
            <p>Akshay kumar</p>
            <p>Salman Khan</p>
            <p>Pankaz tripathi</p>
            <p>Manoz Bajpai</p>
            <p>Sah Rukh Khan</p>
        </div>
     </div>
    </div>
  )
}

export default Footer
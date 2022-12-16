
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default ()=> {
    
        return (
            <Carousel
        
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            autoPlay
            centerMode
            
           
        
            
            >
                
                <div>
                    <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/cover/1920x770c85c702415cb46fdbc2b704334a1222d.jpg" />
                    <p className="legend"   style={{fontSize:"30px" , color:"white", width:"80px"}} >Blurr</p>
                    
                </div>
                <div>
                    <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/cover/1920x77088754fa6d1384d259444f7d1d4b00a33.jpg" />
                    <p className="legend"   style={{fontSize:"30px" , color:"white", width:"140px"}}  >Mukhbir</p>
                </div>
                <div>
                    <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x77034e3eda8bcc4448f9d5d0bd3cb3b370d.jpg" />
                    <p className="legend"   style={{fontSize:"25px" , color:"white", width:"220px"}} >KumKum Bhagya</p>
                </div>
                <div>
                    <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/cover/1920x77013997b45a7b54db3852c885ad51bf387.jpg" />
                    <p className="legend"   style={{fontSize:"25px" , color:"white", width:"300px"}} >Har Har Mahadev</p>
                </div>
            
            </Carousel>
        );
    
};


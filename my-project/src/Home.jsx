

import React from 'react'
import Card from "./components/Card"
import News from "./components/News"
import Carousel from "./components/carousel"
import NewsCard from "./components/Newscard"
import Shows from "./components/Shows"
import Superstar from "./components/Superstar"
import SuperstarCard from "./components/SuperstarCard"
import Trending from "./components/Trending"
import IMDB from "./components/IMDB"
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
    
     <Carousel />
     <Trending />
     <IMDB />
     <Superstar />
     <Shows />
     <News />
     <Footer />
   
   
    </div>
  )
}

export default Home
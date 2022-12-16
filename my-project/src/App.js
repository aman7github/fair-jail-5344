import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Carousel from './components/carousel';
import IMDB from './components/IMDB';

import Trending from './components/Trending'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
         <Navbar />
         <Carousel />
         <Trending />
         <IMDB />
        
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from "./AllRoutes/Navbar"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import News from "./components/News"
import Carousel from "./components/carousel"

import Shows from "./components/Shows"
import Superstar from "./components/Superstar"

import Trending from "./components/Trending"
import IMDB from "./components/IMDB"

import Home from "./Home"
import Login from "./components/Login"
import Allroutes from './AllRoutes/Allroutes';

function App() {
  return (
    <div className="App">
         <Navbar />
         {/* <Carousel />
         <Trending />
         <IMDB />
         <Superstar />
         <Shows />
         <News /> */}
         {/* <Signup /> */}
         {/* <Home /> */}
       {/* <Login />  */}
       <Allroutes />

        
    </div>
  );
}

export default App;

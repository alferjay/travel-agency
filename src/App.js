import React, {useEffect} from 'react';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Search from './components/Search'
import Icons from './components/Icons'
import PopularPlaces from './components/PopularPlaces'
import Follow from './components/Follow'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(()=>{
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav,{});

    //slider
    const slider = document.querySelector('.slider')
    M.Slider.init(slider,{
      indicators:false,
      height: 500,
      transition: 500,
      interval:6000
    })

    //scrollspy
    const ss = document.querySelectorAll('.scrollspy')
    M.ScrollSpy.init(ss,{})

  },[])

  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav,{});

  return (
    <>
      <NavBar/>
      <Slider/>
      <Search/>
      <Icons/>
      <PopularPlaces/>
      <Follow/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

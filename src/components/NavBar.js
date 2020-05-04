import React from 'react'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {

  return (
    <>
      <div className="nav-bar-fixed">
        <nav className="teal">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#home" className="brand-logo">TravelVille</a>
              <a href="#none" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons"><FaBars/></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#home">Home</a></li>
                <li><a href="#search">Search</a></li>
                <li><a href="#popular">Popular Places</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#popular">Popular Places</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </>
  )
}

export default NavBar

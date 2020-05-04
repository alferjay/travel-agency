import React, { useEffect } from 'react'
import M from 'materialize-css'

const Gallery = () => {

  useEffect(()=>{
    const mb = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(mb,{})
  },[])

  return (
    <section id="gallery" className="galery section-gallery scrollspy">
      <div className="container">
        <h3 className="center">
          <span className="teal-text">Photo</span> Gallery
        </h3>
        <div className="row">
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?beach" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?travel" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?nature" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?beach,travel" alt="beach" className="materialboxed responsive-img"/>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?water" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?building" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?trees" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?cruise" alt="beach" className="materialboxed responsive-img"/>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?rock" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?mountain" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?fire" alt="beach" className="materialboxed responsive-img"/>
          </div>
          <div className="col s12 m3">
            <img src="https://source.unsplash.com/1500x900/?stone" alt="beach" className="materialboxed responsive-img"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

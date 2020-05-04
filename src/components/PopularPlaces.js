import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const PopularPlaces = () => {
  return (
    <section className="section section-popular scrollspy" id="popular">
      <div className="container">
        <div className="row">
          <h3 className="center"><span className="teal-text">Popular</span> Places</h3>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={img1} alt="Popular 1"/>
                <span className="card-title">Abu Dhabi, UAE</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint animi vitae dolores quasi? Officia.
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={img2} alt="Popular 1"/>
                <span className="card-title">London, UK</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint animi vitae dolores quasi? Officia.
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src={img3} alt="Popular 1"/>
                <span className="card-title">Dubai, UAE</span>
              </div>
              <div className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint animi vitae dolores quasi? Officia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularPlaces

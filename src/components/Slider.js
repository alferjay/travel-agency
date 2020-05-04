import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src={img1} alt="sample nature 1"/>
          <div className="caption center-align">
            <h3>Take your dream vacation</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src={img2} alt="sample nature 2"/>
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src={img3} alt="sample nature 3"/>
          <div className="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Slider

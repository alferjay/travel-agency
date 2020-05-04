import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaPinterestSquare } from 'react-icons/fa'


const Follow = () => {
  return (
    <section className="section section-follow teal darken-2 white-text center">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="center">Follow TravelVille</h3>
            <p>Follow us on social media for special offers</p>
            <a href="test/test" className="white-text">
              <i className="material-icons medium">
                <FaFacebookSquare/>
              </i>
            </a>
            <a href="test/test" className="white-text">
              <i className="material-icons medium">
                <FaTwitterSquare/>
              </i>
            </a>
            <a href="test/test" className="white-text">
              <i className="material-icons medium">
                <FaLinkedin/>
              </i>
            </a>
            <a href="test/test" className="white-text">
              <i className="material-icons medium">
                <FaPinterestSquare/>
              </i>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Follow

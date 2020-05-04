import React from 'react'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact" className="section section-contact scrollspy">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel teal white-text center">
              <i className="material-icons medium">
                <MdEmail/>
              </i>
              <h5>Contact us for booking</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt voluptatibus quam illum placeat eum doloremque fuga laudantium similique earum.</p>
            </div>
            <ul className="collection with-header">
              <li className="collection-header"><h4>Location</h4></li>
              <li className="collection-item">TravelleVille Agency</li>
              <li className="collection-item">555 Beach Road</li>
              <li className="collection-item">Dubai, UAE</li>
            </ul>
          </div>

          {/* Right */}
          <div className="col s12 m6">
            <div className="card-panel grey lighten-3">
              <h5>Please fill out this form</h5>
              <div className="input-field">
                <input type="text" name="name" placeholder="name" id="name"/>
              </div>
              <div className="input-field">
                <input type="email" name="email" placeholder="email" id="name"/>
              </div>
              <div className="input-field">
                <input type="number" name="phone" placeholder="phone" id="phone"/>
              </div>
              <div className="input-field">
                <textarea className="materialize-textarea" type="text" name="message" placeholder="message" id="message"></textarea>
              </div>
              <input type="submit" value="Submit" className="btn"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

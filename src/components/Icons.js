import React from 'react'
import { MdRoom, MdStore, MdAirplanemodeActive } from 'react-icons/md'


const Icons = () => {
  return (
    <section className="section section-icons grey lighten-4 center">
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <div className="card-panel">
              <i className="material-icons large teal-text">
                <MdRoom/>
              </i>
              <h4>Pick Where</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem?</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card-panel">
              <i className="material-icons large teal-text">
                <MdStore/>
              </i>
              <h4>Travel Shop</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem?</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card-panel">
              <i className="material-icons large teal-text">
                <MdAirplanemodeActive/>
              </i>
              <h4>Fly Cheap</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Icons

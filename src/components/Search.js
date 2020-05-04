import React, { useEffect } from 'react'
import M from 'materialize-css'

const Search = () => {

  useEffect(()=>{
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac,{
      data:{
        "Aruba":null,
        "Dubai":null,
      }
    });
  },[])

  return (
    <section className="section section-search teal darken-1 white-text center scrollspy" id="search">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Search Destination</h3>
            <div className="input-field">
              <input type="text" name="" id="autocomplete-input" placeholder="Aruba, Dubai, Abu Dhabi" className="white gray-text autocomplete"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search

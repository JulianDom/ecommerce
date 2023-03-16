import React from 'react'
import logo from '../assets/logo.png'
import './Search.css'
const Search = () => {
  return (
    <div>
        <section className='search'>
          <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" className='img'/> 
          </div>
          </div>
        </section>
        </div>
  )
}

export default Search
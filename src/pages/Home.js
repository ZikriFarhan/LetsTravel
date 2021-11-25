import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
const url = 'https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db'

function Home() {
  return (
    <div class="app home">
      <section id="home">
        <div class="kolom">
          <h2>Lets Travel</h2>
          <p>Find many unique place here</p>
          <p>
            <NavLink to="/Explore">
              <button className="tbl">Explore Now</button>
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home

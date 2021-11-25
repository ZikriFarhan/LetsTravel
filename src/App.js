import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import Categories from './pages/Categories'
import Destination from './pages/Destination'
import Details from './pages/Details'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="containerhead">
          <h1>Lets Travel</h1>
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destination/:id" element={<Destination />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
        <footer>
          <div className="containernav">
            <NavLink to="/home" className="iconwrapper">
              Home
            </NavLink>
            <NavLink to="/explore" className="iconwrapper">
              Explore
            </NavLink>
            <NavLink to="/categories" className="iconwrapper">
              Categories
            </NavLink>
            <NavLink to="/about" className="iconwrapper">
              About
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

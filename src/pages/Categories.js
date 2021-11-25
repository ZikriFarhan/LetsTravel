import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Categories.css'

function Categories(props) {
  const [data, setData] = useState([])
  const { history } = props
  const [list] = useState([
    'Pantai',
    'Pasar',
    'Candi',
    'Tempat Hiburan',
    'Gunung',
    'Museum',
    'Danau',
  ])
  console.log(list)
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db')
      .then((res) => res.json())
      .then((data) => setData(data.Destination))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="categories-list">
      <h1> Categories </h1>
      {data.length
        ? list.map((item, idx) => {
            return (
              <Link to={'/destination/' + item}>
                <div key={idx}>
                  <div className="categories">
                    <h2>{item}</h2>
                  </div>
                </div>
              </Link>
            )
          })
        : 'loading'}
    </div>
  )
}

export default Categories

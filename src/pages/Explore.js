import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Explore.css'

function Explore(props) {
  const [data, setData] = useState([])
  const { history } = props
  console.log(data)
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db')
      .then((res) => res.json())
      .then((data) => setData(data.Destination))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="Explore-list">
      <h1> Explore </h1>
      {data.length
        ? data.map((item, idx) => {
            return (
              <Link to={'/details/' + item.id}>
                <div key={idx}>
                  <img
                    className="gambar"
                    style={{
                      width: '200px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                    src={item.gambar}
                    alt=""
                  />
                  <div className="explore">{item.nama}</div>
                </div>
              </Link>
            )
          })
        : 'loading'}
    </div>
  )
}

export default Explore

import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Details() {
  const [data, setData] = useState([])
  const { id } = useParams()
  console.log(data)
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db')
      .then((res) => res.json())
      .then((data) => setData(data.Destination[id - 1]))
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <div>
        <img
          style={{ width: '200px', height: '120px', objectFit: 'cover' }}
          src={data.gambar}
          alt=""
        />
        <h2>{data.nama}</h2>
        <p>{data.lokasi}</p>
      </div>
    </div>
  )
}

export default Details

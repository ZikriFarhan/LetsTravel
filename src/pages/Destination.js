import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Destination() {
  const [data, setData] = useState([])
  const { id } = useParams()
  console.log(data)
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db')
      .then((res) => res.json())
      .then((data) =>
        setData(data.Destination.filter((item, idx) => item.kategori === id)),
      )
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      {data.map((item, idx) => (
        <div>
          <img
            style={{ width: '200px', height: '120px', objectFit: 'cover' }}
            src={item.gambar}
            alt=""
          />
          <h2>{item.nama}</h2>
          <p>{item.lokasi}</p>
        </div>
      ))}
    </div>
  )
}

export default Destination

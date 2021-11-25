import React, { useState, useEffect } from 'react'
import './About.css'

function About() {
  // const [data, setData] = useState('')

  // useEffect(() => {
  //    async function fetchData() {
  //      const request = await axios
  //        .get(`https://api.github.com/users/ilhamdaffa21`)
  //        .then((res) => setData(res.data))
  //        .catch((e) => Alert.alert('Gagal!', e))
  //      return
  //      request
  //    }
  //    fetchData()
  //  }, [])

  return (
    <div className="card">
      <h1> About web: </h1>
      <p> Lets Travel is a web for searching </p>
      <p> recommendation wonderful place </p>
      <p> Made using React.js </p>
      <p>Using own API at </p>
      <p>https://my-json-server.typicode.com/ZikriFarhan/LetsTravel/db</p>
      <p> Made by: Muhammad Dzikrullah Farhan</p>
      <img
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          borderradius: '50%',
        }}
        src="/jikri.jpg"
        alt=""
      />
    </div>
  )
}

export default About

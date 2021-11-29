import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

export default function Countries() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://restcountries.com/v2/all?fields=name,capital,region,population,flags'
      )
      .then(res => setData(res.data))
  }, [])

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map(country => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  )
}

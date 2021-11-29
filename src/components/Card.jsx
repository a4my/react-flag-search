import React from 'react'

export default function Card(props) {
  const { country } = props
  console.log(country)

  return (
    <li className="card">
      <img src={country.flags.svg} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>{country.capital}</li>
          <li>Pop: {country.population}</li>
        </ul>
      </div>
    </li>
  )
}

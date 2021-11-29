import React from 'react'

export default function Card(props) {
  const { country } = props

  const popFormatting = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <li className="card">
      <img src={country.flags.svg} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>{country.capital}</li>
          <li>Pop: {popFormatting(country.population)}</li>
        </ul>
      </div>
    </li>
  )
}

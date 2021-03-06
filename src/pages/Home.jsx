import React from 'react'
import Countries from '../components/Countries'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
    </div>
  )
}

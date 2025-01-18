import React from 'react'
import Navbar from './Navbar'

function Screen({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Screen
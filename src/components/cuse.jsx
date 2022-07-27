import React from 'react'
import NavBar from './NavBar'
import Snavbar from './Snavbar'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal'
import Getstarted from './GetStarted'
import Mydiv from './Mydiv'

const Cuse = (props) => {
  return (
    <div className='h-screen  w-screen bg-homeWhite'>
     <Snavbar />
      <NavBar setShowForm={props.setShowForm} getMyForm={props.getMyForm} />
     
     <Mydiv />
    </div>
  )
}

export default Cuse
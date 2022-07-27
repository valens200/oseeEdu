import React from 'react'
import NavBar from './NavBar'
import Snavbar from './Snavbar'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal'
import Getstarted from './GetStarted'

const Hero = (props) => {
  return (
    <div className='h-screen  w-screen bg-homeWhite'>
     <Snavbar />
      <NavBar setShowForm={props.setShowForm} getMyForm={props.getMyForm} />
      <Zoom  duration={900}>
      <div className='flex flex-col md:flex-row'>
      <div className="px-[9%]   ">
            <h1 className="font-bold  mt-[28%] text-[2.4rem] w-[100%] md:w-[100%] mx-auto md:mx-0">WELLCOME TO OSSEEDU</h1>
             <div className=" leading-[4vh] md:leading-[2.6vh] text-[0.86rem]  mt-5">
                <p>OseeEDU is a professional software engineers group with much experience in Tech</p>
                <p>Industry, we decided to share various tremendous skills to the world. We are happy to</p>
                <p>provide STEM courses to all people for better future, We also have Youtube channel where</p>
                <p>you can get our courses, Here we go!!!!.</p>
             </div>
        </div>
        <div className= "md:w-[50%]">
        {props.getForm()}
        </div>
      </div>
       </Zoom>
    </div>
  )
}

export default Hero
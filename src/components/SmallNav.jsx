import React from 'react'
import {Link } from 'react-router-dom'

function smallNav(props) {
    
  return (
    <div className="w-[50%] mt-5 border h-[50%] p-10 leading-[3vh] mx-auto">
        {props.links.map((link, index) => (
            <p className="hover:bg-white hover:text-black p-2 rounded" key={index}>{link}</p>
        ))}
    </div>
  )
}

export default smallNav
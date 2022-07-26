import React from 'react'
import '.././index.css'
import '.././App.css'
import Main from './main';
import {Link } from 'react-router-dom';
import { useState } from 'react'

const links =  [
  'HOME',
  'COURSES',
  'APPLY NOW',
  'SCIENCE',
  'TECHNOLOGY',
  'ENGINIEERING',
  'MATHS',
  'CONTACT US',
];
const text = ['O', 'S', 'E','E','E','D','U']

const NavBar = (props) => {
  
const [hovered, setIshovered] = useState(true)

const getClass = () =>{
  if(hovered) return "bg-white visible text-black px-5  py-1 font-bold text-[0.40rem]";
  return "bg-white invisible text-black px-5  py-1 font-bold text-[0.40rem]"
}
const hoveredd = (e, name) => {
  e.preventDefault()
  setIshovered(false)
}

  var sublinks = []
  const getSubNav = (name) => {
    switch (name) {
      case 'SCIENCE':
        sublinks = ['BILOGY', 'CHEMISTRY', 'PHYSICS', 'GEOGRAPHY']
        return  <div>
        {sublinks.map((para, index) => (
        <p key={index}>{para}</p>
        ))}
</div>
        break
      case 'TECHNOLOGY':
        sublinks = [
          'WEB_DEVELOPMENT',
          'SOFTWARE_ENGINIEERING',
          'NETWORK_SYSTEMS',
          'DATABASE_ADIMINISTRATION',
        ]
        return  <div>
        {sublinks.map((para, index) => (
        <p key={index}>{para}</p>
        ))}
</div>
      console.log(name)
        break
      case 'ENGINIEERING':
        sublinks = ['ELECTRICAL', 'MECHANICAL', 'CONSTRUCTION', 'CIVIL']
        return  <div>
                 {sublinks.map((para, index) => (
                 <p key={index}>{para}</p>
                 ))}
        </div>
        console.log(name)
        break
      case 'MATHS':
        sublinks = [
          'GEOMETRY',
          'CALCULAS',
          'PROBABILITY',
          'DIFFRENTIANTIALS',
          'DERIVATIVES',
          'ALGEBRA',
        ]
        return  <div>
        {sublinks.map((para, index) => (
        <p key={index}>{para}</p>
        ))}
</div>
        break
    }
   
  }
  const getText = (text, index) => {
    switch (index) {
      case 0:
        return 'font-bold text-[1.6rem]'
        break;
      case 1:
        return 'font-bold -translate-y-[2%] text-[1.7rem]'
        break;
      case 2:
          return 'font-bold -translate-y-[4%] text-[1.7rem] '
          break;
      case 3:
          return 'font-bold -translate-y-[4%] text-[1.7rem] '
          break;
      case 4:
          return 'font-bold -translate-y-[10%] text-[2rem]'
          break;
      case 5:
          return 'font-bold -translate-y-[16%] text-[2.2rem]'
          break
      case 6:
          return 'font-bold -translate-y-[26%]  text-[2.8rem]'
          break;
      case 7:
          return 'font-bold text-[3rem]'
          break;
        
    }

  }


  return (
    <div>
      <div className = "w-[87%] hello  z-100   text-white pt-6  mx-auto  flex flex-row justify-between text-[0.90rem]">
         <div className="flex">
          {text.map((text, index) => (
            <h1 className={getText(text, index)}>{text}</h1>
          ))}
         </div>
         <div className="flex   text-bold  float-left  space-x-5  flex-row ">
            {props.links.map((link, index) => (
             <div className="">
               <Link to={`/${link}`} ><p className="translate-y-[30%] hover:text-[#0dc434]" onClick={(e) => hoveredd(e, link)} key={index}>{link}</p></Link>
             </div>
            ))}
         </div>
    </div>
         {/* <Main getClass={getClass} /> */}
         
    </div>
  )
}

export default NavBar

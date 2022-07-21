import React from 'react'
import '.././index.css'
import '.././App.css'
import Main from './main';
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


  return (
    <div>
      <div className = "w-[100%] hello  container py-2   mx-auto  flex flex-row justify-between text-[0.55rem]">
         <div className="">
          <h1 className="font-bold text-xl">NATEEDU</h1>
         </div>
         <div className="flex  invisible md:visible text-bold  float-left  space-x-5  flex-row ">
            {links.map((link, index) => (
             <div className="">
               <p className="translate-y-[30%] hover:text-[#0dc434]" onClick={(e) => hoveredd(e, link)} key={index}>{link}</p>
             </div>
            ))}
         </div>
         
    </div>
         {/* <Main getClass={getClass} /> */}
         
    </div>
  )
}

export default NavBar

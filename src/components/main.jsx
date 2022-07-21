import React from 'react'
import '.././index.css'
import '.././App.css'

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

const getClass = () => {
  return 'inline-flex flex-col';
}
const Main = (props) => {

  var sublinks = []
  const getSubNav = (name) => {
    switch (name) {
      case 'SCIENCE':
        sublinks = ['BILOGY', 'CHEMISTRY', 'PHYSICS', 'GEOGRAPHY']
        return getParagraph(sublinks, name)
        break
      case 'TECHNOLOGY':
        sublinks = [
          'WEB_DEVELOPMENT',
          'SOFTWARE_ENGINIEERING',
          'NETWORK_SYSTEMS',
          'DATABASE_ADIMINISTRATION',
        ]
        return getParagraph(sublinks, name)
      console.log(name)
        break
      case 'ENGINIEERING':
        sublinks = ['ELECTRICAL', 'MECHANICAL', 'CONSTRUCTION', 'CIVIL']
        return getParagraph(sublinks, name)
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
       return getParagraph(sublinks, name)
        console.log(name)
        break
    }
   
  }

  const getParagraph = (paras, parent) => {
    return (
        paras.map((para, index) => (
              <div className={props.getClass(parent)}>
              <p className="hover:translate-x-1  hover:text-[#0dc434]" key={index}>{para}</p>
              </div>    
    ) 
      ))
  }
  return (
      <div className="bg-[grey] invisible md:visible">
        <div className = "w-[70%]  justify-end ml-auto space-x-1  text-[0.60rem]  bg-[grey] text-white flex flex-row">
              {links.map((link, index) => (
             <div className="invisible   text-bold   text-center space-x-2 "> 
               {getSubNav(link)}
             </div>
            ))}
    </div>
      </div>
  )
}

export default Main

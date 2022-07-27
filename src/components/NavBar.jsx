import React, { useState } from 'react'
import NavItem from './NavItem';


const NavBar = () => {

  const [navItemsData, setNavItems] = useState([
     {name: 'HOME', active: false},
     {name: 'COURSES', active: false},
     {name: 'APPLY NOW', active: false},
     {name: 'SCIENCE', dropdownList: ['Biology', 'Chemistry', 'Physics', 'Biology'], active: false},
     {name: 'TECHNOLOGY', dropdownList: ['Web_development', 'Software_Engineering', 'Network_systems', 'Database_administration'], active: false},
     {name: 'ENGINEERING', dropdownList: ['Electrical', 'Mechanical', 'Construction', 'Civil'], active: false},
     {name: 'MATH', dropdownList: ['Geometry', 'Calculus', 'Probability', 'Differentials', 'Derivatives', 'Algebra'], active: false},
     {name: 'CONTACT US', active: true}
  ]);

  const handleActiveness = (id) =>{
      setNavItems(prevNavitems=>{
        return prevNavitems.map(prevNavItemData=>{
          if(prevNavItemData.active === true) {
            return {...prevNavItemData, active: false};
          }
          return prevNavItemData.name === id ? {...prevNavItemData, active: true} : prevNavItemData;
        })
    })
  }

  const handleInactiveness = (id) =>{
    setNavItems(prevNavitems=>{
      return prevNavitems.map(prevNavItemData=>{
        return prevNavItemData.active === true && prevNavItemData.name === id ? {...prevNavItemData, active: false} : prevNavItemData;
      })
    })
  }

  const navItems = navItemsData.map((navItem, index)=>{
    return <NavItem navData={navItem} handleActiveness={handleActiveness} handleInactiveness={handleInactiveness} key={index} />
  })

  return (
    <div className='h-24 w-full bg-navBarColor flex justify-center items-center gap-[20rem] '>
      <a href='/' className='hover:cursor-pointer'>
        <span className='text-white uppercase text-2xl font-black'>osee</span>
        <span className='text-white uppercase text-3xl font-black'>EDU</span>
      </a>

      <div className='w-fit p-2 '>
        <ul className='p-8 flex gap-4 '>
          {navItems}
        </ul>
      </div>
    </div>
  )
}

export default NavBar

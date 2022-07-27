import React from 'react';
import {Link } from 'react-router-dom'
const NavItem = (props) => {

    const getClicked = (e, name ) =>  {
        if(name == 'APPLY NOW'){
            props.setShowForm(true);
        }
    }
    const getLink = (name) => {
        switch(name){
            case 'HOME':
                return '/';
                break;
            case 'COURSES':
                return '/courses'
                break;
            default:
                return ''
        }
    }
  const {navData, handleActiveness, handleInactiveness } = props;

  return (
    <>
        {navData.name === 'HOME' || navData.name === 'COURSES' || navData.name === 'CONTACT US' || navData.name === 'APPLY NOW'?

       <Link to={ getLink(navData.name)}> <li onClick={(e) => getClicked(e, navData.name)}   className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>{navData.name}</li></Link>:

        <div className='transition-all  duration-500' onMouseEnter={()=>handleActiveness(navData.name)} onMouseLeave={()=>handleInactiveness(navData.name)} >
            <li className=' decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>{navData.name}</li>
            <div className={`${navData.name === 'MATH'? 'mathListItem' : 'subContent'} w-fit h-fit -translate-y-20 p-4 absolute bg-white transition-all duration-500`} style={{display: navData.active ? null : 'none'}}>
                {navData?.dropdownList?.map((dropdownItem, index)=>{
                    return <li className='  hover:cursor-pointer text-black hover:text-[green] hover:px-2 transition-all duration-500' key={index}>{dropdownItem}</li>
                })}
            </div>
        </div>

    }
    </>
  )
}

export default NavItem
import React from 'react';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const NavItem = (props) => {
  const {navData, handleActiveness, handleInactiveness } = props;
  console.log(navData);

  return (
    <>
        {navData.name === 'HOME' || navData.name === 'COURSES' || navData.name === 'CONTACT US' || navData.name === 'APPLY NOW'?

        <li className='decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>{navData.name}</li>:

        <div className='transition-all duration-500' onMouseEnter={()=>handleActiveness(navData.name)} onMouseLeave={()=>handleInactiveness(navData.name)} >
            <li className=' decoration-none text-white hover:text-[green] cursor-pointer transition-all duration-500 p-2'>{navData.name}<KeyboardArrowDownSharpIcon fontSize='2' /></li>
            <div className={`${navData.name === 'MATH'? 'mathListItem' : 'subContent'} w-fit h-fit p-4 absolute bg-white transition-all duration-500`} style={{display: navData.active ? null : 'none'}}>
                {navData?.dropdownList?.map((dropdownItem, index)=>{
                    return <li className='p-1 hover:cursor-pointer hover:text-[green] hover:px-2 transition-all duration-500' key={index}>{dropdownItem}</li>
                })}
            </div>
        </div>

    }
    </>
  )
}

export default NavItem

import React from 'react';

const paras = ['OseeEDU' , 'ready to offer ',  'affordable education to all'];

function Header(props) { 
  var  style = '';
  const getClass = (par) => {
    switch(par){
      case 'ready to offer ':
        style += 'text-[black]';
        break;
      default:
        style += "text-white"
        break;
    }

    return style;
  }
     return(
      <div className="flex invisible md:visible flex-row bg-[#2a2a2a] w-full space-x-1 pl-5 text-white  mx-auto py-1  text-[0.50rem]">
         {paras.map((para, index) => (
          <p  className={getClass(para)} key={index}>{para}</p> 
         ))}
        
      </div>
     )
}

export default Header
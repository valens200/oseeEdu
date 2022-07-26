import React from 'react'
import javaL from '../assets/images/javaL.jpg'
import Reactt from '../assets/images/ReactT.png'
import js from '../assets/images/js.png'
import SQL from '../assets/images/SQL.webp'
import first from '../assets/images/first.jpg'
import first1 from '../assets/images/first1.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.jpg'
import SubFooter from './subFooter'
import {Link } from 'react-router-dom'
const numbers = [1,2,3,'>']
const cardsInfo = [
    { 
        image:first1,
        cost:'$' + 14.00,
        course:'Biology',
        number:12
    },
    { 
        image:first,
        cost:'$' + 22.00,
        course:'Chemistry',
        number:14
    },
    { 
        image:second,
        cost:'$' + 24.00,
        course:'Pysics',
        number:16
    },
    { 
        image:third,
        cost:'$' + 32.00,
        course:'Geography',
        number:18
    },
    { 
        image:javaL,
        cost:'$' + 32.00,
        course:'Java',
        number:22
    },
    { 
        image:SQL,
        cost:'$' + 32.00,
        course:'SQL',
        number:30
    },
    { 
        image:SQL,
        cost:'$' + 32.00,
        course:'Geography',
        number:30
    },
    { 
        image:Reactt,
        cost:'$' + 32.00,
        course:'React',
        number:32
    },
    { 
        image:Reactt,
        cost:'$' + 32.00,
        course:'React',
        number:32
    }
]

function    Cards() {
    const styleGnerator = (num) => {
        if(num == '2'){
            return 'bg-white px-2  rounded bg-[#0dc434] hover:bg-white hover:text-black text-white py-1'
        }else{
            return 'bg-white px-2  rounded bg-white hover:bg-[#0dc434] hover:text-white text-black py-1'
        }
    }
    
  return (
<div>
     <div className=" container w-[84%] mx-auto grid grid-cols-1  md:grid-cols-3  md:space-x-4 space-x-0 space-y-0 gap-1 grid-rows-6 md:grid-rows-3">
      {cardsInfo.map((number, index) =>(
       <Link to="/meetings" >
       <div key={index} className="text-black md:h-[60%] h-[70%]   mt-2 md:mt-0 rounded-lg">
        
        <img className="w-[100%] " src={number.image} alt="image of" />
        <p className="text-black text-center bg-white text-xl md:text-sm w-[30%] md:w-[20%]  font-bold py-1 -translate-y-[60px] md:-translate-y-[120px] box-border px-5 rounded-full pr-4 ">{number.cost}</p>
       <div className="bg-white text-center md:text-start md:p-2 w-[100%] h-[40%] md:h-[30%]">
       <div className="inline-flex text-[2rem] md:text-sm flex-col space-y-1 md:space-y-0 md:flex-row md:space-x-3">
           <p className="text-[#a12c2f]">NOV</p>
           <h1 ClassName="font-bold text-[2rem] ">Biology</h1>
        </div>
        <h1 className="font-bold text-6xl md:text-sm">{number.number}</h1>
        <button className="bg-[#a12c2f] text-white font-bold px-5 py-2 md:px-3 md:py-1 md:float-right md:-translate-y-3 rounded-full">Start now</button>
       </div>
      </div></Link>
      ))}

    </div>
    <div className="flex flex-row justify-center -translate-y-[90%]  my-20 space-x-1 text-[1.2rem]"> 
        {numbers.map((number, index) => (
            <div className={styleGnerator(number)} key={index}>{number}</div>
        ))}
    </div>
    <SubFooter />
   </div>
  )
}

export default Cards
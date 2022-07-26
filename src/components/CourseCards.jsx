import React from 'react'
import javaL from '../assets/images/javaL.jpg'
import Reactt from '../assets/images/ReactT.png'
import js from '../assets/images/js.png'
import SQL from '../assets/images/SQL.webp'
import first from '../assets/images/first.jpg'
import first1 from '../assets/images/first1.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.jpg'
const images = [javaL, Reactt, js, SQL, first, first1, second, third];
const cards = [[Reactt, 'React.js', '$500'], [js, 'Javascript', '$600'] ,[javaL, 'SQL', '$300'], [Reactt, 'React.js', '$500'], [js, 'Javascript', '$600']]
export default function CourseCards(props) {
  return (
    <div className="container w-[85%]  mx-auto flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-6">
        {cards.map((img, index) => (
          <div className="flex w-[80%] mx-auto rounded-lg flex-col">
            <img className="w-[100%]" src={img[0]}/>
            <div className=" bg-white text-black  text-[0.99rem] p-2 ">
                <div className="text-center font-bold border-b-[0.01vh] p-3 border-[grey]">
                    <h1>{img[1]}</h1>
                </div>
                <div className=" text-[#f5a425] font-bold  p-1 flex flex-row justify-between  "> 
                  <p>rating</p>   
                 <p>{img[2]}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

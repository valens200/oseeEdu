import javaL from '../assets/images/javaL.jpg'
import Reactt from '../assets/images/ReactT.png'
import js from '../assets/images/js.png'
import SQL from '../assets/images/SQL.webp'
import first from '../assets/images/first.jpg'
import first1 from '../assets/images/first1.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.jpg'
import React from 'react'
import '../index.css'
import '../App.css'
import  MeetingCards from'../components/meetingCards'
import {useState, useEffect } from 'react'
import Course from '../components/course'
import CourseCards from '../components/CourseCards'
import OseeEdu from '../components/OseeEdu'
import Footer from './Footer'
import SubFooter from '../components/subFooter'
import Main from '../components/main'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const cards = [[javaL, 'SQL', '$300'], [Reactt, 'React.js', '$500'], [js, 'Javascript', '$600'] ,[javaL, 'SQL', '$300'], [Reactt, 'React.js', '$500'], [js, 'Javascript', '$600']]
const Home = () => {
    const [cards, setCards ]  = useState([
    [ 
        'TECHNOLOGY',
        'OseeEDU is a professional software engineers group with'
    ],
    
    [
        'OseeDU  YOUTUBE CHANNLE',
        'OseeEDU is a professional software engineers group with '
    ],
    [ 
        'SCIENCE',
        'OseeEDU is a professional software engineers group with '
    ]
])
const paragraphys = ['SCIENCE COURSES', 'TECHNOLOGY COURSES', 'ENGINEERING COURSES', 'MATHEMATICS COURSES', 'OseeEDU YOUTUBE CHANNEL'];
const courses = ['MACHINE LEANING & DATA SCIENCE', 'SOFTWARE ENGINIEERING', 'WEB DEVELOPMENT', 'DATABASE MANAGEMENT', 'NETWORKING SYSTEM MANAGEMENT']; 

return (
<div>
    <Header />
    <NavBar />
<div className="bg-[#2a2a2a] text-white">
<div className="flex flex-col text-white  h-screen mine space-y-4">
       <div className= "educate overflow-scroll ">
        <div className="px-[9%] translate-y-[30%] md:translate-y-0  py-[13%] bg-[grey] h-screen ">
            <h1 className="font-bold spacing-2">WELLCOME TO OSSEEDU</h1>
             <div className=" leading-5 md:leading-3 text-[0.57rem] mt-3">
                <p>OseeEDU is a professional software engineers group with much experience in Tech</p>
                <p>Industry, we decided to share various tremendous skills to the world. We are happy to</p>
                <p>provide STEM courses to all people for better future, We also have Youtube channel where</p>
                <p>you can get our courses, Here we go!!!!.</p>
             </div>
            <div>
                <button className="bg-[#0dc434] w-[50%]  md:w-[20%]  text-[0.50rem] text-sans font-sans  px-3 py-2 mt-5 rounded-full">LET US KNOW!</button>
            </div>
        </div>
        <div className="container space-x-3 -translate-y-[37%] text-[0.60rem] flex flex-col md:flex-row md:space-x-8 mx-auto">
            {cards.map((card, index) => (
                <div className="myone px-5 py-7 rounded-lg">
                    <h2 className="font-bold text-center">{card[0]}</h2>
                    <div className="text-[0.50rem] ">
                        <p  >{card[1]}</p>
                        <p>{card[1]}</p>
                        <p>{card[1]}</p>
                    </div>  
                </div>
            ))}
        </div>
        <div className="text-white text-center text-[0.60rem] border-[white]  pb-5 border-b-[1px]">
            <h1 className="font-bold ">CURRENT AVAILABLE COURSES</h1>
        </div>
        <div className="container flex flex-col md:flex-row space-x-10  mx-auto">
            <div className="bg-white rounded-xl h-[50%] text-black md:p-4 p-2 text-[0.60rem] w-[80%] text-center md:text-left md:w-[50%] mx-auto md:mx-0  mt-9">
                <div className="border-[#eee] pb-3 border-b-[1px]">
                    <h1 className="font-bold">Course Categories</h1>
                </div>
                <div className="leading-5 ">
                    {paragraphys.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
                
            </div>
            <div>
                <MeetingCards />
            </div>
        </div>
        <div className="myBody grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-3">   
           {courses.map((cose, index) => (
            <Course cose={cose} />  
           ))}
        </div>
    <div className="">
  =    <CourseCards />
    </div>
    <div>
        <OseeEdu />
    </div>
    <div>
        <Footer />
    </div>
    <div className="mt-8">
    <SubFooter />
    </div>
    
    </div>
     </div>
</div>
</div>
  )
}

export default Home
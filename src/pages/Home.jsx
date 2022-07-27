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
import {Link } from 'react-router-dom'
import GetStarted from '../components/GetStarted'
import SmallNav from '../components/SmallNav'
import  {Zoom , Slide}  from 'react-reveal'
import Hero from '../components/Hero'

const cards = [[javaL, 'SQL', '$300'], [Reactt, 'React.js', '$500'], [js, 'Javascript', '$600'] ,[javaL, 'SQL', '$300'], [Reactt, 'React.js', '$500'], [js, 'Javascript', '$600']]
const Home = () => {

    const [message , setMessage ] = useState('')
    const [showForm, setShowForm ] = useState(true)
    const getForm = () => {
        if(showForm) {
            return  <GetStarted setMessage={setMessage} message={message} setShowForm={setShowForm} />
        }else{
            return null
        }
    }
    const getMyForm = (e) =>{
        e.preventDefault();
        setShowForm(true)
        console.log(showForm)
    }
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
  const getNav = () => {
    setDisplayNav(true)
  }
  const [displayNav, setDisplayNav] = useState(false)
const paragraphys = ['SCIENCE COURSES', 'TECHNOLOGY COURSES', 'ENGINEERING COURSES', 'MATHEMATICS COURSES', 'OseeEDU YOUTUBE CHANNEL'];
const courses = ['MACHINE LEANING & DATA SCIENCE', 'SOFTWARE ENGINIEERING', 'WEB DEVELOPMENT', 'DATABASE MANAGEMENT', 'NETWORKING SYSTEM MANAGEMENT']; 

return (
<div className="">
<div className="bg-[#2a2a2a] text-white">
<div className="flex flex-col text-white  h-screen mine space-y-4">
       <div className= "educate overflow-scroll ">
      {/* <div  className="flex flex-row w-[99%] mx-auto">
      <SmallNav displayNav={displayNav} links={links} />
        <button onClick={(e) => getNav(e)} className="text-[3rem]">=</button>
      </div> */}
     <Hero getMyForm={getMyForm} setShowForm={setShowForm} getForm={getForm} />
      <div className="md:-translate-y-[30%] mt-20  md:mt-0 -translate-y-[38%]">
      <Slide left >
       <div className=" hidden md:flex space-x-3 justify-center  text-[0.90rem]  flex-col md:flex-row md:space-x-8 mx-auto">
            {cards.map((card, index) => (
                <Link to="/courses" >
                 <div className="myone px-5  h-[30vh] md:w-[26vw]  w-[95vw] md:mx-0 mx-auto  py-7 rounded-lg">
                    <h2 className="font-bold text-center">{card[0]}</h2>
                    <div className="text-[0.80rem] translate-y-[50%] text-center ">
                        <p >{card[1]}</p>
                        <p>{card[1]}</p>
                        <p>{card[1]}</p>
                    </div>  
                </div>
                </Link>
            ))}
        </div>
       </Slide>
      </div>
        <div className="text-white text-center text-[1.40rem] border-[white]  pb-5 border-b-[1px]">
            <h1 className="font-bold ">CURRENT AVAILABLE COURSES</h1>
        </div>
       <Slide left>
       <div className="container w-[80%] md:w-[90%]  flex flex-col md:flex-row space-x-10  mx-auto">
            <div className="bg-white rounded-xl h-[50%] py-10 text-black md:pl-8  text-[0.60rem] w-[80%] text-center md:text-left md:w-[29%] mx-auto md:mx-0  mt-9">
                <div className="border-[#eee]  translate-x-8 text-[1.4rem] pb-3 border-b-[1px]">
                    <h1 className="font-bold ">Course Categories</h1>
                </div>
              <Slide right>
              <div className="leading-8 text-[0.90rem] translate-x-8  ">
                    {paragraphys.map((para, index) => (
                        <p className="hover:text-[#0dc434]" key={index}>{para}</p>
                    ))}
                </div>
              </Slide>
                
            </div>
            <div>
                <MeetingCards />
            </div>
        </div>
       </Slide>
        <div className="myBody grid grid-cols-1 grid-rows-1 py-10 md:grid-cols-2 md:grid-rows-3">   
           {courses.map((cose, index) => (
            <Course cose={cose} />  
           ))}
        </div>
        <div className="border-[white]  my-10 text-white text-[0.60rem]  pt-[10%] pb-3 border-b-[0.1px]">
            <div className="w-[85%] mx-auto text-[1.3rem] font-bold">
              <h1>OUR POPULAR COURSES</h1>
            </div>
        </div>
   <Slide right > 
   <div className="">
  =    <CourseCards />
    </div>
   </Slide>
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
import React from 'react'
import Mydiv from '../components/Mydiv'
import Buttons from '../components/buttons'
import '../index.css'
import Cards from '../components/cards'
import subFooter from '../components/subFooter'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Cuse from '../components/cuse'
import {useState, useEffect} from 'react'
import GetStarted from '../components/GetStarted'
function Courses(){
    const [message , setMessage ] = useState('')
    const [showForm, setShowForm ] = useState(false)
    const [displayNav, setDisplayNav] = useState(false) 
    const getForm = () => {
        if(showForm) {
            return  <GetStarted  setMessage={setMessage} message={message} setShowForm={setShowForm} />
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
    return (
        <div className="main">
            <Cuse getMyForm={getMyForm} setShowForm={setShowForm} getForm={getForm} />
             <Buttons />
            <Cards subFooter={subFooter} />
        </div>
    )
}
export default Courses
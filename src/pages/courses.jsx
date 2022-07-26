import React from 'react'
import Mydiv from '../components/Mydiv'
import Buttons from '../components/buttons'
import '../index.css'
import Cards from '../components/cards'
import subFooter from '../components/subFooter'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
function Courses(){
    return (
        <div className="main">
            <div>
                <Header />
            </div>
           <div className="bg-white sticky hidden md:block  top-0  ">
              <NavBar />
           </div>
             <Mydiv />
             <Buttons />
            <Cards subFooter={subFooter} />
        </div>
    )
}
export default Courses
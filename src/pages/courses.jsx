import React from 'react'
import Mydiv from '../components/Mydiv'
import Buttons from '../components/buttons'
import '../index.css'
import Cards from '../components/cards'
import subFooter from '../components/subFooter'
function Courses(){
    return (
        <div className="main">
            
            <Mydiv />
            <Buttons />
            <Cards subFooter={subFooter} />
        </div>
    )
}
export default Courses
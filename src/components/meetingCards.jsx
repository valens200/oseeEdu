import React from 'react'
import meeting1 from '../assets/images/meeting1.jpg'
import meeting2 from '../assets/images/meeting2.jpg'
import meeting3 from '../assets/images/meeting3.jpg'
import meeting4 from '../assets/images/meeting4.jpg'
import Slide from 'react-reveal'
import {Link} from 'react-router-dom'


const cardInputs = [[meeting1 , 'SCIENCE'],[meeting2 , 'TECHNOLOGY'], [meeting3 , 'ENGINIEERING'], [meeting4 , 'MATHEMATICS']]
function  MeetingCards () {
    const getElements = (inpt) => {

        switch(inpt){
            case 'SCIENCE':
            return (
               <Slide right>
                 <div  className="w-[80%] mt-2 mx-auto">
                    <p>Bilogy, Chemistry, Physics and Geography</p>    
                </div>
               </Slide>
            )
              break;
            case 'MATHEMATICS':
                return (
                  <Slide right >
                      <div  className="w-[80%] mt-2 mx-auto">
                        <p>Algebra, Geometry, Calculus, Diffrentials</p>
                        <p>Construction Engineering</p>
                    </div>
                  </Slide>
                )
                break;
            case 'TECHNOLOGY':
            return (
              <Slide right>
                  <div className="w-[80%] mt-2 mx-auto">
                    <p>Web development, Software engineering</p>
                    <p>Machine learning, Data science, Networking</p>    
                    <p>Database manupulation</p>                
                </div>
              </Slide>
            )
            break;
            case 'ENGINIEERING':
                return (
                   <Slide right >
                     <div  className="w-[80%] mt-2 mx-auto">
                        <p>Electric, Mechanical, Civil and</p>
                        <p>Construction Engineering</p>
                    </div>
                   </Slide>
                )
        }
    }
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  gap-3 text-[1.3rem] grid-rows-1  md:grid-rows-2 mt-9 md:flex-row md:space-y-0 md:space-x-7">
        {cardInputs.map((input, index) => (
         <Link  key={index}  to="/meetings" >
            <div className="w-[90%] rounded-lg">
                <img className="w-[100%]" src={input[0]} />
                <div className="bg-white p-3 text-[0.90rem] text-black ">
                    <h2 className="font-bold">{input[1]}</h2>
                    <div>
                        {getElements(input[1])}
                    </div>
                </div>
            </div></Link>

        ))}

    </div>
  )
}

export default MeetingCards

import React from 'react'
import playIcon from '../assets/images/playIcon.png'
import Photo from '../assets/images/Photo.jpeg'
import Zoom from  'react-reveal'
import '../App.css'
const paragraphys = ['click on the video and be', 'directed to the youtube', 'channel'];
function OseeEdu() {
  return (
<div className="bg-white my-[13%] h-[75vh] md:h-[62vh]">
<div className="bg-white container w-[88%] h-[100%] pt-2 mx-auto flex flex-col text-[1rem] justify-between  space-y-10 md:flex-row  md:space-y-0 md:space-x-10">
        <div className="text-[#0dc434]   flex flex-col space-y-[6%] md:space-y-[25%]">
           <Zoom  left>
           <div className="pt-3">
                <h1 className="font-bold text-lg text-[2.2rem] text-center md:text-start">OseeEdu YOUTUBE</h1>
            </div>
            <div className="text-[#0dc434]  translate-y-[50%]  text-[0.99rem] text-center ">
                <h1 className="text-[2.2rem] font-bold">100%</h1>
              {paragraphys.map((para, index) => (
                 <p className="text-[1.3rem] " key={index}>{para}</p>
              ))}
            </div>
           </Zoom>
        </div>
       <Zoom duration={700} >
       <div className=" mainn text-center w-[100%] md:w-[40%] h-[100%]">
        <div className="translate-y-[20vh]  md:translate-y-[25vh]">
        <Zoom  duration={900}>
          <img className=" w-[10%] mx-auto  mt-5 z-[100%] relative" src={playIcon} />
          </Zoom>
        </div>
        </div>
       </Zoom>
         


    </div>

</div>
  )
}

export default OseeEdu
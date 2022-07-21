import React from 'react'
import playIcon from '../assets/images/playIcon.png'
import Photo from '../assets/images/Photo.jpeg'
import '../App.css'
const paragraphys = ['click on the video and be', 'directed to the youtube', 'channel'];
function OseeEdu() {
  return (
<div className="bg-white mt-20 mb-40 h-[70vh] md:h-[55vh]">
<div className="bg-white container h-[100%] pt-2 mdpt-0 mx-auto flex flex-col text-[0.60rem] justify-between  space-y-10 md:flex-row  md:space-y-0 md:space-x-10">
        <div className="text-[#0dc434] flex flex-col space-y-[6%] md:space-y-[25%]">
            <div>
                <h1 className="font-bold text-lg text-center md:text-start">OseeEdu YOUTUBE</h1>
            </div>
            <div className="text-[#0dc434]   text-[0.65rem] text-center font-bold">
                <h1>100%</h1>
              {paragraphys.map((para, index) => (
                 <p key={index}>{para}</p>
              ))}
            </div>
        </div>
        <div className=" mainn text-center w-[100%] md:w-[40%] h-[100%]">
             <img className=" w-[10%] mx-auto translate-y-[23vh]  md:translate-y-[25vh] mt-5 z-[100%] relative" src={playIcon} />
        </div>

    </div>

</div>
  )
}

export default OseeEdu
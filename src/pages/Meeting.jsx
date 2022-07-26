import React from 'react'
import meeting from '../assets/images/meeting.jpg'
import single_meeting from  '../assets/images/single_meeting.jpg'
import Mydiv from '../components/Mydiv'
import '../App.css'
import NavBar from '../components/NavBar'
const cost = ['14.00', '12'];

function Meeting() {
  return (
    <div className="main w-[100%]  ">
         {/* <div className="bg-[#ffff0023]">
             <NavBar />
            </div>
           <div className="bg-white sticky   top-0 z-100 ">
              <NavBar />
           </div>
         <Mydiv /> */}
       <div className="container w-[85%]  mx-auto flex-col flex">
            <div className="img w-[100%] rounded-tr-lg rounded-tl-lg ">
         <div className="text-white  z-100 translate-y-[90%] flex flex-row mx-auto container w-[90%]  justify-between">
            {cost.map((cost, index) => (
                cost == 14.00 ? <div className=" text-black  font-bold text-sm  text-center "> <p className="bg-white py-2">$ + {cost}</p> </div> : <div className="bg-white  text-black text-[0.60rem] inline-flex flex-row text space-x-2 px-4 font-bold"><p>Nov</p><p>{cost}</p></div> 
            ))}
        </div>
                <img  className="w-[100%] h-[100%]"src={single_meeting} alt=""></img>
            </div>
            <div className="bg-white text-black">
                <div className=" border-b-[0.1px]  border-[gey] container w-[90%] mx-auto  py-5 px-2">
                    <h1 className="font-bold font-sans text-[0.90rem]">Online Teaching and Learning Tools</h1>
                    <p className="lead text-[1rem] text-[#1f272b]">Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil</p>
                </div>
                <div className=" px-3 py-10 border-[gey] text-[0.90rem]  leading-6 mx-auto container w-[90%] border-b-[0.1px] border-[gey]">
                    <p>This is an edu meeting HTML CSS template provided by <a className="hover:text-[#0dc434] text-[#0a58ca] underline-0" href="https://templatemo.com">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. If you need more free website templates like this one, please visit</p>
                    <p>our website TemplateMo. Please tell your friends about our website. Thank you. If you want to get the latest collection of HTML CSS templates for your websites, you may visit</p>
                    <p> <a className="hover:text-[#0dc434] text-[#0a58ca] underline-0" href="https://www.toocss.com">Too CSS website</a>. If you need a working contact form script, please visit<a className="hover:text-[#0dc434] text-[#0a58ca] underline-0 " href="https://templatemo.com/contact"> our contact page</a> for more info.</p>
                </div>
                <div className=" p-3 border-[gey] text-[0.90rem]  leading-6  mx-auto container w-[90%] border-b-[0.1px] border-[gey]">
                    <p>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout. You are not allowed to</p>
                    <p>redistribute the template ZIP file on any other template website. Please contact us for more information.</p>
                </div>
                <div className=" container  w-[90%] border-b-[0.1px] border-[gey] mx-auto flex flex-col space-y-10 md:space-y-0 md:space-x-10 md:flex-row ">
                    <div  className="  p-3 border-[gey]  text-[0.90rem]  leading-6  mx-auto container w-[90%] border-b-[0.1px] border-[gey]">
                        <h5 className="font-bold text-sm ">Hours</h5>
                        <p>Monday - Friday: 07:00 AM - 13:00 PM</p>
                        <p>Saturday- Sunday: 09:00 AM - 15:00 PM</p>
                    </div>
                    <div  className=" p-3 border-[gey] text-[0.90rem]  leading-6  mx-auto container w-[90%] border-b-[0.1px] border-[gey]">
                        <h5 className="font-bold text-sm ">Location</h5>
                        <p>Recreio dos Bandeirantes,</p>
                        <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                    </div>
                    <div  className=" p-3 border-[gey]text-[0.90rem]  leading-6  mx-auto container w-[90%] border-b-[0.1px] border-[gey]">
                        <h5 className="font-bold text-sm ">Book Now</h5>
                        <p>010-020-0340</p>
                        <p>090-080-0760</p>
                    </div>
                </div>
                <div  className=" container  px-4 py-5 text-[0.70rem]  leading-6  w-[90%] border-b-[0.1px] border-[gey] mx-auto flex flex-row  md:space-y-0 md:space-x-2" >
                    <h1 className="font-bold font-sans text-[0.60rem]">Share:</h1>
                    <p className="md:translate-y-[0.9px] pb-2  text-bold">Facebook, Twitter, Linkedin, Behance</p>
                </div>
            </div>
            <div className="text-center text-[0.90rem] mt-4">
                <button className="rounded-full bg-[#0dc434]  hover:bg-white hover:text-[#0dc434] hover:border-[#0dc434] border-1-[3rem] w-[97%] md:w-[25%]  text-white  py-4 ">BACK TO MEETING LISTS</button>
            </div>
       </div>
       <div className="text-center text-[1.2rem] border-[grey] pt-10 pb-[4%] w-[90%] border-t-[0.1px] mt-[8%]">
                <p className="text-white">COPYRIGHT &copy; 2022 EDU MEETING CO., LTD. ALL RIGHTS RESERVED.</p>
               <div className="inline-flex flex-row text-[#f5a425]">
                <p>DESIGN:</p>
                <p>TEMPLATEMO</p>
               </div>
            </div>
    </div>
  )
}

export default Meeting
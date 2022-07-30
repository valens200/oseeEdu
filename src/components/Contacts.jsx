import React from 'react'
import Slide from 'react-reveal'


const contacts = [['Phone Number', '+250-789-0299-71'], ['Email Address', 'oseentwali2@yahoo.com'], ['Street Address', 'Kabuga, Rusororo']]
const Contacts = () => {
  return (
    <Slide right >
      <div className="text-white rounde-xl md:w-[25%] px-8 text-center md:text-left  text-[0.70rem] p-4 flex flex-col space-y-[20%] bg-[#0dc434] rounded-lg">
      {contacts.map((cont, index) => (
        <div key={index} className="flex justify-around border-b-[0.5px] pb-2 border-b-[white]  flex-row md:flex-col">
          <h5 className="text-[1.2rem] font-bold">{cont[0]}</h5>
          <h1 className="text-[1.2rem] font-bold">{cont[1]}</h1>
        </div>
      ))}
    </div>
    </Slide>
  )
}

export default Contacts

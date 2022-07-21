import React from 'react'


const contacts = [['Phone Number', '+250-789-0299-71'], ['Email Address', 'oseentwali2@yahoo.com'], ['Street Address', 'Kabuga, Rusororo']]
const Contacts = () => {
  return (
    <div className="text-white rounde-xl text-center md:text-left  text-[0.70rem] p-4 flex flex-col space-y-7 bg-[#0dc434] rounded-lg">
      {contacts.map((cont, index) => (
        <div className="flex justify-around border-b-[0.5px] pb-2 border-b-[white]  flex-row md:flex-col">
          <h5 className="text-[0.60rem]">{cont[0]}</h5>
          <h1 className="font-bold">{cont[1]}</h1>
        </div>
      ))}
      
      
    </div>
  )
}

export default Contacts
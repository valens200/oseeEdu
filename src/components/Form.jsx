import React from 'react'
import {useState, useEffect} from 'react'
const inputs = ['YOURNAME...', 'YOUREMAIL...', 'SUBJECT...'];
const Form = () => {
  const [email, SetEmail] = useState();
  const [subject , setSubject ] = useState();
  const [message, setMessage] = useState();
 const getName = (name) => {
  if(name == 'YOURNAME...'){
    return 'name';
  }else if(name == 'YOUREMAIL...'){
    return 'email'
  }else if(name == 'SUBJECT...'){
    return 'subject'
  }else{
    return ''
  }
 }
 const getType = (name) => {
  if(name == 'YOUREMAIL...'){
    return 'email'
  }else{
    return 'text'
  }

 }
  const handleSubmit = (e) => {
  e.preventDefault();
  }
  return (
    <div className="flex w-[96%] md:w-[80%] text-[0.60rem]  mx-auto   bg-white flex-col space-y-9">
      <div className="text-black font-bold text-[0.86rem] w-[87%] pt-3 pb-3 border-b-[0.9px] border-[#8080801c] mx-auto ">
        <h1>LET'S GET IN TOUCH</h1>
      </div>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e.target.value)}>
        <div className="flex flex-col w-[100%] md:w-[92%] mx-auto md:flex-row justify-around">
        {inputs.map((input , index) => (
            <input className="bg-[#7a7a7a45] my-4    w-[90%] md:w-[30%] mx-auto rounded-full  px-3 py-3 md:py-1" type={getType(input)} name={getName(input)} placeholder={input} />
          ))} 
        </div> 
        <div className="w-[90%] h-[20vh] mx-auto">
          <textArea name="message" className="bg-[#7a7a7a45] rounded-lg p-4 w-[100%] h-[100%]"   placeholder="YOUR MESSAGE" />
        </div>
        <div className="w-[90%] mx-auto p-2">
          <button className="bg-[#0dc434] text-white hover:bg-white hover:text-[#0dc434] hover:border px-4 py-3 rounded-full" >SEND MESSAGE NOW</button>
        </div>
        </form>
      </div>
     
    </div>
  )
}

export default Form

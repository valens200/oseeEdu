import React from 'react'
import {useState, useEffect} from 'react'
import MyPortal from './MyPortal'
import axios from 'axios'
import { Zoom } from 'react-reveal'
const inputs = ['YOURNAME...', 'YOUREMAIL...', 'SUBJECT...'];
const Form = () => {
  const [email, SetEmail] = useState();
  const [subject , setSubject ] = useState();
  const [message, setMessage] = useState();
  const [message1, setMessage1] = useState('');
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
 const getMyClass = (ms) => {
  if(ms == 'Email not exist' || ms == "please fill out all the fields are required"){
    return 'bg-red-600 rounded text-white p-2'
  }else{
    return 'bg-[orange] rounded text-white p-2'
  }
 }
 const getData = (message, info) => {
  switch(info){
    case 'YOUREMAIL...':
      SetEmail(message)
      break;
    case 'SUBJECT...':
      setSubject(message)
      break;
    default:
      setSubject('hello');
      break;

  }
 }
  const handleSubmit =  async(e) => {
  e.preventDefault();
  try{
    const response =  await axios.post('https://osse-edu.herokuapp.com/email', {
      email:email,
      subject:subject,
      text:message
  });
   setMessage1(response.data.message)
   console.log(response.data)
  }catch(err){
    setMessage1(err.response.message)
    console.log(err.response.data)
  }
  }
  const getMessage = () => {
    if(message1 == "") {
      return null;
    }else{
      return  <p class={getMyClass(message1)}>{message1}</p>
    }
  }


  return (
 <Zoom  >
     <div className="flex w-[96%] md:w-[68%]  rounded-lg text-[0.90rem] p-5  mx-auto   bg-white flex-col ">
      <div className="text-black font-bold text-[0.86rem] w-[87%] py-5 border-b-[0.9px] border-[#8080801c] mx-auto ">
        <h1>LET'S GET IN TOUCH</h1>
      {getMessage()}
      </div>
      {/* <MyPortal  message={message}/> */}
      <div>
        <form  method="POST" action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col w-[100%] md:w-[92%] mx-auto md:flex-row justify-around">
        {inputs.map((input , index) => (
            <input key={index} onChange={(e) => getData(e.target.value, input)} className="bg-[#7a7a7a45] my-4    w-[90%] md:w-[30%] mx-auto rounded-full  px-3 py-3 md:py-1" type={getType(input)} name={getName(input)} placeholder={input} />
          ))} 
        </div> 
        <div className="w-[90%]  mt-4 h-[20vh] mx-auto">
          <textarea onChange={(e) => setMessage(e.target.value)} name="message" className="bg-[#7a7a7a45] rounded-lg p-4 w-[100%] h-[100%]"   placeholder="YOUR MESSAGE" />
        </div>
        <div className="w-[90%] mx-auto p-2">
          <button className="bg-[#0dc434] text-white  md:w-[30%] mt-4 hover:bg-white hover:text-[#0dc434] hover:border px-4 py-3 rounded-full" >SEND MESSAGE NOW</button>
        </div>
        </form>
      </div>
     
    </div>
 </Zoom>
  )
}

export default Form

import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'
const inputs = ['FullNames', 'Username', 'Email', 'password', 'Get started'];
const subInputs = ['Email','password' , 'Get started'];

function GetStarted({setShowForm, message, setMessage}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [isChanged , setIsChanged ] = useState(true)
    const [message2, setMessage2] = useState('');
    const getType = (input) => {
       if(input == 'Email'){
        return 'email';
       }else{
        return 'text';
       }
    }
    const changeState = (e, inpt, data) => {
        switch(inpt){

            case 'FullNames':
                 setFullName(data)
                 setMessage('')
                 console.log(inputs)
                 break;
            case 'password':
                setPassword(data)
                setMessage('')
                setMessage2('')
                break
            case 'Username':
                setUsername(data)
                console.log(username)
                setMessage('')
                break  
            case 'Email' :
                setEmail(data)
                console.log(email)
                setMessage('')
                setMessage2('')
                break 
            default:
                console.log('osee')  
            
        }
    }
    const getClass = (input) => {
        if(input == 'Get started'){
            return 'border w-[100%] p-1 font-bold rounded bg-[#0dc434] text-white'
        }else{
            return 'border w-[100%] rounded p-1'
        }
    }
    const getElement = (input) => {
        if(input == 'Get started'){
            return  <input className={getClass(input)} type="submit" name={input}   />

        }else{
            return  <input onChange={(e) => changeState(e, input, e.target.value)} className={getClass(input)} type={getType(input)} name={input}  placeholder={input} />
        }
    }
 const main = (e) => {
    e.preventDefault()
    setIsChanged(false)
 }
 const main2 = (e) => {
    e.preventDefault();
    setIsChanged(true)
 }
 const close = (e) => {
    e.preventDefault()
    setShowForm(false)
 }
 const getMess = () => {
    if(message2 == ''){
        return null
    }else{
        return  <p className="text-center bg-red-500 text-white font-bold p-2 ">{message2}</p>
    }
 }
 const getMessi = () => {
    if(message == ''){
        return null
    }else{
        return  <p className="text-center bg-red-500 text-white font-bold p-2 ">{message}</p>
    }
 }

 const getStarted =  async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post('https://osse-edu.herokuapp.com/register', {
            Email:email,
            userName:username,
            Password:password,
            FullName:fullName
        })

       setMessage(response.data) 
    }catch(err) {
        setMessage(err.response.data)
    }

 }
 const login = async(e) => {
  try{
    e.preventDefault();
    const response = await axios.post('https://osse-edu.herokuapp.com/login', {
        Email:email,
        Password:password
    })
      setShowForm(false)
    console.log(response.data)
  }catch(err) {
    setMessage2(err.response.data)
  }
 }

   return isChanged ? (
    <div className=" text-black text-[0.90rem] w-[100%] md:w-[70%] mt-[10%] mx-auto md:mx-0 p-10 rounded-lg bg-white">
    <form onSubmit={(e) => getStarted(e)}>
        <div className="font-bold justify-center flex space-x-2">
            <h1  className="text-center">Apply now </h1>
            <h1 className="text-yellow-400 text-[0.80rem] my-2 -translate-y-[34%]  invisible text-center">oseeEdu</h1>
            <button className="-translate-y-[21%] " onClick={(e) => close(e)}>close</button>
        </div>
      
      <div>
      {getMessi()}  
    <div className="mt-3">
    {inputs.map((input, index) => (
            <div key={index} className="font-bolder mt-2">
               {getElement(input)}
            </div>
        ))}
    </div>
    <div className="flex justify-between mt-3">
        <div>Already have Applied ???</div>
        <div className="text-yellow-400"><button  onClick={(e) => main(e)}>Enter</button></div>
    </div>
      </div>
    </form>
</div>
   ):  (
    <div className=" text-black text-[0.90rem] w-[90%]  md:w-[70%] mt-[10%] mx-auto pt-4   md:mx-0 px-5 pb-[20%] md:p-20 rounded-lg bg-white">
        {getMess()} 
        <form onSubmit={(e) => login(e)}>
            <div className="font-bold justify-center  flex space-x-2">
                <h1  className="text-center">Login </h1>
                <h1 className="text-yellow-400 invisible  text-[0.80rem] text-center">oseeEdu</h1>
                <button className="" onClick={(e) => close(e)}>close</button>
            </div>
          <div>
        <div className="mt-3 translate-y-[3vh]">
        {subInputs.map((input, index) => (
                <div key={index} className="font-bolder mt-2">
                   {getElement(input)}
                </div>
            ))}
        </div>
        <div className="flex justify-between mt-3 translate-y-[8vh]">
            <div>Don't  have Apllied  yet ???</div>
            <div className="text-yellow-400"><button type="button" onClick={(e) => main2(e)}>Apply now</button></div>
        </div>
          </div>
        </form>
    </div>
  )
}

export default GetStarted
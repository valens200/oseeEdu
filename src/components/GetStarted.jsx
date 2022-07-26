import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'
const inputs = ['FullNames', 'Username', 'Email', 'password', 'Get started'];
const subInputs = ['Username or Email','password' , 'Get started'];

function GetStarted({setShowForm, message, setMessage}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');


    const [isChanged , setIsChanged ] = useState(true)
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
                 console.log(inputs)
                 break;
            case 'password':
                setPassword(data)
                break
            case 'Username':
                setUsername(data)
                console.log(username)
                break  
            case 'Email' :
                setEmail(data)
                console.log(email)
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
    e.preventDefault()
    setIsChanged(true)
 }
 const close = (e) => {
    e.preventDefault()
    setShowForm(false)
 }
 

 const getStarted =  async(e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:4000/register', {
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
    e.preventDefault();
    
 }

   return isChanged ? (
    <div className="  -translate-y-[80%] text-black text-[0.90rem] w-[100%] md:w-[30%] mx-auto md:mx-0 p-10 rounded-lg bg-white">
    <form onSubmit={(e) => getStarted(e)}>
        <div className="font-bold justify-center flex space-x-2">
            <h1  className="text-center">Get started to </h1>
            <h1 className="text-yellow-400 text-[0.80rem] my-2 -translate-y-[34%]  text-center">oseeEdu</h1>
            <button className="-translate-y-[21%] " onClick={(e) => close(e)}>close</button>
        </div>
        <div>{message}</div>
      <div>
    <div className="mt-3">
    {inputs.map((input, index) => (
            <div key={index} className="font-bolder mt-2">
               {getElement(input)}
            </div>
        ))}
    </div>
    <div className="flex justify-between mt-3">
        <div>Already have an account ???</div>
        <div className="text-yellow-400"><button  onClick={(e) => main(e)}>Login</button></div>
    </div>
      </div>
    </form>
</div>
   ):  (
    <div className=" -translate-y-[80%]  text-black text-[0.90rem] h-[32vh] md:h-[48vh] w-[100%] md:w-[30%] mx-auto md:mx-0 pt-10 px-4  rounded-lg bg-white">
        <form onSubmit={(e) => login(e)}>
            <div className="font-bold justify-center translate-y-[3vh] flex space-x-2">
                <h1  className="text-center">Login </h1>
                <h1 className="text-yellow-400 invisible  text-[0.80rem] -translate-y-[1%]  text-center">oseeEdu</h1>
                <button className="-translate-y-[10%]" onClick={(e) => close(e)}>close</button>
            </div>
          <div>
        <div className="mt-3 translate-y-[6vh]">
        {subInputs.map((input, index) => (
                <div key={index} className="font-bolder mt-2">
                   {getElement(input)}
                </div>
            ))}
        </div>
        <div className="flex justify-between mt-3 translate-y-[8vh]">
            <div>Don't  have an account ???</div>
            <div className="text-yellow-400"><button type="button" onClick={(e) => main2(e)}>Sign Up</button></div>
        </div>
          </div>
        </form>
    </div>
  )
}

export default GetStarted
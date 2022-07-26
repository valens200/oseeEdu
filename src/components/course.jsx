import React from 'react'

function Course(props) {
    const generateText = (element) => {
        switch (element){
            case 'MACHINE LEANING & DATA SCIENCE':
                return (
                    <div>
                        <p>get deph understanding of Machine Learning and artificial intelligence using</p>
                        <p>Python</p>
                    </div>
                )
            case 'SOFTWARE ENGINIEERING':
                return (
                    <div>
                        <p>Learn how to build the applications and various systems using JAVA, C and</p>
                        <p>C++</p>
                    </div>
                )
            case 'WEB DEVELOPMENT':
                return (
                    <div>
                        <p>Explore more about HTML,CSS, JavaScript, ReactJs frontend Framework, NodeJs</p>  
                        <p>Backend Framework and MongoDB, PHP</p>
                    </div>
                )
            case 'DATABASE MANAGEMENT':
                return (
                    <div>
                        <p>Manipulate data using relation DBMS such as SQL, POSTGRESQL, MYSQL ORACLE</p>
                        <p>and non-relational as MONGODB</p>
                    </div>
                )
            case 'NETWORKING SYSTEM MANAGEMENT':
                return (
                    <div className="w-[100%]">
                        <p>Get more skills related to Networks Configuration, IPV4 & IPV6 Configuration,</p>
                        <p>Linux Administration and more network related skills</p>
                    </div>
                )
        }

    }
  return (
    <div className="mx-auto  w-[80%] rounded-lg  p-3 mt-4 bg-[#ffffff1e] flex flex-col text-[0.90rem] space-y-2 ">
        <div>
            <h1>{props.cose}</h1>
        </div>
          {generateText(props.cose)}
        <div>
            <button className="text-white text-[0.50rem ] px-4 py-1 rounded-full bg-[#0dc434] px-">JOIN US NOW!</button>
        </div>

    </div>
  )
}
export default Course
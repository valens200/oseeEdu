import React from 'react'
import Form from '../components/Form'
import Contacts from '../components/Contacts'

function Footer() {
  return (
    <div className=" container mx-auto flex flex-col space-y-8 md:space-x-5 md:space-y-0 md:flex-row">
        <Form />
        <Contacts />
        
    </div>
  )
}

export default Footer
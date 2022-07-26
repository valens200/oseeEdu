import React from 'react'
import ReactDOM from 'react-dom'

function MyPortal() {
  return ReactDOM.createPortal(
    <div className="bg-white w-[30%]  mx-auto text-center rounded-lg sticky border p-8  -translate-y-40">
    <div className="container flex justify-between">
    <div>
     <p>message</p>
     </div>
     <div>
        <p>close</p>
     </div>
    </div>
    </div>, document.getElementById("rootPortal")
  )
}

export default MyPortal
import React from 'react'

const Output = (props) => {
  return (
    <div>
        <div className='mt-5 shadow w-50 m-auto p-5'>
            <h4>
                <span>Name -    </span> {props.name}
            </h4>
            <h4>
                <span>Email -     </span> {props.email}
            </h4>
            <h4>
                <span>MobileNo -</span>   {props.mobileNo}
            </h4>

        </div>
      
    </div>
  )
}

export default Output

import React from 'react'
import Form from '../../components/shared/Form/Form'

const Register = () => {
  return (
    <>
    <div className="row g-0"   style={{backgroundColor:"pink"}} >
      <div className="col-md-15 form-container"  >
          <Form    formType={"register"} formTitle={"Register Page"} submitBtn={"Register"}/>
          </div>
    </div>
    </>
  )
}

export default Register
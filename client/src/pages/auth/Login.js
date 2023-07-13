import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector} from 'react-redux'
import Spinner from "../../components/shared/Spinner";

const Login = () => {
   const {loading,error} = useSelector(state=> state.auth)

 
  return (
    <>
      {error && <span></span>}
      {loading?<Spinner/> : 
      
          <div className="row g-0  "   style={{backgroundColor:"pink"}} >
        <div    className="col-md-15 form-container  "    >
        <Form     style={{color:"#FFCC00"}}
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              /> </div>
          </div>
      }
      
   </>
  );
};

export default Login;
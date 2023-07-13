import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin=(e,email,password,role)=>{
    e.preventDefault();
    try {
        if(!role || !password || !email)
        {
            return alert('Plese fill All the filed')
        }
        // yaha se data store me bhejenge
       store.dispatch(userLogin({email,password,role}))
       
        

      //   console.log("login", email,password,role)
    } catch (error) {
        console.log(error); 
    }
}

export const handleRegister=(e,name,role,email,password,organisationName,hospitalName,website,address,phone)=>{
   e.preventDefault();
    try {
     store.dispatch(userRegister({name,role,email,password,organisationName,hospitalName,website,address,phone}))    
    } catch (error) {
        console.log(error);
    }
}
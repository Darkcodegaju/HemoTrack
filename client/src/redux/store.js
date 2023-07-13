import { configureStore  } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
// store create kiya

const store = configureStore({

    
    // store me reducer banyaenge taki provide kar skasividha
    reducer:{
        auth:authSlice.reducer,
        
    }
    
})


export default store;
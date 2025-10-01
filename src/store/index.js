import {configureStore,createSlice} from "reduxjs/toolkit";

const SignUpSlice = createSlice({
  name : "SignUp",
  initialState : {Status:false , Role:"user"},
  reducers : {
    SignUp: (state,action)=>{}
  }
})

const WildLifeStore = configureStore({reducer:{
  Signup : SignUpSlice.reducer
}})

export default WildLifeStore;
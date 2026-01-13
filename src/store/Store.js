import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "./UserSlice";
//import paymentReducer from "./PaymentSlice";
//import cartSlice from "./CartSlice";
import cartReducer from "./CartSlice";
const appStore=configureStore({
  reducer:{
    cart:cartReducer //cartSlice
    //user:userReducer
   // payment:paymentReducer
  },
});
export default appStore;
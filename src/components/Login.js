import React, { useState } from "react";
const Login=()=>{
     // const [formData,setFormData]=useState();
     const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
      const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Email:",email);
        console.log("Password:",password);
      }
    return(
        
            <div className="flex items-center justify-center w-full h-[80vh] bg-gray-200">
           <form onSubmit={submitHandler} className="flex flex-col gap-10 bg-white p-10 rounded-lg shadow-md w-[40%]">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border border-gray-400 rounded-md px-4 py-2" type="email" placeholder="Enter your email"></input>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-gray-400 rounded-md px-4 py-2" type="password" placeholder="Enter your password"></input>
            <button className="bg-black text-white rounded-lg px-2 py-2">Login</button>
           </form>
            </div>
        
    )
}
export default Login;
import React,{ useState } from "react";
import Accordian from "./Accordian";
const Men=()=>{
    const [open,setOpen]=useState(0);
    return (
        <div className="max-w-6xl mx-auto mt-10">
        <h1 className="font-bold text-xl mb-5">Filter Options</h1>
        {["Brand","Gender","Kids","Mens"].map((title,index)=>(
            //this is how props are passed from parent to child
            //Accordian is a cotrolled component here which is controlled by Men component(Parent component of Accordian)
            <Accordian 
            key={index} 
            title={title}
            open={index===open?true:false}
            setOpen={()=>setOpen(index)}
            />
        ))}
        </div>
    )
};
export default Men;
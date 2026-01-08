import {useState} from "react";
const Profile=(props)=>{
    const {name,address,email}=props;
    const[count,setCount]=useState(0);
    return(
        <div style={{
            border:"1px solid black", padding:"10px"
            }}>
            <h1>Profile Functional Component</h1>
            <h3>Name:{name}</h3>
            <h3>Address:{address}</h3>
            <h3>Email:{email}</h3>
            <h3>Count-{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )

};
export default Profile;
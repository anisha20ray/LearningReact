import React from "react";
class ProfileClass extends React.Component{
constructor(props){
    super(props);
    console.log("Profile Class Constructor");
    this.state={
        count:0,
        counter:0,
    }
  
}

componentDidMount(){
    //used for api calls and side effects
    console.log("Profile Class Component Did Mount");
}
render(){
    console.log("Profile Class Render");
    return(
        <div style={{
            border:"1px solid black", padding:"10px"
        }}>
            <h1>Profile Class Component</h1>
            <h3>Name:{this.props.name}</h3>
            <h3>Address:{this.props.address}</h3>
            <h3>Email:{this.props.email}</h3>
            <h3>Count-{this.state.count}</h3>
            <h3>Counter-{this.state.counter}</h3>
            {/* you cant update state variables directly */}
            <button onClick={()=>
                this.setState({
                    count:this.state.count+1,
                    counter:this.state.counter+1,
                })}>Increment</button>
        </div>
    )
}
}
export default ProfileClass;

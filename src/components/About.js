import Profile from "./Profile";
import ProfileClass from"./ProfileClass";
import { Component } from "react";  
/*const About=()=>{
    return (
        <div>
        <Profile name="Ray Anisha" address="Hyderabad" email="ray@gmail.com"/> //props
        <ProfileClass name="Anisha" address="Hajipur" email="bhaskar@gmail.com"/>
        </div>
    )
};
export default About;*/

class About extends Component{
    constructor(){
    super();
    this.state={
     count:0,
    }
}
 /*componentDidMount(){
    console.log("About Component Did Mount");
    this.setState({
        count:this.state.count+1,
    })
  }*/

        render(){
        return(
            <div>
 <ProfileClass name="Anisha" address="Hajipur" email="bhaskar@gmail.com"/>
        </div>
        )
    }
}
export default About;

/**
 * about constructor
 * about render
 * profile class constructor
 * profile class render
 * profile class constructor
 * profile class render
 * profile class component did mount
 * profile class component did mount 
 * about component did mount
 */
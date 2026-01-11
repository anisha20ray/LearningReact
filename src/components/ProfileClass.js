import React from "react";


class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Profile Class Constructor");

    this.state = {
      userDetails: null,
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("Profile Class Component Did Mount");

    const data = await fetch("https://api.github.com/users/anisha20ray");
    const resData = await data.json();

    this.setState({
      userDetails: resData,
    });

    // this.timer = setInterval(() => {
    //   console.log("Namaste React Interval");
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count
      // || this.state.count2 !== prevState.count2
    ) {
      console.log("Profile Class Component Did Update");
    }

    // if (this.state.listOfProduct !== prevState.listOfProduct) {
    //   console.log("Profile Class Component Did Update");
    // }
  }

  componentWillUnmount() {
    console.log("Profile Class Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Profile Class Render");

    if (this.state.userDetails === null) {
      return <h1>Loading...</h1>;
    }

    const { name, login, id, avatar_url } = this.state.userDetails;

    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h1>Profile Class Component</h1>
        <h3>Name: {name}</h3>
        <h3>Login_id: {login}</h3>
        <h3>Id: {id}</h3>
        <img src={avatar_url} alt="Avatar" width="150" />
      </div>
    );
  }
}

export default ProfileClass;

import React from "react";
const CompoC = ({user}) => {
  return (
  <div className="border border-black">
   <h1>User Profile</h1>
   <p>Name: {user.name}</p>
   <p>Email: {user.email}</p>
    </div>
    );
};
export default CompoC
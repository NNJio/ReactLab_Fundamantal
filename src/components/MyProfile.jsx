import React from "react";

function MyProfile({ data }) {
  return (
    <div>
      <h2>I'm form my profile component</h2>
      <p>My name is {data.firstName} {data.lastName}</p>
      <img src={data.imgPic} alt={data.firstName} />
    </div>
  );
}

export default MyProfile;

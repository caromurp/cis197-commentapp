import React from "react";

const Post = () => {
  const [state, setState] = React.useState({
    name: "",
    postText: "",
  });

  handleChange = (e) => {};

  return (
    <div style={{ borderRadius: 20, borderColor: "gray" }}>
      <p style={{ color: "blue" }}>{state.name}</p>
      <p>{state.postText}</p>
      <button onClick={handleChange}>Reply</button>
    </div>
  );
};

export default Post;

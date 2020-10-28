import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/";

const PostForm = ({ addPost }) => {
  console.log("in POSTFORM");
  const [state, setState] = React.useState({
    name: "",
    postText: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(state.name, state.postText, 0);
    setState({
      name: "",
      postText: "",
    });
  };

  return (
    <form
      style={{ textAlign: "center", fontFamily: "Helvetica" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={state.name}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        name="postText"
        placeholder="Write a post"
        value={state.postText}
        onChange={handleChange}
      />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPost: (name, postText, parent) =>
    dispatch(addPost(addPost(name, postText, parent))),
});

export default connect(mapDispatchToProps)(PostForm);

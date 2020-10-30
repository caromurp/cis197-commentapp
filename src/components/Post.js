import React, { useState } from "react";
import ReplyForm from "./ReplyForm";
import s from "styled-components";

const Post = ({ post, children }) => {
  const [votes, setVotes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = () => {
    console.log("isClicked!!!");
    setIsClicked(true);
  };

  const handleUpVote = () => {
    setVotes(votes + 1);
  };

  const handleDownVote = () => {
    setVotes(votes - 1);
  };

  console.log(post);

  return (
    <Thread>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      > */}
      <Single>
        <p style={{ padding: 10, fontFamily: "Helvetica", color: "blue" }}>
          {post.name}
        </p>
        <p style={{ padding: 10, fontFamily: "Helvetica" }}>{post.postText}</p>
        <div style={{ padding: 10 }}>
          {post.nest < 2 &&
            (isClicked ? (
              <ReplyForm parent={post} />
            ) : (
              <button onClick={handleChange}>Reply</button>
            ))}
        </div>
        <div style={{ align: "right" }}>
          <button onClick={handleUpVote}>Up-vote</button>
          <p style={{ fontFamily: "Helvetica" }}>{votes}</p>
          <button onClick={handleDownVote}>Down-vote</button>
        </div>
      </Single>
      {children}
    </Thread>
  );
};

const Thread = s.div`
  border: 1px solid red;
  padding: 20;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Single = s.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export default Post;

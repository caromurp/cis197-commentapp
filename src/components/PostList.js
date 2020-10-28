// construct Tree
// take in post arrya from erdux store and make tree everytime you render
import posts from "../reducers/posts";
import Post from "./Post";
import { connect } from "react-redux";
import React, { useState } from "react";

const PostList = ({ posts }) => {
  console.log("Posts", posts);
  const [postTree, setPostTree] = useState([]);

  setPostTree(constructTree(posts));

  return (
    <div>
      {postTree.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

const constructTree = (posts) => {
  let postTree = [];
  posts.forEach((post) => {
    if (post.parent === 0) {
      postTree.push({
        id: post.id,
        name: post.name,
        postText: post.postText,
        children: [],
      });
      posts.remove(post);
    }
  });
  postTree.forEach((postNode) => {
    postNode.children = findChildren(posts, postNode.id);
  });
  return postTree;
};

const findChildren = (posts, parentId) => {
  let children = [];
  posts.forEach((post) => {
    if (post.parent === parentId) {
      children.push(post);
      post.children = findChildren(posts, post.id);
    }
  });
  return children;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PostList);

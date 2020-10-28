let postId = 1;

export const addPost = (name, postText, parent) => ({
  type: "ADD_POST",
  name,
  postText,
  parent,
  id: postId++,
});

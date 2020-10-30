let postId = 1

export const addPost = (name, postText, parent, nest) => ({
  type: 'ADD_POST',
  name,
  postText,
  parent,
  nest,
  id: postId++,
})

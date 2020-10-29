const posts = (state = [], action) => {
  const { type, name, postText, parent, nest, id } = action;

  switch (type) {
    case "ADD_POST":
      return [...state, { name, postText, parent, nest, id }];
    default:
      return state;
  }
};
export default posts;

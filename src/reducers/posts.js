const posts = (state = [], action) => {
  const { type, name, postText, parent, id } = action;

  switch (type) {
    case "ADD_POST":
      return [...state, { name, postText, parent, id }];
    default:
      return state;
  }
};
export default posts;

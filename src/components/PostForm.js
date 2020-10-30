/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const PostForm = ({ addPost }) => {
  const [state, setState] = React.useState({
    name: '',
    postText: '',
    parent: 0,
    nest: 0,
  })

  const handleChange = e => {
    const { value } = e.target
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addPost(state.name, state.postText, state.parent, state.nest)
    setState({
      name: '',
      postText: '',
      parent: 0,
      nest: 0,
    })
  }

  return (
    <form
      style={{ textAlign: 'center', fontFamily: 'Helvetica' }}
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
  )
}

const mapDispatchToProps = dispatch => ({
  addPost: (name, postText, parent, nest) => dispatch(addPost(name, postText, parent, nest)),
})

export default connect(null, mapDispatchToProps)(PostForm)

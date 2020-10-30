import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import PostList from './PostForm'

const ReplyForm = ({ parent, addPost }) => {
  const [state, setState] = React.useState({
    name: '',
    postText: '',
    parent: parent.id,
    nest: parent.nest + 1,
  })

  const handleChange = (e) => {
    const value = e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost(state.name, state.postText, state.parent, state.nest)
    setState({
      name: '',
      postText: '',
      parent: parent.id,
      nest: parent.nest + 1,
    })
    return <PostList />
  }

  const placeHolderForReply = `Reply to @ ${parent.name}`

  return (
    <form
      style={{ textAlign: 'left', fontFamily: 'Helvetica' }}
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
        placeholder={placeHolderForReply}
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

export default connect(null, mapDispatchToProps)(ReplyForm)

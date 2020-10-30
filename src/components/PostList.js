/* eslint-disable react/jsx-filename-extension */
import { connect } from 'react-redux'
import React, { useState } from 'react'
import Post from './Post'

const findChildren = (posts, parentId) => {
  const children = []
  posts.forEach(post => {
    if (post.parent === parentId) {
      children.push(post)
      post.children = findChildren(posts, post.id)
    }
  })
  return children
}

const constructTree = posts => {
  let postTree = []
  posts.forEach(post => {
    if (post.parent === 0) {
      postTree.push({
        id: post.id,
        name: post.name,
        postText: post.postText,
        nest: post.nest,
        children: [],
      })
    }
  })
  postTree.forEach(postNode => {
    postNode.children = findChildren(posts, postNode.id)
  })
  return postTree
}

const RecursivePostList = ({ postTree }) => {
  return (
    <div>
      {postTree.map(post => (
        <div key={post.id}>
          <Post post={post}>
            <RecursivePostList postTree={post.children} />
          </Post>
        </div>
      ))}
    </div>
  )
}

const PostList = ({ posts }) => {
  let postTree = constructTree(posts)

  return <RecursivePostList postTree={postTree} />
}

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps)(PostList)

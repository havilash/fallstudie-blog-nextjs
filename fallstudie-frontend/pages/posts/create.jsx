import React from 'react'
import PostForm from '@components/PostForm'

export default function create() {
  return (
    <div className='post' >
        <img src="https://picsum.photos/300/300" alt=""/>
        <PostForm />
    </div>
  )
}

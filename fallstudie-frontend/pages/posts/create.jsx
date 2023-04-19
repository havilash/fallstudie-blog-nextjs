import React from 'react'
import PostForm from '@components/PostForm'
import { useRedirectToLogin } from '@lib/session'

export default function PostsCreatePage({session}) {
  useRedirectToLogin(session)

  return (
    <div className='post' >
        <img src="https://picsum.photos/300/300" alt=""/>
        <PostForm session={session}/>
    </div>
  )
}

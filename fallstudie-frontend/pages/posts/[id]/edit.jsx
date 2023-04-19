import React, { useEffect, useState } from 'react'
import PostForm from '@components/PostForm'
import { useRouter } from 'next/router'
import { getPostById } from '@lib/api'
import { useRedirectToLogin } from '@lib/session'

export default function PostsIdEditPage({session}) {
    useRedirectToLogin(session)

    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState({})
    
    useEffect(() => {
        if (!id) return

        try {
            getPostById(id)
                .then(p => setPost(p))
        } catch(e) {
            console.log(e)
        }
        
    }, [id])


  return (
    <div className='post' >
        <img src="https://picsum.photos/300/300" alt=""/>
        {id !== undefined && <PostForm postToEdit={{...post, id: parseInt(id)}} session={session}/>}
    </div>
  )
}

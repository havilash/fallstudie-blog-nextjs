import React, { useEffect, useState } from 'react'
import { deletePost, getPostById } from '@lib/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css'

export default function PostsIdPage({session}) {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)
    
    useEffect(() => {
        if (!id) return

        try {
            getPostById(id)
                .then(p => setPost(p))
        } catch(e) {
            console.log(e)
        }
        
    }, [id])

    function handleDelete() {
        deletePost(post.id, session.token)
        router.push('/')
    }

    function renderPost() {
        console.log(post)
        return (
            <div>
                <div className='post'>
                    <img src="https://picsum.photos/300/300" alt="" />
                    <div>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.text}</p>
                        </div>
                        <div className='dates'>
                            <span>Created At: {post.createdAt}</span><br />
                            <span>Updated At: {post.updatedAt}</span>
                        </div>
                    </div>
                </div>
                {
                    (session.ready && session.user) && (
                        <form className={styles.form}>
                            <Link href={`/posts/${id}/edit`}><button>Edit</button></Link>
                            <button onClick={handleDelete}>X</button>
                        </form>
                    )
                }
            </div>
        ) 
    }

  return (
    <div>
        {post !== null ? renderPost() : (<h1>Post not found</h1>)}
    </div>
  )
}
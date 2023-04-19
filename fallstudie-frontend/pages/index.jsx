import React, { useEffect, useState } from 'react'
import { getAllPosts } from '@lib/api'
import Link from 'next/link'
import styles from './index.module.css'
import { useRedirectToLogin } from '@lib/session'

export default function PostsPage({session}) {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        try {
            getAllPosts()
                .then((p) => setPosts(p))
        } catch(e) {
            console.log(e)
        }
        
    }, [])
  return (
    <div>
        <ul className={styles.posts}>
            {
                posts.map((post) => {
                    return (
                        <li key={`post-${post.id}`}>
                            <Link className='post' key={`post-${post.id}`} href={`/posts/${post.id}/`}>                       
                                <img src="https://picsum.photos/300/300" alt="" />
                                <div>
                                    <h2>{post.title}</h2>
                                    <p>{post.text}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
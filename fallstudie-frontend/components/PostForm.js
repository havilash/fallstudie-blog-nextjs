import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"
import { useRouter } from "next/router"
import { createPost, updatePost } from "@lib/api"

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    if (post.title == ""){
        errors.title = "is not set"
        isValid = false
    }
    if (post.text == ""){
        errors.text = "is not set"
        isValid = false
    }

        return { errors, isValid }
}

export default function PostForm({ session, postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        const newPost = structuredClone(post)
        newPost[e.target.name] = e.target.value
        setPost(newPost)
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        if (post.id) {
            await updatePost(post, session.token)
            router.push(`/posts/${post.id}`)
        } else {
            post.userId = session.user.id
            await createPost(post, session.token)
            router.push(`/`)
        }

        setIsLoading(false)
    }

    return (
        <div className={styles.postform} >
                <label>Title:</label>
                <input type="text" name="title" onChange={handleChange} value={post.title} />
                {errors.title && <div className={styles.error}>{errors.title}</div>}
                <label>Text:</label>
                <textarea type="text" name="text" onChange={handleChange} value={post.text} />
                {errors.text && <div className={styles.error}>{errors.text}</div>}
                <button type="submit" name="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
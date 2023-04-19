import React, { useState } from 'react'
import styles from './login.module.css'
import { login } from '@lib/api'
import { useRouter } from 'next/router'
import { useRedirectToHome } from '@lib/session'

export default function LoginPage({session}) {
    useRedirectToHome(session)
    const router = useRouter()
    const [model, setModel] = useState({ 
        email: "", 
        password: ""
    })

    const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setModel({
        ...model,
        [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resp = await login(model)
        session.login(resp)
        router.push('/')
    }    

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
        <fieldset>
            <label>E-Mail:</label>
            <input type="text" name="email" onChange={handleChange} />
        </fieldset>
        <fieldset>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} />
        </fieldset>
        <fieldset>
            <button type="submit">
                Login
            </button>
        </fieldset>
    </form>
  )
}

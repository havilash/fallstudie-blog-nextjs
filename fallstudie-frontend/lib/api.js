const AUTH_URL = "http://localhost:9001/authenticate"
const URL = "http://localhost:9001/api/posts"

export async function getAllPosts() {
    const response = await fetch(URL)

    if (!response.ok) {
       return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data

}

export async function getPostById(id) {
    const response = await fetch(`${URL}/${id}`)

    if (!response.ok) {
       return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

export async function createPost(post, token) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

export async function updatePost(post, token) {
    
    const response = await fetch(`${URL}/${post.id}`, {
        method: "PUT",
        headers: {
            "authorization": `Bearer ${token}`,
            "content-type": "application/json",
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

export async function deletePost(id, token) {
    const response = await fetch(`${URL}/${id}`,{
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`,
        }
    })

    if (!response.ok) {
       return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

export async function login({ email, password }) {
    const response = await fetch(AUTH_URL, {
        method: "POST",
        headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify({email, password})
    })

    if (!response.ok) {
        return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}

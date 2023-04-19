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

export async function createPost(post) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
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

export async function updatePost(post) {
    
    const response = await fetch(`${URL}/${post.id}`, {
        method: "PUT",
        headers: {
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

export async function deletePost(id) {
    const response = await fetch(`${URL}/${id}`,{
        method: "DELETE",
    })

    if (!response.ok) {
       return Promise.reject(response.statusText)
    }

    const data = await response.json()
    return data
}
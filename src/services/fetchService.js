export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users')
    console.log(response)
    // Pass the json
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log(response)
    // Pass the json
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log(response)
    // Pass the json
    return response.json()
}

export const login = async (email, password) => {
    let body = {
        email,
        password
    }

    let response = await fetch('https://reqres.in/api/login', {
        body: JSON.stringify(body),
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        }
    })

    console.log(response)
    return response.json()
}

import axios from 'axios'

/**
 * Login Method to ReqRes endpoint
 * @param {string} email
 * @param {string} password
 */
export const loginService = (email, password) => {
    let body = {
        email,
        password
    }

    // Returns the Response with a Promise
    return axios.post('https://reqres.in/api/login', body)
}

// Obtain all users
export const getAllUsersService = () => {
    return axios.get('https://reqres.in/api/users')
}
// Obtain all paged users
export const getAllPagedUsersService = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// Obtain user by id
export const getUserByIdService = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create user
export const createUserService = (name, job) => {
    let body = {
        name,
        job
    }
    return axios.post('https://reqres.in/api/users', body)
}

export const deleteUserService = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}

// Update user
export const updateUserService = (id, name, job) => {
    let body = {
        name,
        job
    }
    return axios.put(`https://reqres.in/api/users`, body)
}

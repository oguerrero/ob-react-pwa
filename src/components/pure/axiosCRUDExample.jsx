import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

// Services
import {
    createUserService,
    deleteUserService,
    getAllPagedUsersService,
    getAllUsersService,
    getUserByIdService,
    loginService,
    updateUserService
} from '../../services/axiosCRUDService'

const AxiosCRUDExample = () => {
    // const navigate = useNavigate()
    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is Required'),
        password: Yup.string().required('Password is required')
    })

    const authUser = () => {
        loginService('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                if (response.data.token && response.status === 200) {
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login Failed')
                }
            })
            .catch((error) => {
                alert(`Something went wrong ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(console.log('Login executed'))
    }

    // CRUD examples

    const obtainAllUsers = () => {
        getAllUsersService()
            .then((response) => {
                console.log(response)
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('No users found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsersService(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('No users found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const obtainUserById = (id) => {
        getUserByIdService(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserService(id, name, job)
            .then((response) => {
                console.log(response)
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserService(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const createUser = (name, job) => {
        createUserService(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User not created')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    return (
        <div>
            <div>
                <p>Example Buttons for CRUD Example</p>
                <button onClick={obtainAllUsers}>Get all users</button>
                <button onClick={() => obtainAllPagedUsers(2)}>
                    Get all paged users
                </button>
                <button onClick={() => obtainUserById(2)}>
                    Get User id = 2
                </button>
                <button onClick={() => updateUser('morpheus', 'zion resident')}>
                    Update User id = 2
                </button>
                <button onClick={() => deleteUser(2)}>
                    Delete User id = 2
                </button>
                <button onClick={() => createUser('morpheus', 'leader')}>
                    Create User id = 2
                </button>
            </div>
            <h2>Log In</h2>
            <Formik
                // Initial Data
                initialValues={initialCredentials}
                // YUP validation Schema
                validationSchema={loginSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    await localStorage.setItem('credentials', values)
                    //navigate('/profile', { replace: true })
                }}
                className='d-flex justify-content-center align-items-center mb-4'>
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => (
                    <Form>
                        {/* Email */}
                        <label htmlFor='email'>Email</label>
                        <Field
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            type='email'
                        />
                        {/* Email Errors */}
                        {errors.email && touched && (
                            <ErrorMessage component='div' name='email' />
                        )}
                        {/* Password */}
                        <label htmlFor='password'>Password</label>
                        <Field
                            id='password'
                            name='password'
                            placeholder='password'
                            type='password'
                        />
                        {/* Password Errors */}
                        {errors.password && touched && (
                            <ErrorMessage component='div' name='password' />
                        )}
                        <button type='submit'>Submit</button>
                        {isSubmitting ? <p>Login your credentials</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AxiosCRUDExample

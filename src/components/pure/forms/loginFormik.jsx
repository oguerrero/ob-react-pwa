import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is Required'),
    password: Yup.string().required('Password is required')
})

const LoginFormik = () => {

    const navigate = useNavigate()

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
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
                    navigate('/profile', { replace: true })
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

export default LoginFormik

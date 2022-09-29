import React from 'react'

// NPM
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Models
import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum'

const RegisterFormik = () => {
    let user = new User()

    const initialCredentials = {
        username: '',
        email: '',
        password: '',
        confirm: '', // confirm password
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(5, 'Username is too short')
            .max(12, 'Username too long')
            .required('Username is Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is Required'),
        password: Yup.string()
            .min(8, 'Pasword must be at least 8 characters')
            .required('Password is required'),
        confirm: Yup.string()
            .when('password', {
                is: (value) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Passwords must match'
                )
            })
            .required('Must confirm your password')
    })

    const submit = () => {
        console.log('>> Register user')
    }

    return (
        <div>
            <h2>Sign up</h2>
            <Formik // Initial Data
                initialValues={initialCredentials}
                // YUP validation Schema
                validationSchema={registerSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credentials', values)
                }}>
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => (
                    <Form>
                        {/* Username */}
                        <label htmlFor='username'>Username</label>
                        <Field
                            id='username'
                            name='username'
                            placeholder='username'
                            type='text'
                        />
                        {/* Username Errors */}
                        {errors.username && touched && (
                            <ErrorMessage component='div' name='username' />
                        )}
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
                            placeholder='Password'
                            type='password'
                        />
                        {/* Password Errors */}
                        {errors.password && touched && (
                            <ErrorMessage component='div' name='password' />
                        )}
                        {/* Password Confirm */}
                        <label htmlFor='password'>Confirm Password</label>
                        <Field
                            id='confirm'
                            name='confirm'
                            placeholder='Confirm Password'
                            type='password'
                        />
                        {/* Confirm Password Errors */}
                        {errors.confirm && touched && (
                            <ErrorMessage component='div' name='confirm' />
                        )}
                        <button type='submit'>Submit</button>
                        {isSubmitting ? <p>Login your credentials</p> : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterFormik

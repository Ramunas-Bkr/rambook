import React from 'react'
import LoginReduxForm from './LoginForm/LoginForm'
import classes from './Login.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        
    }

    return (
        <div className={classes.Login}>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login

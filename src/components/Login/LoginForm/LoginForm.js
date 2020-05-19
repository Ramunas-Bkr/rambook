import React from 'react'
import classes from './LoginForm.modules.css'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form className={classes.LoginFom} onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"} />
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={"input"} />
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"} /> Remember me
            </div>
            <div>
                <button> Login </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm

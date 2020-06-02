import React from 'react'
import classes from './LoginForm.modules.css'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const LoginForm = ({ handleSubmit }, { error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField("Email", "email", [required], Input)}
            </div>
            <div>
                {createField("Password", "password", [required], Input, { type: "password" })}
            </div>
            <div>
                {createField("", "rememberMe", [], Input, { type: "checkbox" })}
        Remember me
            </div>
            {error && <div className={classes.summaryError}>
                {error}
            </div>}
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

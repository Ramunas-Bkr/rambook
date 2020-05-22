import React from 'react'
import classes from './LoginForm.modules.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const LoginForm = (props) => {
    return (
        <form className={classes.LoginFom} onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    name="email"
                    placeholder="Email"
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field 
                    name="password"
                    placeholder="Password"
                    type="password" 
                    component={Input}
                    validate={[required]}  />
            </div>
            <div>
                <Field 
                    name="rememberMe" 
                    type="checkbox" 
                    component={Input} /> Remember me
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

import React from 'react'
import classes from './FormsControls.module.css'
import { Field } from 'redux-form'

const FormsControls = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error 
    return (
        <div className={classes.formControls + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...Restprops} = props;
    return <FormsControls {...props}><textarea {...input} {...Restprops} /> </FormsControls>
}

export const Input = (props) => {
    const {input, meta, children, ...Restprops} = props;
    return <FormsControls {...props}><input {...input} {...Restprops} /> </FormsControls>
}

export const createField = (placeholder, name, validators, component, props={}, text="" ) => {
    return  <div> <Field name={name} placeholder={placeholder} component={component} validate={validators} {...props}/> {text} </div>
}
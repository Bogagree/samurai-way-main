import style from './FormsControl.module.css'
import React from "react";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";


// type DefaultTextareaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: FieldValidatorType[],
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = '') => {
    return (
        <>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                autoFocus
                {...props}
            />{text}
        </>
    )
}
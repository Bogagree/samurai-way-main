import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLength25, minLength3, required} from "../../utils/validators/validators";
import style from '../Common/FormsControls/FormsControl.module.css'

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginFormOwnProps = {
    captchaUrl?: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('your email', 'email', [required, maxLength25, minLength3], Input)}
            {createField('your password', 'password', [required, maxLength25, minLength3], Input)}
            <div><Field name={'rememberMe'} component={'input'} type="checkbox"/> Remember me</div>

            {props.error && <div className={style.formSummaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>(
    {form: 'login'}
)(LoginForm)
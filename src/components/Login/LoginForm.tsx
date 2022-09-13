import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLength10, minLength3, required} from "../../utils/validators/validators";

export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export type LoginFormOwnProps = {
    captchaUrl?: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('your login', 'login',[required, maxLength10, minLength3], Input)}
            {createField('your password', 'password',[required, maxLength10, minLength3], Input)}
            <div><Field name={'rememberMe'} component={'input'} type="checkbox"/> Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormOwnProps>(
    {form: 'login'}
)(LoginForm)
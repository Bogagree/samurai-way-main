import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";

export const Login = () => {

    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }

    return (
        <div style={{padding: '10px'}}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
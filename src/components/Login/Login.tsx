import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.loginTC(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }

    return (
        <div style={{padding: '10px'}}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type MapDispatchToPropsType = {
    loginTC: (data: LoginFormDataType) => void
    logoutTC: () => void
}

type  MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {loginTC})(Login)
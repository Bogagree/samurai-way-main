import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthStateType, setUserData, UserAuthDataType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        } )
            .then((res) => {
                if (res.data.resultCode === 0 ) {
                    this.props.setUserData(res.data.data)
                    console.log(res.data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserData: (data: UserAuthDataType) => dispatch(setUserData(data))
    }
}

export const HeaderContainerWithConnect = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

type HeaderContainerPropsType = AuthStateType & MapDispatchPropsType

type MapDispatchPropsType = {
    setUserData: (data: UserAuthDataType) => void
}
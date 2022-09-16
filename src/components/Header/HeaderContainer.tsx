import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType, logoutTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} logout={this.props.logoutTC}/>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainerWithConnect = connect(mapStateToProps, {logoutTC})(HeaderContainer)

export type HeaderContainerPropsType = AuthStateType & MapDispatchPropsType

type MapDispatchPropsType = {
    logoutTC: () => void
}
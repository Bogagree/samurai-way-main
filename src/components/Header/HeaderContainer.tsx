import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType, getUserData, logoutTC} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getUserData()
    }


    render() {
        return (
            <Header {...this.props} logout={this.props.logoutTC}/>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        userData: state.auth.userData,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainerWithConnect = connect(mapStateToProps, {getUserData, logoutTC})(HeaderContainer)

type HeaderContainerPropsType = AuthStateType & MapDispatchPropsType

type MapDispatchPropsType = {
    getUserData: () => void
    logoutTC: () => void
}
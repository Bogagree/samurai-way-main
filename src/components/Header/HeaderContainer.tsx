import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType, getUserData, UserAuthDataType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getUserData()
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

export const HeaderContainerWithConnect = connect(mapStateToProps, {getUserData})(HeaderContainer)

type HeaderContainerPropsType = AuthStateType & MapDispatchPropsType

type MapDispatchPropsType = {
    getUserData: () => void

}
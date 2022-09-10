import React from 'react';
import {connect} from "react-redux";
import {getUserProfileTC, ProfileStateType} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {addPost} from "../../redux/state";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25683'
        }
        this.props.getUserProfileTC(userId)
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <>
            < Profile {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         addPost: (postMessage: string) => dispatch(addPostAC(postMessage)),
//         setUser: (user: UserProfileType) => dispatch(setUser(user)),
//         toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetching(isFetching))
//         }
// }

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileContainerWithConnect = connect(mapStateToProps, {
    addPost,
    getUserProfileTC
})(WithUrlDataContainerComponent)

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OnContainerPropsType

type OnContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = ProfileStateType & { isAuth: boolean }

type MapDispatchPropsType = {
    addPost: (postMessage: string) => void
    getUserProfileTC: (userId: string) => void
}

type PathParamsType = {
    userId: string,
}

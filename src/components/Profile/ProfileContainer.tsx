import React from 'react';
import {connect} from "react-redux";
import {addPostAC, ProfileStateType, setUser, toggleIsFetching, UserProfileType} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25683'
        }
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        )
            .then((res) => {
                this.props.setUser(res.data)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return <>
            < Profile {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (postMessage: string) => dispatch(addPostAC(postMessage)),
        setUser: (user: UserProfileType) => dispatch(setUser(user)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetching(isFetching))
        }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileContainerWithConnect = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OnContainerPropsType

type OnContainerPropsType =  MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = ProfileStateType

type MapDispatchPropsType = {
    addPost: (postMessage: string) => void
    setUser: (user: UserProfileType) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type PathParamsType = {
    userId: string,
}

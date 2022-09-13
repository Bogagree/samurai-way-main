import React from 'react';
import {connect} from "react-redux";
import {
    addPost,
    getUserProfileTC,
    getUserStatusTC,
    ProfileStateType,
    updateUserStatusTC
} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = '25683' с котом на аватарке
            userId = '21868' // мой id
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {

        return <>
            < Profile {...this.props}
                      userProfile={this.props.userProfile}
                      status={this.props.status}
                      updateUserStatusTC={this.props.updateUserStatusTC}
                      addPost={this.props.addPost}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        addPost,
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    })
)(ProfileContainer)

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OnContainerPropsType

type OnContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = ProfileStateType

type MapDispatchPropsType = {
    addPost: (postMessage: string) => void
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status:string) => void
}

type PathParamsType = {
    userId: string,
}

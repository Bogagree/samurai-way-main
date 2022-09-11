import React from 'react';
import {connect} from "react-redux";
import {getUserProfileTC, ProfileStateType} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {addPost} from "../../redux/state";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '25683'
        }
        this.props.getUserProfileTC(userId)
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
        isFetching: state.profilePage.isFetching,
    }
}

let WithUrlDataContainerComponent = withAuthRedirect(withRouter(ProfileContainer))

export const ProfileContainerWithConnect = connect(mapStateToProps, {
    addPost,
    getUserProfileTC
})(WithUrlDataContainerComponent)

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OnContainerPropsType

type OnContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = ProfileStateType

type MapDispatchPropsType = {
    addPost: (postMessage: string) => void
    getUserProfileTC: (userId: string) => void
}

type PathParamsType = {
    userId: string,
}

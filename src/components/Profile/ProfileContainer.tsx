import React from 'react';
import {connect} from "react-redux";
import {addPostAC} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";

const mapStateToProps = (state:AppRootStateType ) => {
    return {
            posts: state.profilePage.dialogsPage.posts,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postMessage: string) => dispatch(addPostAC(postMessage)),
        updateNewPostText: (newText: string) => dispatch(addPostAC(newText))
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);



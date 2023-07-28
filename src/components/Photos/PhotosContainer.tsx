import React from 'react';
import {connect} from "react-redux";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {Photos} from './Photos';
import {PhotoType, setPhotos} from '../../redux/photos-reducer';


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogPage: {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages
        },
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newPhoto: PhotoType) => {
            dispatch(setPhotos(newPhoto))
        }
    }
}

export const PhotosContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Photos)
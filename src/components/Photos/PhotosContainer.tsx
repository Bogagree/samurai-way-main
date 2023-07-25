import React from 'react';
import {connect} from "react-redux";
import {addMessageAC} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {Photos} from './Photos';


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
        addMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

export const PhotosContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Photos)
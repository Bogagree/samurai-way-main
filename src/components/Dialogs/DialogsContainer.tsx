import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


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
        },
        updateNewMessageBody: () => {
            dispatch(updateMessageAC())
        }
    }
}

// const DialogsWithAuthRedirect = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)

export const DialogsContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogPage: {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages
        },
        isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
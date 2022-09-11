import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

const DialogsWithAuthRedirect = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirect)
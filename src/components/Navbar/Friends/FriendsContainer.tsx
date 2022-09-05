import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Friends} from "./Friends";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        friends: state.navbarPage.friends
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
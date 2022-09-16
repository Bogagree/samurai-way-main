import React from 'react';
import 'normalize.css'
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Router, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainerPropsType, HeaderContainerWithConnect} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {AppRootStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {getUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {AppStateType, initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/Common/Preloader";


const MemoHeader = React.memo(HeaderContainerWithConnect)

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (<>
                {!this.props.initialized ? <Preloader/> :
                    <div className="app-wrapper">
                        <MemoHeader {...this.props}/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route
                                    path="/dialogs"
                                    component={DialogsContainer}/>
                                <Route
                                    path="/profile/:userId?"
                                    component={ProfileContainer}/>

                                <Route path="/users"
                                       component={UsersContainer}/>

                                <Route component={News} path="/news"/>
                                <Route component={Music} path="/music"/>
                                <Route component={Settings} path="/settings"/>

                                <Route component={Login} path="/login"/>
                            </Switch>
                        </div>
                    </div>}
            </>

        );
    }
}

const mapStateToProps = (state: AppRootStateType): AppStateType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getUserData, initializeApp})
)(App)

type mapDispatchPropsType = {
    getUserData: () => void
    initializeApp: () => void
}

type AppContainerPropsType = AppStateType & mapDispatchPropsType & HeaderContainerPropsType // узнать про эту типизацию, чтобы не ругалась MemoHeader



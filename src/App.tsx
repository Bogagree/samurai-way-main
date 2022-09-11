import React from 'react';
import 'normalize.css'
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainerWithConnect} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";


const MemoHeader = React.memo(HeaderContainerWithConnect)

export const App = () => {

    return (
        <div className="app-wrapper">
            <MemoHeader/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer/>}/>
                    <Route
                        path="/profile/:userId?"
                        component={ProfileContainer}/>

                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route component={News}  path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                    <Route component={Login} path="/login"/>
                </Switch>
            </div>
        </div>

    );
}


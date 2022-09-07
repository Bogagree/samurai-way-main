import React from 'react';
import 'normalize.css'
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainerWithConnect} from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainerWithConnect} from "./components/Header/HeaderContainer";


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
                        component={ProfileContainerWithConnect}/>

                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route component={News}  path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                </Switch>
            </div>
        </div>

    );
}


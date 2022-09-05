import React from 'react';
import 'normalize.css'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";


const MemoHeader = React.memo(Header)

export const App = () => {

    return (
        <div className="app-wrapper">
            <MemoHeader/>
            <Navbar />
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer/>} />
                <Route
                    path="/profile"
                    render={() => <ProfileContainer/>} />

                <Route path="/users"
                       render={() => <UsersContainer/>}/>
                <Route component={News} path="/news"/>
                <Route component={Music} path="/music"/>
                <Route component={Settings} path="/settings"/>

            </div>
        </div>
    );
}


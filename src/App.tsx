import React from 'react';
import 'normalize.css'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStatetype} from "./redux/state";
import {Profile} from "./components/Profile/Profile";


type Props = {
    state: RootStatetype
}

const MemoHeader = React.memo(Header)

export const App: React.FC<Props> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <MemoHeader/>
                <Navbar friends={props.state.navbar.friends}/>
                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        render={() => <Dialogs dialogPage={props.state.dialogPage}/>}/>
                    <Route
                        path="/profile"
                        render={() => <Profile profilePage={props.state.profilePage}/>}/>

                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>

                </div>
            </div>
        </BrowserRouter>
    );
}


import React from 'react';
import 'normalize.css'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStatetype} from "./redux/state";
import {Profile} from "./components/Profile/Profile";


type PropsType = {
    state: RootStatetype
    addPost: (newPostMessage: string) => void
    addMessage: (newMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const MemoHeader = React.memo(Header)

export const App: React.FC<PropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <MemoHeader/>
            <Navbar friends={props.state.navbar.friends}/>
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <Dialogs dialogPage={props.state.dialogPage}
                                           addMessage={props.addMessage}
                    />}/>
                <Route
                    path="/profile"
                    render={() => <Profile profilePage={props.state.profilePage}
                                           addPost={props.addPost}
                                           updateNewPostText={props.updateNewPostText}

                    />}
                />

                <Route component={News} path="/news"/>
                <Route component={Music} path="/music"/>
                <Route component={Settings} path="/settings"/>

            </div>
        </div>
    );
}


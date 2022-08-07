import React from 'react';
import ReactDOM from 'react-dom';
import state, {addMessage, addPost, subscribe, updateNewPostText} from "./redux/state";
import './index.css';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter> ,
        document.getElementById('root')
    )
}

renderEntireTree()

subscribe(renderEntireTree)
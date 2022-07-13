import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {addPost, RootStatetype} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state: RootStatetype) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost}/>,
        </BrowserRouter> ,
        document.getElementById('root')
    )
}
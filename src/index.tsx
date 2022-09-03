import React from 'react';
import ReactDOM from 'react-dom';
import {store, subscribe} from "./redux/state";
import './index.css';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


export let renderEntireTree = () => {
    ReactDOM.render(
        // <Provider store={store}>
            <BrowserRouter>
                <App
                    state={store._state}
                    addPost={store.addPost.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />,
            </BrowserRouter> ,
        // </Provider>,

        document.getElementById('root')
    )
}

renderEntireTree()

subscribe(renderEntireTree)
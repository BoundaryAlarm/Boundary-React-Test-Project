import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './core/App';
import Provider from "react-redux/es/components/Provider";
import {store} from "./store";
import './index.css';

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


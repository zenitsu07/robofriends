import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import App from './App';


const rootelement = document.getElementById('root');

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootelement
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import logger from "./components/services/logService"
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/main.css";

logger.init();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,    
        document.getElementById('root')
    
    );


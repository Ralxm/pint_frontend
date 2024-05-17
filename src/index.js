import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './page/MainPage'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('raiz'));
root.render(
        <BrowserRouter>
            <MainPage></MainPage>
        </BrowserRouter>    
)

//ReactDOM.render(<MainPage />, document.getElementById('raiz'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

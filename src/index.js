import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './store/reducers/configureStore';
import "react-toastify/dist/ReactToastify.min.css"
import { BrowserRouter } from 'react-router-dom';
import  { render } from 'react-dom';
 


const store = configureStore()
render(
  <React.StrictMode>
  <Provider store = {store}>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
    </Provider>
    </React.StrictMode> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

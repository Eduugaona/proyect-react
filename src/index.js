import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/GlobalStyles';
import { Provider } from 'react-redux';
import {store} from './redux/store'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
      <GlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

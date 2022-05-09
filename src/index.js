import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import BottomNav from "./function/BottomNav";
import {StoreProvider} from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <React.StrictMode>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </React.StrictMode>
    </>
);

reportWebVitals();

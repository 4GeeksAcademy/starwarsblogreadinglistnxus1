//import react into the bundle
import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root'); 

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("No se encontró el elemento con id 'root'");
}

serviceWorker.unregister();
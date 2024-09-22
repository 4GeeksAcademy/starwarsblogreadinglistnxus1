//import react into the bundle
import React from 'react'
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';


ReactDom.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
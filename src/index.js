import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Home from './components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider><Home /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './components/App';
import Timer from './components/Timer';

ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<Timer />, document.getElementById('timer'))
import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './components/App';
import Timer from './components/Timer';
import Form from './components/Form';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Timer />, document.getElementById('timer'));
ReactDOM.render(<Form />, document.getElementById('searchForm'));
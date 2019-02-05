import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import About from './About';
import Gallery from './Gallery';

import '../css/base.css';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={About}/>
            <Route path="/Gallery" component={Gallery}/>
        </Router>
    ), document.getElementById('content')
);

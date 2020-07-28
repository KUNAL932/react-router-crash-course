import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';

const routing = (
  <Router>
    <Route path="/" component={App}/>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

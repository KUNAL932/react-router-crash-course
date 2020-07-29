import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';
import User from './UserRoutes/User';
import Visit from './UserRoutes/Visit';
import NotFound from './UserRoutes/NotFound';

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/visit">Visit</Link></li>
      </ul>
    </div>
    <Switch>  
    <Route exact path="/" component={App}/>
    <Route path="/user" component={User} />
    <Route path="/visit" component={Visit} />
    <Route component={NotFound} />
    </Switch>
    
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

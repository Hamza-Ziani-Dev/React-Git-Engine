import React from 'react';
import Users from './components/users/Users';
import UserItems  from './components/users/UserItems';
import Navbar from './components/includes/Navbar';
//import User from './components/users/User';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css'

function App() {
    return ( 
        <Router>
       <div className = "App" >
        <Navbar/>
        <div className="container mt-2">
            <Switch>
                <Route exact path='/users' component={Users}></Route>
                <Route exact path='/users/:login' component={UserItems}></Route>
                <Route exact component={Users}></Route>
            </Switch>
        </div>
        </div>
        </Router>
    );
}

export default App;
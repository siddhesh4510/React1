import logo from './logo.svg';
import React, { useState } from 'react';
import Home from './Components/home'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import LoginForm from './Components/login';
import FormLayoutDemo from './Components/loginform';
import AuthenticateRoute from './Service/Authenticate';
import RegisterComponent from './Components/register';


import './App.css';

function App(props) {
 
  return (
  
    <div className="App">
      <Router>
        <>
          <Route path="/" exact component={LoginForm} />
          <Route path="/register" component={RegisterComponent} />
          <AuthenticateRoute path="/home" component={Home} />
          <Route path="/home" component={Home} />
        </>
      </Router>

        
    </div>
    
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import {Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Slider from './Components/slider';
import HomePage from './Components/HomePage';
import Login from './Components/login';
import Register from './Components/register';
import ForgetPass from './Components/forgetPass';
import ResetPass from './Components/resetPass';
import AboutUs from './Components/aboutUs';
import Admin from './Components/admin';
import GoogleLogin from 'react-google-login';

function App() {
  return (
    <React.Fragment>
       <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/forgetPass" component={ForgetPass}/>
      <Route exact path="/resetPass" component={ResetPass}/>
      <Route exact path="/aboutUs" component={AboutUs}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/googleSign" component={GoogleLogin}/>
     
    </React.Fragment>
  );
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Home from './components/dashboard/Dashboard2';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';
import SahmTesla from './components/project/articles/SahmTesla';
import AirPod from './components/project/articles/AirPod';

import './assets/stylesheets/SignIn.css';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">   
            <div style = {{position:'fixed',width:'100%',zIndex:'1111'}}> <Navbar/></div>
            <Switch>
                <Route exact path ='/' component = {Home} />
                <Route path ='/project/:id' component = {ProjectDetails} />
                <Route path ='/signin' component = {SignIn} />
                <Route path ='/signup' component = {SignUp} />
                <Route path ='/createproject' component = {CreateProject}/>
                <Route path ='/sahmtesla' component = {SahmTesla}/>
                <Route path ='/airpod2' component = {AirPod}/>
            </Switch>
          </div>
        </BrowserRouter>    
    );
  }
}

export default App;

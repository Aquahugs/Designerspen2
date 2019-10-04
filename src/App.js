import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Home from './components/dashboard/Dashboard2';
import Wall from './components/Wall';
import Inspiration from './components/Inspiration';
import About from './components/dashboard/About';
import ProjectDetails from './components/project/ProjectDetails';
import UserProfile from './components/profile/UserProfile';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';
import SubmitProject from './components/project/SubmitProject';
import UploadPhoto from './components/project/UploadPhoto';
import ScrollToTop from './components/shared/ScrollToTop'

import SahmTesla from './components/project/articles/SahmTesla';
import AirPod from './components/project/articles/AirPod';
import WorkFlows from './components/project/articles/WorkFlows';
import AiDesign from './components/project/articles/AiDesign';
import ArExp from './components/project/articles/ArExp';
import KojimaProductions from './components/project/articles/KojimaProductions';


import './assets/stylesheets/SignIn.css';
class App extends Component {
  render() {
      
    return (
      
        <BrowserRouter>
         <ScrollToTop>
          <div className="App">   
            <div style = {{position:'fixed',width:'100%',zIndex:'1111'}}> <Navbar/></div>
            <Switch>
                
                <Route exact path ='/' component = {Home} />
                <Route path ='/project/:id' component = {ProjectDetails} />
                <Route path ='/users/:uid' component = {UserProfile} />
                <Route path ='/signin' component = {SignIn} />
                <Route path ='/signup' component = {SignUp} />
                <Route path ='/about' component = {About} />
                <Route path ='/createproject' component = {CreateProject}/>
                <Route path ='/submitproject' component = {SubmitProject}/>
                <Route path ='/uploadpohoto' component = {UploadPhoto}/>
                <Route path ='/KojimaProductions' component = {KojimaProductions}/>
                <Route path ='/hololens' component = {KojimaProductions}/>
                <Route path ='/sahmtesla' component = {SahmTesla}/>
                <Route path ='/airpod2' component = {AirPod}/>
                <Route path ='/arexp' component = {ArExp}/>
                <Route path ='/WorkFlows' component = {WorkFlows}/>
                <Route path ='/AiDesign' component = {AiDesign}/>
                <Route path ='/Wall' component = {Wall}/>
                <Route path ='/Inspiration' component = {Inspiration}/>
            </Switch>
          </div>
          </ScrollToTop>
        </BrowserRouter>    
    );
  }
}

export default App;

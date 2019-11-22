import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
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
import Profile from './components/Profile';
import ArExp from './components/project/articles/ArExp';
import KojimaProductions from './components/project/articles/KojimaProductions';
import history from "./utils/history";
import Loading from "./components/Loading";
import { useAuth0 } from "./react-auth0-spa"
import './assets/stylesheets/SignIn.css';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }
  else {


  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Navbar/>
          <Switch>
          <Route exact path ='/' component = {Inspiration} />
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
          <Route path ='/News' component = {Home}/>
          <Route path="/profile" component={Profile}/>
          </Switch>
      </div>
    </Router>
  );
}

};

// class App extends Component {

  
//   render() {
    
//     const { loading } = useAuth0();

//       if (loading) {
//         return <Loading />;
//       }
      
//     return (
      
//         <BrowserRouter history={history}>
//          <ScrollToTop>
//           <div className="App">   
//             <div style = {{position:'fixed',width:'100%',zIndex:'1111'}}> <Navbar/></div>
//             <Switch>
//                 <Route exact path ='/' component = {Inspiration} />
//                 <Route path ='/project/:id' component = {ProjectDetails} />
//                 <Route path ='/users/:uid' component = {UserProfile} />
//                 <Route path ='/signin' component = {SignIn} />
//                 <Route path ='/signup' component = {SignUp} />
//                 <Route path ='/about' component = {About} />
//                 <Route path ='/createproject' component = {CreateProject}/>
//                 <Route path ='/submitproject' component = {SubmitProject}/>
//                 <Route path ='/uploadpohoto' component = {UploadPhoto}/>
//                 <Route path ='/KojimaProductions' component = {KojimaProductions}/>
//                 <Route path ='/hololens' component = {KojimaProductions}/>
//                 <Route path ='/sahmtesla' component = {SahmTesla}/>
//                 <Route path ='/airpod2' component = {AirPod}/>
//                 <Route path ='/arexp' component = {ArExp}/>
//                 <Route path ='/WorkFlows' component = {WorkFlows}/>
//                 <Route path ='/AiDesign' component = {AiDesign}/>
//                 <Route path ='/Wall' component = {Wall}/>
//                 <Route path ='/Inspiration' component = {Inspiration}/>
//                 <Route path ='/News' component = {Home}/>
//                 <Route path="/profile" component={Profile} />
//             </Switch>
//           </div>
//           </ScrollToTop>
//         </BrowserRouter>    
//     );
//   }
// }

export default App;

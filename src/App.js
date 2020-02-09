import React, { Component } from 'react';
import {BrowserRouter,Router, Switch, Route,Redirect} from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Home from './components/dashboard/Dashboard2';
import Wall from './components/Wall';
import Feed from './components/Feed';
import Discover from './components/Discover';
import PostDetail from './components/PostDetail';
import About from './components/dashboard/About';
import ProjectDetails from './components/project/ProjectDetails';
import MyProfile from './components/profile/MyProfile';
import TaggedPost from './components/discover/TaggedPost';
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
import history from "./utils/history";
import {connect} from 'react-redux'

import Loading from "./components/Loading";
import './assets/stylesheets/SignIn.css';





const App = (props) => {
  

  const {auth, profile} = props; 
    console.log(props)

    // if (!auth.uid)   return <Redirect exact to="/signup"  /> 

    if(!auth.uid){
      return (
          <Switch>
                <Route path ='/signup' component = {SignUp} />
                 <Redirect to={'/signup'} />
          </Switch>
      );
    }

  
    return (
      
      <BrowserRouter history={history}>
         <ScrollToTop>
          <div className="App">   
            <div  style = {{position:'fixed',width:'100%',zIndex:'1111'}}> <Navbar/></div>
            <Switch>
                {/* <Route path ='/project/:id' component = {ProjectDetails} /> */}
                <Route path ='/profile/:uuid' component = {MyProfile} />
                <Route path ='/postdetail/:Id' component = {PostDetail} />
                <Route path ='/Discover/:posttag' component = {TaggedPost} />
                <Route path ='/signin' component = {SignIn} />
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
                <Route path ='/Feed' component = {Feed}/>
                <Route  path ='/Discover' component = {Discover}/>
                <Route path ='/News' component = {Home}/>
                <Route exact path ='/'  component = {Discover} />
                <Route path ='/signup' component = {SignUp} />

            </Switch>
          </div>
          </ScrollToTop>
        </BrowserRouter>    
    );
    
}

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

const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}



export default connect(mapStateToProps)(App)
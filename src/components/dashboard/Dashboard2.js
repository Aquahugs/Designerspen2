import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Footer from '../navbar/Footer';
import {Link} from 'react-router-dom'





class Home extends Component {
    render(){
        // console.log(this.props)
        //const {projects,auth, notifications} = this.props;
        //if(!auth.uid) return <Redirect to='/signin'/>

        const styles1 = {
            paddingTop:'3%'
          
        }
        return(
            
            <div className ='bgcolor'>
               
                <div className = ' dashboard  container ' style ={styles1}  >
                    <div className = 'row'>
                        <div className = ' col s12 m12 card z-depth-0 project-summary'>
                                <div className = 'card-content grey-text text-darken-3'>
                                    <div className = 'card-image z-depth-2'>
                                    <Link to="/airpod2"><img src={require('../../assets/images/Banners/airpod.jpg')}/></Link>
                                    </div>
                                    <span className = "card-title"><h1 style = {{fontSize:'35px'}}>Second generation of AirPods</h1></span>
                                    <p></p>
                                    <p className = "grey-text"> 2/8/2019  </p>
                                </div>
                        </div> 
                        <h2 style = {{fontSize:'16px', paddingLeft:'5%'}}>Feed</h2>
                        <ProjectList/>
                    </div>
                    <Footer/>
                </div>     
                
            </div>
        )
    }
}

//<div className = 'col s12 m5 offset-m1'> 
//<Notifications notifications={notifications}/>
//</div>

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects, // Grab from firestore instead of dummy data state.project.projects
        auth:state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//Compose is used when you want to pass multiple store enhancers to the store.
//func1(func2(func3(func4))))
//we could just write
//compose(func1, func2, func3, func4)

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects', orderBy:['createdAt','desc']},
        {collection: 'notifications', limit:3,orderBy:['time','desc']} // limit the amount of notifications shown 
    ])
)(Home)
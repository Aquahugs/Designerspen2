import React, {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Navbar from '../navbar/NavBar';



class Dashboard extends Component {
    render(){
         console.log(this.state)
         console.log(this.props)
        const {projects,auth, notifications} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        console.log(this.state)
        return(
            <div className = 'dashboard container'>
                <Navbar/>
                <div className = 'row'>
                    <ProjectList projects ={projects}/>
                   
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
        notifications: state.firestore.ordered.notifications,
        selectedFile: state.firestore.projects.selectedFile
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
)(Dashboard)
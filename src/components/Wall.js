import React, {Component} from 'react';
// import Notifications from './Notifications';
import ProjectList from './project/ProjectList';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Footer from './navbar/Footer';
import {Link} from 'react-router-dom'





class Wall extends Component {
    render(){
        console.log(this.props.auth.displayName);
        console.log(this.props.auth.uid)
        
        const {projects,auth, notifications} = this.props;
        //if(!auth.uid) return <Redirect to='/signin'/>

      

        const styles1 = {
            paddingTop:'3%'
            
        }

        
        return(
                
            <div className ='bgcolor'>
               <p>coming soon</p>
                {/* <div className = ' dashboard  container ' style ={styles1}  >
                    <div className = 'row'>
                        <h2 style = {{fontSize:'16px', paddingLeft:'5%'}}>Wall</h2>
                        <Link to ='/createproject' ><button className="btn pink lighten-1 z-depth-0">Pin</button></Link>
                        <ProjectList projects = {projects}/>
                    </div>
                    <Footer/>
                </div>      */}
                
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
        // {collection: 'notifications', limit:3,orderBy:['time','desc']} // limit the amount of notifications shown 
    ])
)(Wall)
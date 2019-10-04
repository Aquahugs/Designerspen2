import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import firebase from "firebase";

const UserProfile = (props,state,ownProps) => {
    console.log(props)
    console.log(props.auth.uid)
    const {project,auth} = (props);
    if(!auth.uid) return <Redirect to='/signin'/>
    if (auth.uid = props.auth.uid) {
        return (
            
            //somewhere in here project.selectedFile
        <div className = 'container' style = {{paddingTop:'10%'}}>
            <img src = {props.auth.photoURL}/>
            <h1>this is {props.auth.displayName}'s profile</h1>
        </div>
    )
    } else {
        return (
            <div className = 'container center'><p>Loading....</p> </div> //later insert loading animation 
            )
        }   
    }

    


const mapStateToProps = (state,ownProps) => {
    console.log(state)
    const uid = ownProps.match.params.uid;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[uid] : null //projects is just an object with the diffrent properties 
    return {
        project:project,
        auth: state.firebase.auth
        
    }
}
export default compose(

    connect(mapStateToProps),
    firestoreConnect ([
        {collection:'projects'}
         ])
)(UserProfile)
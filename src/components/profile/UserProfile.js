import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import firebase from "firebase";
import Axios from 'axios'

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state= {  
            images :[],
            photoURL: props.auth.photoURL,
            displayName:props.auth.displayName,
            uuid:props.auth.uid,
            isLoaded:false

        }
    }
    componentDidMount() {
        const uuid = this.state.uuid
        fetch('http://localhost:3001/users/:uid', {
            method: "GET",
            headers: {userid :uuid}
        }
        )
        .then((res1) => res1.json())
        .then((data1) => this.setState({
            images:data1,
            isLoaded:true
        })); 
    }
    
    
    render () {
         if (this.state.isLoaded === false) return null; 
        
    const UserProfile = (props,state,ownProps) => {
    console.log(props)
    console.log(props.auth.uid)
    
    }
    console.log(this.state.images.data[0])

    
       
    return (
        
        
        //somewhere in here project.selectedFile
    <div className = 'container' style = {{paddingTop:'10%'}}>
        <img src = { this.state.photoURL}/>
        <h1>this is {this.state.displayName}'s profile</h1>
          <div> { //mapping through all the usernames in the new_tabel tabel
             this.state.images.data.map((photos,i) =>
             <img src = {photos.imageUrl}/>
             )
            }
        </div>   
        
    </div>
    
)   

}
}

const mapStateToProps = (state,ownProps) => {
    console.log(state.firebase.auth.uid)
    const uid = ownProps.match.params.uid;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[uid] : null //projects is just an object with the diffrent properties 
    return {
        project:project,
        auth: state.firebase.auth
        
    }
}
export default compose(
    connect(mapStateToProps)
)(UserProfile)
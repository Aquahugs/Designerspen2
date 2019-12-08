import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import firebase from "firebase";
import Axios from 'axios'

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state= {  
            images :[],
            photoURL: props.auth.photoURL,
            displayName:props.auth.displayName,
            uuid: props.match.params.uuid,
            isLoaded:false,
            isMe:false,
            info:[]
        }
    }
    
   
    componentDidMount() {
        const {uuid} = this.state
        fetch(`http://localhost:3001/profile/:uuid?uuid=${(uuid)}`, {
        method: "GET",
        headers: {'Content-Type':'application/json'}  
        })  
        .then((res1) => res1.json())
        .then((data1) => this.setState({
            info:data1,
            isLoaded:true
        })); 
        console.log(this.props)

    }

    
   
    
    render () {
         if (this.state.isLoaded === false) return null; 
        
  
    console.log(this.state)
    
       
    return (
        
        
        //somewhere in here project.selectedFile
    <div className = 'container' style = {{paddingTop:'10%'}}>
        
        
        <h1>{this.state.displayName}'s stuff</h1>
        <div  className = 'row'>  
            {this.state.info.data.map(function (n) { 
                
                function handleClick() {
                   const imagelink = n.imageUrl
                   fetch('http://localhost:3001/profile/delete', {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({imagelink})
                    })
                    .then((result) => {
                        // access results...
                        console.log(result)
                    });
                  }
            return (
                <div  className = 'col s3 m3 l3'  key={n}>
                <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
                <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                <p>{n.description}</p>  
                <button onClick={handleClick}>Delete</button>
                </div>
            );
            })}
        </div>
    </div>
    
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
    connect(mapStateToProps)
)(MyProfile)
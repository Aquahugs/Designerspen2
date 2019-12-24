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
            isLoggedIn: props.auth.uid,
            isMe:false,
            info:[],
            userCollection:[]
        }
    }
    
    
   
    componentDidMount() {
        
        const {uuid} = this.state
        Promise.all([
        fetch(`http://localhost:3001/profile/:uuid?uuid=${(uuid)}`, {
        method: "GET",
        headers: {'Content-Type':'application/json'}  
        }),
        fetch(`http://localhost:3001/collection/:uuid?uuid=${(uuid)}`, {
            method: "GET",
            headers: {'Content-Type':'application/json'}  
            })
        ])
        
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1,data2]) => this.setState({
            info:data1,
            userCollection:data2,
            isLoaded:true
        }))
    
        console.log(this.props)
    
    }
    

    
   
    
    render () {
         if (this.state.isLoaded === false) return null; 
        
  
    console.log(this.state)
    console.log(this.props.auth.uid)
    console.log(this.props.match)

    
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (this.props.match.params.uuid === this.props.auth.uid) {
        button = <p>this is my profile</p>;
      } else {
        button = <p>this is not my profile</p>;
      }
    if (this.props.match.params.uuid === this.props.auth.uid)
    return (


        //somewhere in here project.selectedFile
        //MYPROFILE
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
                    {button}
                </div>
            );
            })}
        </div>

    <h1>collection</h1>
        <div  className = 'row'>  
            {this.state.userCollection.data.map(function (n) { 
                
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
                    <img style = {{maxWidth:"100%"}}src = {n.post_id}/> 
                    <p>THIS IS COLLECTED</p>
                    {/* <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                    <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                    <p>{n.description}</p>   */}
                    <button onClick={handleClick}>Delete</button>  
                    {button}
                </div>
            );
            })}
        </div>
        
    </div>
    )   
else{
  return ( 
      //somewhere in here project.selectedFile
      //OTHER USERS PROFILE
      <div className = 'container' style = {{paddingTop:'10%'}}>
        
        
      <h1>{this.state.info.data[0].displayname}'s stuff</h1>
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
              <div className = 'col s3 m3 l3'  key={n}>
              <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
              <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
              <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
              <p>{n.description}</p>
              {button} 
              </div>
            );
          })}
      </div>
      <h1>collection</h1>
        <div  className = 'row'>  
            {this.state.userCollection.data.map(function (n) { 
                
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
                    <img style = {{maxWidth:"100%"}}src = {n.post_id}/> 
                    <p>THIS IS COLLECTED</p>
                    {/* <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                    <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                    <p>{n.description}</p>   */}
                    <button onClick={handleClick}>Delete</button>  
                    {button}
                </div>
            );
            })}
        </div>

      
  </div>) 
}

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
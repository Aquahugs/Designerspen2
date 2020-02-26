import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import firebase from "firebase";
import Axios from 'axios'

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state= {  
            images :[],
            photoURL: props.auth.photoURL,
            displayName:props.auth.displayName,
            uuid: props.match.params.uuid,
            Id: props.match.params.Id,
            isLoaded:false,
            isLoggedIn: props.auth.uid,
            isMe:false,
            info:[],
            userCollection:[]
        }
    }
    
    
   
    componentDidMount() {
        
        const {Id} = this.state
        Promise.all([
        fetch(`https://designerspendroplet.getdpsvapi.com/postdetail/:Id?Id=${(Id)}`, {
        method: "GET",
        headers: {'Content-Type':'application/json'}  
        }),
     
        ])
        
        .then(([res1 ]) => Promise.all([res1.json()]))
        .then(([data1]) => this.setState({
            // userCollection:data1,
            info:data1,
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
    
    return (


        //somewhere in here project.selectedFile
        //MYPROFILE
    <div className = 'container' style = {{paddingTop:'10%'}}>
        <div  className = 'row'>  
            {this.state.info.data.map(function (n) { 
                
            return (
                <div  className = 'row'  key={n}>
                    <div className = 'col s6 m6 l6'>
                        <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
                    </div>
                    <div className = 'col s6 m6 l6'>
                    <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                        <a href={"https://www.designerspen.com/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                        <p>{n.description}</p>  
                    </div>
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
)(PostDetail)
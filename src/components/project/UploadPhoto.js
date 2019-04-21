import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class SubmitProject extends Component {
    state = {
        name:'',
        email:'',
       // location:'',
        content:'',
        file: File

    }

    fileSelectedHandler = event => {
        console.log( event.target.files[0])
        this.setState({  
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData()
        console.log(this.state.selectedFile)
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name )
        axios.post('https://us-central1-designerspen2.cloudfunctions.net/uploadFile',formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
           }
       })
       this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(e.target.id)
    }
    handleSubmit = (e) => {
   
     e.preventDefault();
     //console.log(this.state)
     this.props.createProject(this.state)
     this.props.history.push('/')
    }
   
  render() {
    // {auth} =  this.props;
   // if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className = 'container'>
       <h1> Upload a Photo</h1>
       <p> Choose a photo Supported Formats / jpg</p>
        <input type = 'file' onChange={this.fileSelectedHandler}/>
        <button onClick = {this.fileUploadHandler}>Upload</button >
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
    return {
       auth: state.firebase.auth,
       form: state.selectedFile
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
       createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubmitProject)

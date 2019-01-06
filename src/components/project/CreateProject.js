import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class CreateProject extends Component {
    state = {
        title:'',
        content:'',
        selectedFile: null

    }

    fileSelectedHandler = event => {
        console.log( event.target.files[0])
        this.setState({  
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name )
        axios.post('https://us-central1-designerspen2.cloudfunctions.net/uploadFile',formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
           }
       })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
     e.preventDefault();
     //console.log(this.state)
     this.props.createProject(this.state)
     this.props.history.push('/')
    }
   
  render() {
    const {auth} =  this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className = 'coontainer'>
        <form onSubmit={this.handleSubmit}  className = 'white'>
            <h5 className = 'grey-text text-darken-3'>Create new project</h5>
            <div className = 'input-field'>
                <label htmlFor='title'> Title</label> 
                <input type ='text' id='title' onChange={this.handleChange}/>
            </div>
            <div className = 'input-field'>
                <label htmlFor='content'> Project Content</label>
                <textarea className ='materialize-textarea'  onChange={this.handleChange} id='content'  ></textarea>
                <input type = 'file' onChange={this.fileSelectedHandler}/>
                <button onClick = {this.fileUploadHandler}>Upload</button>
            </div>
            <div className = 'input-field'>
                <button className = 'btn pink lighten-1 z-depth-0'>Create</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
    return {
       auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
       createProject: (project) => dispatch((project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)

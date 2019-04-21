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
        content:''

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
     this.props.history.push('/uploadpohoto')
    }
   
  render() {
    // {auth} =  this.props;
   // if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className = 'container'>
        <form onSubmit={this.handleSubmit }  className = 'white'>
            <h5 className = 'grey-text text-darken-3'>Create new project</h5>
            <div className = 'input-field'>
                <label htmlFor='name'> Name</label> 
                <input type ='text' id='name' onChange={this.handleChange}/>
            </div>
            <div className = 'input-field'>
                <label htmlFor='content'> Description</label>
                <textarea className ='materialize-textarea'  onChange={this.handleChange} id='content'></textarea>
            </div>
            <div className = 'input-field'>
                <label htmlFor='email'>Email</label>
                <textarea className ='materialize-textarea'  onChange={this.handleChange} id='email'></textarea>
            </div>
            
            <div className = 'input-field'>
            <button className = 'btn pink lighten-1 z-depth-0'>Submit</button>
            </div>
        </form>
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

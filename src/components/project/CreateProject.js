import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import {compose} from 'redux'
import { Redirect } from "react-router-dom";
import axios from "axios";
import { storage } from "../../config/fbConfig";
import firebase from "firebase";

class CreateProject extends Component {
    
    state = {
      title: "",
      content: "",
      url: "",
      selectedFile:null,
      facebookUser:this.props.auth.displayName
     
    };

    fileSelectedHandler = event => {
        console.log( event.target.files[0])
         this.setState({  
             selectedFile: event.target.files[0]
         })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(e.target.id)
        console.log(this.state)
    }
     fileUploadHandler = () => {
     const image = this.state.selectedFile;
     const uploadTask = storage.ref(`images/${image.name}`).put(image);
     uploadTask.snapshot.ref.getDownloadURL().then((url) => {
      this.setState( {url} );
      console.log('File available at');
      });
     uploadTask.on("state_changed",
        (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
         this.setState({ progress });
        },
       error => {
         // error function ....
         console.log(error);
       }
     );
     console.log(this.state);
   };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);

    this.props.history.push("/");
  };
  render() {
 
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    console.log(this.state)
    console.log(firebase.auth)

    return (
      <div classname = "container">
        <form style = {{paddingTop:'5%'}}onSubmit={this.handleSubmit} className = "white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title"> Title</label>
            <input type="text" id="title" onChange = {this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content"> Project Content</label>
            <textarea
              className="materialize-textarea"
              onChange={this.handleChange}
              id="content"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
          <h1> Upload a Photo</h1>
          <p> Choose a photo Supported Formats / jpg</p>
        </form>
        <div style={style}>
          <progress value={this.state.progress} max="100" />
          <br />
          <input type="file"   accept="image/png, image/jpeg"  onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <br />
          <img src={this.state.url || "http://via.placeholder.com/400x300"}
            alt="Uploaded images"
            height="300"
            width="400"
          />
        </div>
      </div>
    );
  }
}


   
const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default compose(connect(
  mapStateToProps,
  mapDispatchToProps
))(CreateProject);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import firebase from 'firebase'

import config from '../../config/fbConfig'

import FileUploader from 'react-firebase-file-uploader'


const db = firebase.firestore()

class CreateProject extends Component {
    state = {
        title:'',
        content:'',
        images: [],
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
     console.log(this.state)
     this.props.createProject(this.state)
     this.props.history.push('/')
    }




    
    handleUploadStart = ()=>{
        console.log('image uploading...')
    }

    handleUploadSuccess = filename  => {
        console.log(filename)

        firebase.storage().ref('images').child(filename).getDownloadURL()
        .then((url) => {
            console.log(url) 

            firebase.storage().ref('images').child(filename).getMetadata()
            .then((result) => {

                var newDoc = db.collection('uploadImage').doc() //generates a new collection
                newDoc.set({ // set up Fields
                    imageName: filename,
                    imageURL:url,
                    docRef: newDoc.id
                })

                db.collection('uploadImage').doc(newDoc.id).get()
                    .then((result)=> {

                        console.log(result.data())
                        this.setState ({
                            images: this.state.images.concat(result.data())
                            })
                    })

                console.log(result)
                })

                this.setState ({
                    images: this.state.images.concat(url)
                    })

                    console.log(this.state.image)
                    
            })
         }

    componentWillMount() {
        console.log('mounted')

        db.collection('uploadImage').get()
            .then((result) => {
                console.log (result + "!!!!")
                result.forEach((documents) => {
                    console.log(documents.data().imageURL)

                 this.setState ({
                     images: this.state.images.concat(documents.data())
                 })
                })
            })

        //this.setState ({
        //    images: this.state.images.concat(result.data())
      //  })
    }

    handleClick = (e,data,i) => { // later just onlick handleClick to delete image 
        console.log(data)
        console.log(i)
        console.log('delete image...')

        firebase.storage().ref('images').child(data.imageName).delete()
        .then((result) => {
            console.log('delete image from storage...')

                db.collection('uploadImage').doc(data.docRef).delete()    
                .then ((result) => {
                    console.log('deleted image from document / collection successful')

                    var removeItem = this.state.images

                        removeItem.slice(i,1 ) // index position 1 
                        this.setState ({
                            images:removeItem
                        })
                })
        })
    }
   





  render() {
    console.log(this.state.images)
    console.log(this.state.selectedFile)
    const {auth} =  this.props;
    if(!auth.uid) return <Redirect to='/signin'/>

    return (
      <div className = 'coontainer'>
        <h3>Images</h3>
            {this.state.images.map((data,i) =>{
                return (
                    <div key={i}>
                        <img src = {data.imageURL} alt=""/>
                       
                    </div>
                )
            })}
        <form onSubmit={this.handleSubmit }  className = 'white'>
            <h5 className = 'grey-text text-darken-3'>Create new project</h5>
            <div className = 'input-field'>
                <label htmlFor='title'> Title</label> 
                <input type ='text' id='title' onChange={this.handleChange}/>
            </div>
            <div className = 'input-field'>
                <label htmlFor='content'> Project Content</label>
                <textarea className ='materialize-textarea'  onChange={this.handleChange} id='content'></textarea>
            </div>
            <div className = 'input-field'>
            <button className = 'btn pink lighten-1 z-depth-0'>Create</button>
            </div>
            <input type = 'file' onChange={this.fileSelectedHandler}/>
             <button onClick = {this.fileUploadHandler}>Upload</button>
        </form>


        <div>
            <FileUploader 
            accept="image/*"
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
            />
        </div>





      </div>
    )
  }
}

const mapStateToProps = (state)=> {
    return {
        auth: state.firebase.auth,
        photos: state.firebase.selectedFile
       
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
       createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
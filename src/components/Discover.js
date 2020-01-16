    import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import  './Inspiration.scss'
import axios from 'axios';
import DefaultUpload from './DefaultUpload'
import SubNav from './shared/SubNav'
import Popup from "reactjs-popup";

import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'





class Discover extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            items :[],
            users:[],
            description: '',
            postTag: '',
            collectedimage:'',
            collection:[],
            collect:false,
            disabledButton:[],
            open:false,
            uuid: props.match.params.uuid,
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            tags:[],
            bio:[],
            id:[],
            uuid:this.props.auth.uid,
            photoUuid:props.auth.uid,
            selectedFile: [],
            isLoaded: false,
            loadPost:false,
            // product: {
            //     username:'',
            //     email:'',
            //     password:''
            // },
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onChange = (e) => {
        // event to update state when form inputs change
        switch (e.target.name) {
            case 'selectedFile':
              this.setState({ selectedFile: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
    }

    onSubmit = (e) => {
        // event to submit the data to the server
        e.preventDefault();
        console.log(e)
        const { selectedFile,description,uuid,displayName,userPhotoUrl,postTag} = this.state;
        const id = this.state.bio.data[0].id
    
        
        let formData = new FormData();

        formData.append('description', description);
        formData.append('file', selectedFile);
        formData.append('userid', uuid);
        formData.append('displayName', displayName);
        formData.append('userPhotoUrl', userPhotoUrl);
        formData.append('postTag', postTag);
        formData.append('id', id);
        
       
        fetch(`http://localhost:3001/addtags?posttag=${postTag}`)
        axios.post('http://localhost:3001/uploadHandler', formData)
        
        
            .then((result) => {
            // access results...
           
            console.log(result)
            });
    }
      
 
   
      
    

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        //  window.onscroll = function() {
        //      if(window.pageYOffset >= 1000) {
        //           console.log("poopty scoop")
        //           this.setState({
        //             loadPost:true,
        //           })
        //          }
        //          window.onscroll = null;
                 
        //      }
        const {posttag} = this.state
        const {uuid} = this.state


         Promise.all([
           
             fetch('http://localhost:3001/Discover'),
             fetch('http://localhost:3001/tags'),
             fetch(`http://localhost:3001/bio/:uuid?uuid=${(uuid)}`,
             
              {
                method: "GET",
                headers: {'Content-Type':'application/json'}  
            }),
            fetch(`http://localhost:3001/collection/:uuid?uuid=${(uuid)}`)
            

         ])
         .then(([res1, res2,res3,res4]) => Promise.all([res1.json(), res2.json(),res3.json(),res4.json()]))
         .then(([data1,data2,data3,data4]) => this.setState({
             isLoaded:true,
             userphotos:data1,
             tags:data2,
             bio:data3,
             collection:data4
         }));
    }

   
    
    handleScroll(event) { // IGNORE
        if(window.pageYOffset <= 1000) {
            console.log ("correct")
            
        }
      }

      handleSubmit(event){ //IGNORE
        event.preventDefault();
        fetch('http://localhost:3001/users/add', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
            "username": this.username.value,
            "email":this.email.value,
            "password":this.password.value
       })
        });
       };

       addProduct = _ => { //IGNORE 
            const {product} = this.state;
            fetch(`http://localhost:3001/users/add?username=${product.name}&email=${product.email}&password=${product.password}`)
            .then(console.log("this worked stuff submitted"))
            .catch (err => console.err(err))
       }
       onCollect = _ => {  
        const {uuid,collectedimage} = this.state;
        fetch(`http://localhost:3001/collectpost?uuid=${uuid}&post_id=${collectedimage}`)
        .then(console.log("this worked stuff submitted"))
        .catch (err => console.err(err))
    }

    onRemoveCollect = _ => {  
        const {uuid,collectedimage} = this.state;
        fetch(`http://localhost:3001/removecollectpost?uuid=${uuid}&post_id=${collectedimage}`)
        .then(console.log("this worked stuff REMOVED"))
        .catch (err => console.err(err))
    }
    openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

       

       onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
      }
    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile,postTag,id } = this.state;
        const {uuid,displayName,userPhotoUrl} = this.state
        
        
        
 
          console.log(this.state)

          console.log(this.state.userphotos)
          console.log(this.state.collection)


          
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else{
            const headerStyle = {
                margin: '0',
                paddingTop:'50px'
              }
              const dropzoneStyle = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                borderWidth: 2,
                borderRadius: 2,
                borderColor: '#eeeeee',
                borderStyle: 'dashed',
                backgroundColor: '#fafafa',
                color: '#bdbdbd',
                outline: 'none',
                transition: 'border .24s ease-in-out'
              };
              const linerStyle = {
                  margin:'0',
                  fontSize: '12px'
              }

              const hoverImages = {
                maxWidth:'350px',
                paddingLeft:"2%",
                height:'auto',
              } 

              const collectButton = {
                backgroundColor:'#FF5065',
                border:'none',
                borderRadius: '50%',
                width:'35px',
                height:'35px',
                display: this.state.collect ? "none": "inline-block"
              }

        return(   
            
            <div style = {{padding:"5%"}}>
                <SubNav/>     
                {this.state.tags.data.map(function (n) { 
                    return ( //post tags 
                        <div  key={n}>
                            <a  href={"http://localhost:3000/Discover/" + n.posttag} > 
                                <ul style = {{display:'inline'}}>
                                    <li style = {{display:'inline',float:'left',padding:'1%'}} >{n.posttag}</li>
                                </ul>
                            </a>
                        </div>  
                    );
                    })}    
                {/* Upload Zone */}
                <div  className = 'row' style = {{float:'left'}}> 
                <div className = 'col s3 m3 l3'  >
                <h1 style = {headerStyle}>upload photo</h1>
                <form onSubmit={this.onSubmit}>
                {/* <div {...getRootProps({ onChange: e =>  this.setState({ selectedFile: e.target.files[0] })})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div> */}
                     <Dropzone 
                     styles={dropzoneStyle}
                      maxFiles={1}
                      multiple={true}
                      canCancel={true}
                     accept="image/png, image/gif,image/jpeg, image/jpg, image/png"
                     onDrop={this.onDrop} accept='image/*'  onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps,isDragActive,isDragReject}) => (
                            <section>
                            <div {...getRootProps({ onChange: e =>  this.setState({ selectedFile: e.target.files[0] })})}>
                                <input  {...getInputProps()} />
                                {!isDragActive && 'Click here or Drag and Drop files'}
                                {isDragActive && !isDragReject && "Upload"}
                                {isDragReject && "Welp...that file type is not accepted, sorry "}
                            </div>
                            </section>
                        )}
                    </Dropzone> 
                    {/* <DefaultUpload doWhatever={this.onChange.bind(this,file)}></DefaultUpload> */}
                    <p>description</p>
                    <input
                    type="text"
                    name="description"
                    value={description}
                    placeholder="ADd a description,if you'd like"
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="postTag"
                    value={postTag}
                    placeholder="category"
                    onChange={this.onChange}
                    />
                        
                    <button type="submit">Submit</button>
                    
                    <div style = {{display:"25px", opacity:"0",maxWidth:"1px"}} >

                    <input type="text" name="userid" value={uuid} readOnly />
                    <input type="text" name="displayName" value={this.state.bio.data[0].username} readOnly />
                    <input type="text" name="userPhotoUrl" value={this.state.bio.data[0].photourl} readOnly />
                    </div>
                 </form>
                 
                </div> 
                    {/* //mapping through all the usernames in the new_tabel tabel */}
                    
                    {this.state.userphotos.data.map((n,index) => { 
                        
                    return (
                        <div  className = 'col s3 m3 l3'  key={n}>
                            <Popup modal trigger={<img  style = {{maxWidth:"100%"}}src = {n.imageUrl}/>} style = {{width:"100%"}}>
                                <div className = 'col s8 m8 l8'>
                                    <img style = {{maxWidth:"100%",maxHeight:"800px"}}src = {n.imageUrl}/> 
                                </div>
                                <div className = 'col s4 m4 l4'>
                                <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                                    <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                                    <p>{n.description}</p>  
                                </div>
                            </Popup>
                        
                            <div className = "row"> 
                                <div className = "col s6 m6 l6">
                                    <div style = {{float:'left'}}><img  style = {{maxWidth:"25px"}} src = {n.userphotourl}/></div> 
                                    <div style = {{float:'left'}}><a  href={"http://localhost:3000/profile/" + n.uuid} > <p >{n.displayname}</p> </a></div>
                                </div>
                                <div className = "col s6 m6 l6">
                                    <button 
                                        className = 'collectButton'  
                                        disabled={this.state.disabledButton === index}
                                        onClick={e => this.setState({collectedimage: n.imageUrl,collect:true,disabledButton:index},this.onCollect)}  type="button">
                                    </button>
                                    <button  
                                        style={{
                                        display: this.state.collect ? "": "none",
                                        }}                                       
                                        onClick={e => this.setState({collectedimage: n.imageUrl,collect:false},this.onRemoveCollect)} 
                                        type="button" class="btn btn-primary">Uncollect
                                    </button>
                                </div>
                            </div>
                        <div className = "row">
                            <div className = "col s6 m6 l6">
                                <p>{n.description}</p>
                            </div>
                           
                        </div>
                         
                        </div>
                    );
                    })}
                </div>

                {/* <div id="signup">
                <input value = {product.name}
                       onChange={e => this.setState({product: {...product, name: e.target.value}})}/>
                <input value = {product.email} 
                       onChange={e => this.setState({product: {...product, email: e.target.value}})}/>
                <input value = {product.password} 
                       onChange={e => this.setState({product: {...product, password: e.target.value}})}/>
                <button onClick = {this.addProduct}>Submit this stuff</button>
                </div> */}
            </div>
        )
        }
    }
}

const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

export default   connect(mapStateToProps) (Discover);
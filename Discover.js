    import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import  './Inspiration.scss'
import axios from 'axios';
import DefaultUpload from './DefaultUpload'
import SubNav from './shared/SubNav'
import PopNotification from './shared/PopNotification'
import {Redirect} from 'react-router-dom'
import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import BottomScrollListener from 'react-bottom-scroll-listener';

import Logo from '../assets/images/Asset 1.svg'
import Ownershipimage from '../assets/images/ownershipimage.png'





class Discover extends Component {

    
    createNotification = (type) => {
        return () => {
            const {uuid,collectedimage} = this.state;
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success ', 'Image was added to your collection');
              fetch(`https://designerspendroplet.getdpsvapi.com/collectpost?uuid=${uuid}&post_id=${collectedimage}`)
              .then(console.log("this worked stuff submitted"))
              .catch (err => console.err(err))
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
              case 'error':
                NotificationManager.error('error ', 'Image was removed from your collection');
                

                fetch(`https://designerspendroplet.getdpsvapi.com/removecollectpost?uuid=${uuid}&post_id=${collectedimage}`)
                .then(console.log("this worked stuff REMOVED"))
                .catch (err => console.err(err))
                break;
          }
        };
      };
    
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
            morepost:[],
            limit:50,
            per:2,
            page:1,
            totalPages:null,
            tags:[],
            bio:[],
            id:[],
            uuid:this.props.auth.uid,
            photoUuid:props.auth.uid,
            selectedFile: [],
            previewImage:[],
            isLoaded: false,
            loadPost:false,
            isUploading:false,
            red: true,
            checked: '' 

            // product: {
            //     username:'',
            //     email:'',
            //     password:''
            // },
            
        }
        this.handleCheck = this.handleCheck.bind(this); 
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

    changeColor(e){
        e.target.style.color = 'black'
        console.log(e.target);
     }

    onSubmit = (e) => {
        // event to submit the data to the server
        // e.preventDefault();
        console.log(e)
        const { selectedFile,description,uuid,displayName,userPhotoUrl,postTag,checked} = this.state;
        const id = this.state.bio.data[0].id
    
        
        let formData = new FormData();

        formData.append('description', description);
        formData.append('file', selectedFile);
        formData.append('userid', uuid);
        formData.append('displayName', displayName);
        formData.append('userPhotoUrl', userPhotoUrl);
        formData.append('postTag', postTag);
        formData.append('id', id);
        formData.append('checked', checked);

        
       
        fetch(`https://designerspendroplet.getdpsvapi.com/addtags?posttag=${postTag}`)
        axios.post('https://designerspendroplet.getdpsvapi.com/uploadHandler', formData)
            .then((result) => {
            // access results...
            console.log(result)
            })
            .then(() => {
        })
    }
    
      
 
   
      
    

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
        const {uuid} = this.state
         Promise.all([
             fetch('https://designerspendroplet.getdpsvapi.com/Discover'), 
             fetch('https://designerspendroplet.getdpsvapi.com/tags'),
             fetch(`https://designerspendroplet.getdpsvapi.com/bio/:uuid?uuid=${(uuid)}`,
             
              {
                method: "GET",
                headers: {'Content-Type':'application/json'}  
            }),
            fetch(`https://designerspendroplet.getdpsvapi.com/collection/:uuid?uuid=${(uuid)}`)
         ])
         .then(([res1, res2,res3,res4]) => Promise.all([res1.json(), res2.json(),res3.json(),res4.json()]))
         .then(([data1,data2,data3,data4]) => this.setState({
             isLoaded:true,
             userphotos:data1,
             tags:data2,
             bio:data3,
             collection:data4
         }))      
    }
    

   
    
    

   
    onCollect = _ => {  
    const {uuid,collectedimage} = this.state;
    fetch(`https://designerspendroplet.getdpsvapi.com/collectpost?uuid=${uuid}&post_id=${collectedimage}`)
    .then(console.log("this worked stuff submitted"))
    .catch (err => console.err(err))
    }

    onRemoveCollect = _ => {  
        const {uuid,collectedimage} = this.state;
        fetch(`https://designerspendroplet.getdpsvapi.com/removecollectpost?uuid=${uuid}&post_id=${collectedimage}`)
        .then(console.log("this worked stuff REMOVED"))
        .catch (err => console.err(err))
    }
    openModal() {
    this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

       

    onDrop = (e) => {
    this.setState({ selectedFile: e[0],previewImage: URL.createObjectURL(e[0]),isUploading:true})
    console.log(e.file)
    console.log(e.target)
    console.log(e[0])
    console.log(this.state)
    }


    onCancel = (e) => {
    this.setState({ selectedFile:[],previewImage:[],isUploading:false})

    console.log(this.state)
    }

    handleCheck(e){
        this.setState({
         checked: '1'
        })
        console.log(this.state)
      }

      isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }
    
     
      loadmore = (event) => {
        const {limit} = this.state;
        fetch(`https://designerspendroplet.getdpsvapi.com/Discovermore?limit=${limit}`)
        .then((res1) => Promise.all([res1.json()]))
        .then(([data1]) => this.setState({ 
            userphotos:data1,
            limit:limit + 50
           
        }));
        console.log(this.state)
     } 

     


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile,postTag,id } = this.state;
        const {uuid,displayName,userPhotoUrl,userphotos} = this.state;
        const {auth} = this.props; 
        const {data} = this.state.userphotos
        
       
          console.log(this.state)
          console.log(this.state.userphotos.data)
          console.log(this.state.collection.data)


          
        if (!isLoaded)    {return <div style = {{paddingTop:'50%'}}><h1 >Loading...</h1></div>
        }
        
        else{
          
              const dropzoneStyle = {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign:'center',
                padding: '20px',
                borderWidth: 2,
                borderRadius: 2,
                borderColor: '#eeeeee',
                borderStyle: 'dashed',
                backgroundColor: '#fafafa',
                color: '#bdbdbd',
                outline: 'none',
                transition: 'border .24s ease-in-out',
                width:'350px',
                height:'500px',
                display: this.state.isUploading ? "none": "inline-block", 
                paddingTop:'35%'
              };
              

              const myuserPhoto = {
                float:'left',
                width:'25px',
                display: this.state.isUploading ? "inline-block": "none"
              }

              const myDisplayname = {
                  float:'left',
                  fontSize:'12px',
                  display: this.state.isUploading ? "inline-block": "none"
              }

              const uploadInputs  = {
                display: this.state.isUploading ? "inline-block": "none"
                  
              }

              const categoryHeader = {
                fontSize:'14px',
                marginBottom:'0',
                fontWeight:'bold',
                display: this.state.isUploading ? "inline-block": "none"
              }

              const uploadButtons = {
                  width:'100px',
                  float:'right',
                  marginTop:'4%',
                  marginBottom:'4%',
                  backgroundColor:'# ',
                  display: this.state.isUploading ? "inline-block": "none"
              }
              const cancelButtons = {
                  width:'100px',
                  float:'left',
                  marginTop:'4%',
                  marginBottom:'4%',
                  backgroundColor:'#cdcdcd',
                  display: this.state.isUploading ? "inline-block": "none"
              }

              const uploadBoxshadow = {
                height:'100%',
                boxShadow: this.state.isUploading ? "-2px 4px 16px 0px rgba(0,0,0,0.19)": "none"
            }



        return(   
            
            <div style = {{padding:"5%"}}>
                 <NotificationContainer/>
                 <BottomScrollListener onBottom={this.loadmore}/>

                <SubNav/>     
                {this.state.tags.data.map(function (n) { 
                    return ( //post tags 
                        <div  key={n}>
                            <a  href={"https://designerspendroplet.getdpsvapi.com/Discover/" + n.posttag} > 
                                <ul style = {{display:'inline'}}>
                                    <li style = {{display:'inline',float:'left',padding:'1%'}} >{n.posttag}</li>
                                </ul>
                            </a>
                        </div>  
                    );
                    })}    
                
                <div  className = 'row' style = {{float:'left'}}> 
                {/* Upload Zone */}
                    <div className = 'col s3 m3 l3 ' style = {uploadBoxshadow}  >
                        <form onSubmit={this.onSubmit} action="#">
                        <div style = {uploadInputs}>
                            <img src={this.state.previewImage}/>
                            <div  className = 'row'>
                                <div className = 'col s12 m12 l12'  >
                                    <img  style = {myuserPhoto} src = {this.state.userPhotoUrl}/>
                                    <p  style={myDisplayname}>{this.state.displayName}</p>
                                </div>
                            </div>
                        </div>
                        {/* Description input */}
                        <input
                        style = {uploadInputs}
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Add a description,if you'd like"
                        onChange={this.onChange}
                        />
                        {/* Category Input */}
                        <h3 style = {categoryHeader}>category</h3>
                        <input
                        style = {uploadInputs}
                        type="text"
                        name="postTag"
                        value={postTag}
                        placeholder="Art,Photography,Car design,Memes etc."
                        onChange={this.onChange}
                        />
                            <p style = {uploadInputs}>
                            <label>
                                <input
                                onChange={this.handleCheck} 
                                name="checked"
                                type="checkbox" />
                                <span>I created the image I'm sharing
                                </span>
                            </label>
                            <Popup modal trigger={<span><br/>(what is this)</span>}>
                                <div className = ' ownership col s12 m12 l12' style = {{paddingLeft:'5%',paddingRight:'5%',paddingBottom:'5%'}}>
                                    <img className = 'ownership' src = {Ownershipimage}/>
                                    <img  className = 'ownership' src = {Logo} style = {{width:'75px'}}/>
                                    <h1>Ownership</h1>
                                    <p className = 'ownershipP'>
                                        By checking this box your post will receive a green check that represents that the content you are contributing was created by you.  
                                    </p>
                                    <p  className = 'ownershipP2'>
                                        As between you and Designerspen, you will retain ownership of all original text, images, videos, messages, comments, ratings, 
                                        reviews and other original content you provide on or through the Site.
                                    </p>
                                </div>
                            </Popup>
                            </p>
                            <Dropzone 

                                maxFiles={3}
                                multiple={true}
                                canCancel={true}
                                accept="image/png, image/gif,image/jpeg, image/jpg, image/png"
                                onDrop={this.onDrop} accept='image/*' >
                                {({getRootProps, getInputProps,isDragActive,isDragReject}) => (
                                    <section>
                                    <div className = 'dropzone' style={dropzoneStyle} {...getRootProps({ onChange: e =>  this.setState({ selectedFile: e.target.files[0],previewImage: URL.createObjectURL(e.target.files[0])}) })}>
                                        <input  {...getInputProps()} />
                                        <div className = 'row'>
                                            <img style ={{display: isDragActive && !isDragReject  ? "inline-block": "none",width:'70px'}}src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Asset%201.png?alt=media&token=855ff9bd-be14-433c-a7aa-97f70c8b6f1d"/>
                                            <img style ={{display: isDragActive ? "none": "inline-block",width:'100px'}}src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Add%20Image_929899.png?alt=media&token=a928b5aa-b0ee-4ba8-a59c-6bf5697dcd1a"/>
                                            <img style ={{display: isDragReject ? "inline-block": "none",width:'70px'}}src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Stop.png?alt=media&token=c8d96781-e668-4976-89ea-4a3213d405cb"/>
                                        </div>
                                        {!isDragActive && 'Click here or Drag and Drop images'}
                                        {isDragActive && !isDragReject && "Upload"}
                                        {isDragActive && !isDragReject && ":)"}
                                        {isDragReject && "Welp...that file type is not accepted, sorry "}
                                    </div>
                                    </section>
                                )}
                            </Dropzone> 
                            

                            {/* <DefaultUpload doWhatever={this.onChange.bind(this,file)}></DefaultUpload> */}
                            <Button 
                                style = {uploadButtons}
                                variant="outline-primary"
                                type="submit">Submit
                            </Button>
                            <Button 
                                onClick={this.onCancel}
                                style = {cancelButtons}
                                variant="outline-primary"
                                type="button">
                                Cancel
                            </Button>
                            
                            <div style = {{display:"none", opacity:"0",maxWidth:"1px"}} >

                            <input type="text" name="userid" value={uuid} readOnly />
                            <input type="text" name="displayName" value={this.state.bio.data[0].username} readOnly />
                            <input type="text" name="userPhotoUrl" value={this.state.bio.data[0].photourl} readOnly />
                            </div>
                        </form>
                        
                    </div> 
                    {/* //mapping through all the usernames in the new_tabel tabel */}
                    
                    <div style = {{display: this.state.isLoaded ? 'none' : 'inline-block'}}><h1>loading</h1></div>

                    {this.state.userphotos.data.slice(0).map((n,index) => { 
                     
                    
                    return (
                        <div style ={{padding:'0.75%'}} className = 'col s3 m3 l3'  key={n}>
                            <Popup modal trigger={<img  style = {{maxWidth:"100%"}}src = {n.imageUrl}/>} style = {{width:"100%"}}>
                                <div className = 'col s8 m8 l8'>
                                    <img style = {{maxWidth:"100%",maxHeight:"800px"}}src = {n.imageUrl}/> 
                                </div>
                                <div className = 'col s4 m4 l4'>
                                <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                                    <a href={"https://designerspendroplet.getdpsvapi.com/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                                    <p>{n.description}</p>
                                </div>
                            </Popup>
                        
                            <div   style = {{backgroundColor:'white',paddingTop:'2%'}} className = "row dis"> 
                                <div  style = {{display: n.displayname === "undefined" ? "none": "inline-block"}} className = "col s6 m6 l6">
                                    <div style = {{float:'left'}}><img  style = {{maxWidth:"25px"}} src = {n.userphotourl}/></div> 
                                    <div style = {{float:'left'}}><a  href={"https://designerspendroplet.getdpsvapi.com/profile/" + n.uuid} > <p >{n.displayname}</p> </a></div>
                                </div>
                                <div className = "col s6 m6 l6">

                                    {/* REMOVE BUTTON */}
                                    {this.state.collection.data.map((j,index) => { 
                                        return(
                                            <div key={j}>
                                            <button   className = 'uncollectButton  btn-danger'   style = {{display : n.imageUrl === j.post_id ? "inline-block": "none"}}
                                            onClick={e => this.setState({collectedimage: n.imageUrl},this.createNotification('error'),this.onRemoveCollect)}  type="button"
                                            >   </button>
                                            <p className = 'remove'>Remove</p>
                                            </div>
                                        )
                                    })}
                                    {/* COLLECT BUTTON */}
                                    <button 
                                        style = {{float: n.displayname === "undefined" ? "right": ""}}
                                        className = 'collectButton  btn-success' 
                                        onClick={e => this.setState({collectedimage: n.imageUrl},this.createNotification('success'),this.onCollect)}  type="button">
                                    </button>
                                    
                                    <p className = 'collect'>Collect</p>
                                </div>
                            
                        <div  className = "row">
                            <div className = "col s8 m8 l8">
                                <p>{n.description}</p>
                               <img src = {Logo} style = {{display : n.usersubmitted === '1' ? "inline-block": "none",width:'30px',paddingLeft:'1em'}}/>
                               <div className = 'tag' style = {{float:'left'}}><a  href={"https://designerspendroplet.getdpsvapi.com/Discover/" + n.posttag} >  <p >{n.posttag}</p> </a></div>

                            </div>
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
import React, {Component} from 'react';
import  '../Inspiration.scss'
import axios from 'axios';
import SubNav from '../shared/SubNav'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {connect} from 'react-redux';
import BottomScrollListener from 'react-bottom-scroll-listener';
import Popup from "reactjs-popup";

import Logo from '../../assets/images/ownershipimage.png'




class Taggedpost extends Component {

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
            posttag: props.match.params.posttag,
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            collection:[],
            collectedimage:'',
            tags:[],
            limit:50,
            uuid:this.props.auth.uid,
            photoUuid:props.auth.uid,
            selectedFile: '',
            isLoaded: false,
            loadPost:false,
            // product: {
            //     username:'',
            //     email:'',
            //     password:''
            // },
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { selectedFile,description,uuid,displayName,userPhotoUrl,postTag} = this.state;
        
        let formData = new FormData();

        formData.append('description', description);
        formData.append('file', selectedFile);
        formData.append('userid', uuid);
        formData.append('displayName', displayName);
        formData.append('userPhotoUrl', userPhotoUrl);
        formData.append('postTag', postTag);


        

        axios.post('https://designerspendroplet.getdpsvapi.com/uploadHandler', formData)
        
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
        const {limit} = this.state;
        const {uuid} = this.state


         Promise.all([
             
            fetch(`https://designerspendroplet.getdpsvapi.com/Discover/:posttag?posttag=${(posttag)}&limit=${limit}`),
            fetch('https://designerspendroplet.getdpsvapi.com/tags'),
            fetch(`https://designerspendroplet.getdpsvapi.com/collection/:uuid?uuid=${(uuid)}`)

         ])
         .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
         .then(([data1, data2,data3]) => this.setState({
             isLoaded:true,
             userphotos:data1,
             tags:data2,
             limit:limit + 50,
             collection:data3
         }));
    }

   
    
    handleScroll(event) {
        if(window.pageYOffset <= 1000) {
            console.log ("correct")
            
        }
      }

      handleSubmit(event){ 
        event.preventDefault();
        fetch('https://designerspendroplet.getdpsvapi.com/users/add', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
            "username": this.username.value,
            "email":this.email.value,
            "password":this.password.value
       })
        });
       };

       addProduct = _ => {
            const {product} = this.state;
            fetch(`https://designerspendroplet.getdpsvapi.com/users/add?username=${product.name}&email=${product.email}&password=${product.password}`)
            .then(console.log("this worked stuff submitted"))
            .catch (err => console.err(err))
       }

       onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
      }

      loadmore = (event) => {
        const {posttag} = this.state

        const {limit} = this.state;
        fetch(`https://designerspendroplet.getdpsvapi.com/Discover/:posttag?posttag=${(posttag)}&limit=${limit}`)
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
        const { description, selectedFile,postTag } = this.state;
        const {uuid,displayName,userPhotoUrl} = this.state
        
        
 
          console.log(this.state)
          console.log(this.props)
          
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

        return(   
            
            <div style = {{padding:"5%"}}>
                <NotificationContainer/>
                <BottomScrollListener onBottom={this.loadmore} />
                <SubNav/>     
                {this.state.tags.data.map(function (n) { 
                    return ( //post tags 
                        <div  key={n}>
                            <a  href={"https://www.designerspen.com/Discover/" + n.posttag} > 
                                <ul style = {{display:'inline'}}>
                                    <li style = {{display:'inline',float:'left',padding:'1%'}} >{n.posttag}</li>
                                </ul>
                            </a>
                        </div>  
                    );
                    })}   
                {/* Upload Zone */}
                <div  className = 'row' style = {{float:'left'}}> 
                 
                    {/* //mapping through all the usernames in the new_tabel tabel */}
                    {this.state.userphotos.data.slice(0).map((n,index) => { 
                     
                    
                     return (
                         <div style ={{padding:'0.75%'}} className = 'col s3 m3 l3'  key={n}>
                             <Popup modal trigger={<img  style = {{maxWidth:"100%"}}src = {n.imageUrl}/>} style = {{width:"100%"}}>
                                 <div className = 'col s8 m8 l8'>
                                     <img style = {{maxWidth:"100%",maxHeight:"800px"}}src = {n.imageUrl}/> 
                                 </div>
                                 <div className = 'col s4 m4 l4'>
                                 <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                                     <a href={"https://www.designerspen.com/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                                     <p>{n.description}</p>
                                 </div>
                             </Popup>
                         
                             <div   style = {{backgroundColor:'white',paddingTop:'2%'}} className = "row dis"> 
                                 <div  style = {{display: n.displayname === "undefined" ? "none": "inline-block"}} className = "col s6 m6 l6">
                                     <div style = {{float:'left'}}><img  style = {{maxWidth:"25px"}} src = {n.userphotourl}/></div> 
                                     <div style = {{float:'left'}}><a  href={"https://www.designerspen.com/profile/" + n.uuid} > <p >{n.displayname}</p> </a></div>
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
                                <div className = 'tag' style = {{float:'left'}}><a  href={"https://www.designerspen.com/Discover/" + n.posttag} >  <p >{n.posttag}</p> </a></div>
 
                             </div>
                         </div>
                         </div>
                         </div>
                     );
                     })}
                </div>
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

export default   connect(mapStateToProps) (Taggedpost);
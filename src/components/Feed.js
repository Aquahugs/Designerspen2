import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import  './Inspiration.scss'
import axios from 'axios';
import DefaultUpload from './DefaultUpload'
import SubNav from './shared/SubNav'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'





class Inspiration extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            items :[],
            users:[],
            description: '',
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            uuid:this.props.auth.uid,
            photoUuid:props.auth.uid,
            selectedFile: '',
            isLoaded: false,
            loadPost:false,
           
            
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
        const { selectedFile,description,uuid,displayName,userPhotoUrl} = this.state;
        
        let formData = new FormData();

        formData.append('description', description);
        formData.append('file', selectedFile);
        formData.append('userid', uuid);
        formData.append('displayName', displayName);
        formData.append('userPhotoUrl', userPhotoUrl);

        

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
        
         Promise.all([
             fetch('https://designerspendroplet.getdpsvapi.com/userphotos'),
             fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&offset=52&format=text'),
             fetch(`https://designerspendroplet.getdpsvapi.com/adduser?uuid=${this.props.auth.uid}&username=${this.props.auth.displayName}&photourl='${this.props.auth.photoURL}'&bio=''&email=''`)

         ])
         .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
         .then(([data1, data2]) => this.setState({
             isLoaded:true,
             userphotos:data1,
             items2:data2
         }));
    }
    
    handleScroll(event) {
        if(window.pageYOffset <= 1000) {
            console.log ("correct")
            
        }
      }

      handleSubmit(event){ 
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

       addProduct = _ => {
            const {product} = this.state;
            fetch(`http://localhost:3001/users/add?username=${product.name}&email=${product.email}&password=${product.password}`)
            .then(console.log("this worked stuff submitted"))
            .catch (err => console.err(err))
       }

       onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
      }
    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile } = this.state;
        const {uuid,displayName,userPhotoUrl} = this.state
        

 
        console.log(this.state)
        console.log(this.props.auth.displayName)
          
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
                <SubNav/>     
                          
                {/* Upload Zone */}
                <div  className = 'row'> 
                
                    {/* //mapping through all the usernames in the new_tabel tabel */}
                    {this.state.userphotos.data.map(function (n) { 
                    return (
                        <div  className = 'col s3 m3 l3'  key={n}>
                        <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/>
                            <div className = "row"> 
                                <div className = "col s12 m12 l12">
                                    <div style = {{float:'left'}}><img  style = {{maxWidth:"25px"}} src = {n.userphotourl}/></div> 
                                    <div style = {{float:'left'}}><a  href={"https://www.designerspen.com/profile/" + n.uuid} > <p >{n.displayname}</p> </a></div>
                                </div>
                            </div>
                        <p>{n.description}</p>  
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

export default   connect(mapStateToProps) (Inspiration);
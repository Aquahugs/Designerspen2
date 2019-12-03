import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import  './Inspiration.scss'
import axios from 'axios';
import DefaultUpload from './DefaultUpload';
import { useAuth0 } from "../react-auth0-spa";
import {connect} from 'react-redux'




class Inspiration extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            items :[],
            users:[],
            description: '',
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            uuid:this.props.auth.uid,
            selectedFile: '',
            isLoaded: false,
            loadPost:false,
            product: {
                username:'',
                email:'',
                password:''
            },
            
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
         Promise.all([
             fetch('http://localhost:3001/userphotos'),
             fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&offset=52&format=text')
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


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile } = this.state;
        const {uuid,displayName,userPhotoUrl} = this.state
        
       
       
        



          console.log(users) 
          console.log(loadPost)
          console.log( this.state.users.data)
          console.log(this.state.selectedFile)
          console.log(this.state)
          console.log(uuid)
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        
        else{

            const headerStyle = {
                margin: '0',
                paddingTop:'50px'
              }
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
                <h1 style = {headerStyle}>Get Inspired</h1>
                <p style = {linerStyle}>A visual stream of Inspiration</p>

                {/* //mapping through all the usernames in the new_tabel tabel */}
                <div  className = 'row'>  
                    {this.state.userphotos.data.map(function (n) { 
                    return (
                        <div  className = 'col s3 m3 l3'  key={n}>
                        <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
                        <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> <p>{n.displayname}</p>
                        <p>{n.description}</p>  
                        </div>
                    );
                    })}
                </div>

                <div id="signup">
                <input value = {product.name}
                       onChange={e => this.setState({product: {...product, name: e.target.value}})}/>
                <input value = {product.email} 
                       onChange={e => this.setState({product: {...product, email: e.target.value}})}/>
                <input value = {product.password} 
                       onChange={e => this.setState({product: {...product, password: e.target.value}})}/>
                <button onClick = {this.addProduct}>Submit this stuff</button>
                </div>
                 <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    />
                    <input
                    type="text"
                    name="userid"
                    value={uuid}
                    readOnly
                    />
                    <input
                    type="text"
                    name="displayName"
                    value={displayName}
                    readOnly
                    />
                    <input
                    type="text"
                    name="userPhotoUrl"
                    value={userPhotoUrl}
                    readOnly
                    />
                    <input
                    type="file"
                    name="selectedFile"
                    onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                 </form> 
                 <DefaultUpload />
                 
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
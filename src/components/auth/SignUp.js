import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp,signIn} from '../../store/actions/authActions'
import Footer from '../navbar/Footer';
import firebase from 'firebase'
import Home from '../dashboard/Dashboard2';
import './signup.scss'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import instagram  from '../../assets/images/instagram.svg'
import youtube  from '../../assets/images/youtube.svg'


import { Desktop, Tablet, Mobile, Phone } from '../shared';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignUp:true
        }
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          
        ],
        callbacks: {
            signInSuccessWithAuthResult: (e) => {
                console.log(e)
                fetch(`https://designerspendroplet.getdpsvapi.com/adduser?uuid=${e.user.uid}&username=${e.user.displayName}&photourl=''&bio=''&email=${e.user.email}`)
            }
        },  
        signInSuccessUrl: '/Feed'
      }
   
    state = {
        email:'',
        password:'',
        displayName:'',
        bio:'',
        photourl:''
        

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    
    }
    handleSubmit = (e) => {
     e.preventDefault();
     const { photourl,bio,email,displayName} = this.state;
     let formData = new FormData();

     formData.append('email', email);
     formData.append('displayName', displayName);
     formData.append('bio', bio);
     formData.append('photourl', photourl);
     this.props.signUp(this.state)
    }
   
    handleSubmitSignin = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
       }

      
  render() {
    const {auth,authError} = this.props;
    console.log(this.state)
    if(auth.uid) return <Redirect to='/generate'/>
    return (
    
    <div>
    <Desktop>
    <div className = 'row ' style = {{marginBottom:'0'}}>
        
       <div className = 'col s6 m6 l6' style = {{backgroundColor:'#000000',height:'100%'}}>
           <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/vizcom.jpg?alt=media&token=8d5fe237-72b2-4f97-947c-4afc03db7756' style = {{paddingTop:'50%',paddingBottom:'56%',display:'block',marginLeft:'auto',marginRight:'auto'}}/>

       </div>
        <div className = ' col s6 m6 l6'  >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}
                 
               >
               <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom  </h2>
                    <h1>Unlimited inspiration </h1>
                </div>
                
               
                <div className = 'input-field'>
                    <input type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='text' id='displayName' placeholder = "Username" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='password' id='password' placeholder = "Password" onChange={this.handleChange}/>
                </div>
                
                <div className = 'input-field'>
                    <button className = 'btn #11b2cf lighten-1 z-depth-0'>Sign up</button>
                    <div className = 'red-text center'>
                        {authError ? <p> {authError}</p> : null }
                    </div>
                </div>
                <p style = {{textAlign:'center'}}>or</p>
                <p style = {{color:'#1589ff', textAlign:'center'}}  onClick={e => this.setState({isSignUp:true})}>or login to your account </p>
                
            </form>

            {/* SIGN IN FORM */}
            <form 
            style={{ 
                visibility: this.state.isSignUp ? 'visible': 'hidden',
                display: this.state.isSignUp ? 'inline-block': 'none',
                width:'100%',
                padding:'5%'
            }} 
                onSubmit={this.handleSubmitSignin}
               >
                <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom </h2>
                    <h1>Unlimited inspiration</h1>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-2 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                <p style = {{textAlign:'center'}}>or</p>
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p >Don't have an account?<span style = {{color:'#1589ff'}}  onClick={e => this.setState({isSignUp:false})}> Regiester Here</span></p>
            </form>
                
         
        </div>
     
    </div>
    <Footer/>
    
    </Desktop>


    <Tablet>
    <div className = 'row ' style = {{marginBottom:'0'}}>
        
       <div className = 'col s6 m6 l6' style = {{backgroundColor:'#000000',height:'100%'}}>
           <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/vizcom.jpg?alt=media&token=8d5fe237-72b2-4f97-947c-4afc03db7756' style = {{paddingTop:'50%',paddingBottom:'56%',display:'block',marginLeft:'auto',marginRight:'auto'}}/>

       </div>
        <div className = ' col s6 m6 l6'  >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}
                 
               >
               <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom  </h2>
                    <h1>Unlimited inspiration </h1>
                </div>
                
               
                <div className = 'input-field'>
                    <input type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='text' id='displayName' placeholder = "Username" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='password' id='password' placeholder = "Password" onChange={this.handleChange}/>
                </div>
                
                <div className = 'input-field'>
                    <button className = 'btn #11b2cf lighten-1 z-depth-0'>Sign up</button>
                    <div className = 'red-text center'>
                        {authError ? <p> {authError}</p> : null }
                    </div>
                </div>
                <p style = {{textAlign:'center'}}>or</p>
                <p style = {{color:'#1589ff', textAlign:'center'}}  onClick={e => this.setState({isSignUp:true})}>or login to your account </p>
                
            </form>

            {/* SIGN IN FORM */}
            <form 
            style={{ 
                visibility: this.state.isSignUp ? 'visible': 'hidden',
                display: this.state.isSignUp ? 'inline-block': 'none',
                width:'100%',
                padding:'5%'
            }} 
                onSubmit={this.handleSubmitSignin}
               >
                <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom </h2>
                    <h1>Unlimited inspiration</h1>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-2 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                <p style = {{textAlign:'center'}}>or</p>
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p >Don't have an account?<span style = {{color:'#1589ff'}}  onClick={e => this.setState({isSignUp:false})}> Regiester Here</span></p>
            </form>
                
         
        </div>
     
    </div>
    <Footer/>
    </Tablet>


    <Mobile>
    <div className = 'row ' style = {{marginBottom:'0'}}>
        
       <div className = 'col s6 m6 l6' style = {{backgroundColor:'#000000',height:'100%'}}>
           <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/vizcom.jpg?alt=media&token=8d5fe237-72b2-4f97-947c-4afc03db7756' style = {{paddingTop:'50%',paddingBottom:'56%',display:'block',marginLeft:'auto',marginRight:'auto'}}/>

       </div>
        <div className = ' col s6 m6 l6'  >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}
                 
               >
               <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom  </h2>
                    <h1>Unlimited inspiration </h1>
                </div>
                
               
                <div className = 'input-field'>
                    <input type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='text' id='displayName' placeholder = "Username" onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <input type ='password' id='password' placeholder = "Password" onChange={this.handleChange}/>
                </div>
                
                <div className = 'input-field'>
                    <button className = 'btn #11b2cf lighten-1 z-depth-0'>Sign up</button>
                    <div className = 'red-text center'>
                        {authError ? <p> {authError}</p> : null }
                    </div>
                </div>
                <p style = {{textAlign:'center'}}>or</p>
                <p style = {{color:'#1589ff', textAlign:'center'}}  onClick={e => this.setState({isSignUp:true})}>or login to your account </p>
                
            </form>

            {/* SIGN IN FORM */}
            <form 
            style={{ 
                visibility: this.state.isSignUp ? 'visible': 'hidden',
                display: this.state.isSignUp ? 'inline-block': 'none',
                width:'100%',
                padding:'5%'
            }} 
                onSubmit={this.handleSubmitSignin}
               >
                <div className = 'banner'>
                    <h2 style = {{fontSize:'18px'}}>Welcome to Vizcom </h2>
                    <h1>Unlimited inspiration</h1>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-2 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                <p style = {{textAlign:'center'}}>or</p>
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p >Don't have an account?<span style = {{color:'#1589ff'}}  onClick={e => this.setState({isSignUp:false})}> Regiester Here</span></p>
            </form>
                
         
        </div>
     
    </div>
    <Footer/>
    </Mobile>
    </div>


    )
  }
}

const mapStateToProps = (state) => {
    return{
        
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp:(newUser) => dispatch(signUp(newUser)),
        signIn: (creds) => dispatch (signIn(creds))
    }
    return {
        signIn: (creds) => dispatch (signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp,signIn} from '../../store/actions/authActions'

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
    if(auth.uid) return <Redirect to='/'/>
    return (
    
    <div>
        <Desktop>
    <div className = 'row backgroundimage'>
        
       
        <div className = ' col s12 m12 l12 box' >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}  
                className = 'signinform'>
                <div className = 'banner'>
                     <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>Find currated inspiration from around the web</p>
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
                display: this.state.isSignUp ? 'inline-block': 'none'}} 
                onSubmit={this.handleSubmitSignin} 
                className = 'signinform' >
                <div className = 'banner'>
                    <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>Find currated inspiration from around the web</p>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-1 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
              
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p style = {{textAlign:'center'}}>or</p>
                <p  style = {{color:'#1589ff',textAlign:'center'}}  onClick={e => this.setState({isSignUp:false})}>Create an account</p>

                
                    
                    
                </form>
                
         
        </div>
       <a href = 'http://archvizual.com/'> <h1 className = 'credit'>By /Roman Vlasov</h1></a>
        
    </div>
       
        {/* <div className = "row footer">
            <div className = "col s6 m6 l6">
                <h5>Designerspen</h5>
                
            
                <a href = 'https://www.instagram.com/designerspen/'>
                    <img src = {instagram}/>
                </a>
                <a href = 'https://www.youtube.com/channel/UCWohaJg37iEA-Rjmng6Lb0w'>
                    <img src = {youtube}/>
                </a>
         
            </div>
        </div> */}

        <Home/>
        </Desktop>


    <Tablet>
    <div className = 'row backgroundimage'>
        
       
        <div className = ' col s12 m12 l12 box' >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}  
                className = 'signinform'>
                <div className = 'banner'>
                     <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>Find currated inspiration from around the web</p>
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
                display: this.state.isSignUp ? 'inline-block': 'none'}} 
                onSubmit={this.handleSubmitSignin} 
                className = 'signinform' >
                <div className = 'banner'>
                    <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>Find currated inspiration from around the web</p>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-1 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
              
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p style = {{textAlign:'center'}}>or</p>
                <p  style = {{color:'#1589ff',textAlign:'center'}}  onClick={e => this.setState({isSignUp:false})}>Create an account</p>

                
                    
                    
                </form>
                
         
        </div>
       <a href = 'http://archvizual.com/'> <h1 className = 'credit'>By /Roman Vlasov</h1></a>
        
    </div>
       
        {/* <div className = "row footer">
            <div className = "col s6 m6 l6">
                <h5>Designerspen</h5>
                
            
                <a href = 'https://www.instagram.com/designerspen/'>
                    <img src = {instagram}/>
                </a>
                <a href = 'https://www.youtube.com/channel/UCWohaJg37iEA-Rjmng6Lb0w'>
                    <img src = {youtube}/>
                </a>
         
            </div>
        </div> */}

        <Home/>
    </Tablet>


    <Mobile>
    <div className = 'mobile row '>
        
       
        <div className = ' col s12 m12 l12 ' >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'hidden': 'visible',
                 display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmit}  
                >
                <div className = 'banner'>
                     <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>Find currated inspiration from around the web</p>
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
                display: this.state.isSignUp ? 'inline-block': 'none'}} 
                onSubmit={this.handleSubmitSignin} 
               >
                <div className = 'banner'>
                    <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2 style = {{fontSize:'16px'}}>Welcome to Designerspen</h2>
                    <p>Find currated creative inspiration from around the web</p>
                </div>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-1 z-depth-0'>Sign in</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
              
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                <p style = {{textAlign:'center'}}>or</p>
                <p  style = {{color:'#1589ff',textAlign:'center'}}  onClick={e => this.setState({isSignUp:false})}>Create an account</p>

                
                    
                    
                </form>
                
         
        </div>
       
        
    </div>
       
        {/* <div className = "row footer">
            <div className = "col s6 m6 l6">
                <h5>Designerspen</h5>
                
            
                <a href = 'https://www.instagram.com/designerspen/'>
                    <img src = {instagram}/>
                </a>
                <a href = 'https://www.youtube.com/channel/UCWohaJg37iEA-Rjmng6Lb0w'>
                    <img src = {youtube}/>
                </a>
         
            </div>
        </div> */}

        <Home/>
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

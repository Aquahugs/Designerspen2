import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp,signIn} from '../../store/actions/authActions'

import firebase from 'firebase'

import {NavLink} from 'react-router-dom';
import './signup.scss'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


import BACKGROUND  from '../../assets/images/BACKGROUND1.jpg'
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
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: (e) => {
                console.log(e)
                fetch(`http://localhost:3001/adduser?uuid=${e.user.uid}&username=${e.user.displayName}&photourl=''&bio=''&email=${e.user.email}`)
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
    if(auth.uid) return <Redirect to='/'/>
    return (
    
    <div>
    <div className = 'row backgroundimage'>
        
        <div className = 'col s6 m6 l6'>
            {/* <h1>[Your work here]</h1> 
            <p> By / You</p> 
            <p> Anything Creative</p>
            <div className = 'row submitbtn'>
            <button  style = {{fontWeight:'bold'}} className = 'btn-large lighten-1 z-depth-0'>Submit</button> 
            </div> */}
            {/* <p style = {{ color:'#262626'}}>Illustration By / Emmanuel Edeko</p>
            <a href = 'https://www.instagram.com/manny.oe/?hl=en'><p style = {{fontWeight:'bold', color:'#262626'}}>Instagram</p></a> */}
        </div>
        <div className = ' col s6 m6 l6 box' >
            <form
             style={{ 
                 visibility: this.state.isSignUp ? 'visible': 'hidden',
                 display: this.state.isSignUp ? 'inline-block': 'none'}} 
                onSubmit={this.handleSubmit}  
                className = 'signinform'>
                <div className = 'banner'>
                     <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>The starting point for creative inspiration</p>
                </div>
                
                <h5>Join</h5>
                <p style = {{color:'#1589ff'}}  onClick={e => this.setState({isSignUp:false})}>or login to your account </p>
            
                {/* <h5 ><NavLink to ='/signin'>Sign-In</NavLink>/ <NavLink to ='/signup'>Sign-Up</NavLink></h5> */}
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
                    <button className = 'btn #11b2cf lighten-1 z-depth-0'>Join</button>
                    <div className = 'red-text center'>
                        {authError ? <p> {authError}</p> : null }
                    </div>
                </div>
                <p style = {{textAlign:'center'}}>or</p>
                <StyledFirebaseAuth style ={{width:'100%'}}uiConfig = {this.uiConfig}
                firebaseAuth={firebase.auth()}/>
                
            </form>

            {/* SIGN IN FORM */}
            <form 
            style={{ 
                visibility: this.state.isSignUp ? 'hidden': 'visible',
                display: this.state.isSignUp ? 'none': 'inline-block'}} 
                onSubmit={this.handleSubmitSignin} 
                className = 'signinform' >
                <div className = 'banner'>
                    <img className = "logo" src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1"/>
                    <h2>Welcome to Designerspen</h2>
                    <p>The starting point for creative inspiration</p>
                </div>
                    <h5>Log in</h5>
                    <p  style = {{color:'#1589ff'}}  onClick={e => this.setState({isSignUp:true})}>or create an account</p>
                    <div className = 'input-field'>
                        <input  type ='email' id='email' placeholder = "Email" onChange={this.handleChange}/>
                    </div>
                    <div className = 'input-field'>
                        <input type ='password' id='password' onChange={this.handleChange}  placeholder = "Password" className = {'blue-text text-darken-2'}/>
                    </div>
                    <div className = 'input-field'>
                        <button className = 'btn  lighten-1 z-depth-0'>Login</button>
                        <div className = 'red-text center'>
                            {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                    
                </form>
                
            {/* <div className = 'col s12 m12 l12 socialIcons'>
            <svg style = {{float:'left'}}role="img" width="20px" height="20px"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            <svg style = {{float:'left'}} role="img"width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube icon</title><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </div> */}
        </div>
        
    </div>
        <div className = "row">
            <div className = 'col s4 m4 l4 motto'>
                <h5>Share and collect visually-pleasing, inspiring images from around the web.</h5>
            </div>
            <div className = 'col s8 m8 l8 image2'>
            </div>
        </div>
        <div className = "row footer">
            <div className = "col s6 m6 l6">
                <h5>Designerspen</h5>
                <p>contact us</p>
            </div>
            <div className = "col s6 m6 l6" style = {{paddingLeft:'40%'}}>
                <a href = 'https://www.instagram.com/designerspen/'>
                    <img src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/insta%20.png?alt=media&token=9b51a8b6-d7d8-47fc-8c20-14ac523e0846"/>
                </a>
                <a href = 'https://www.youtube.com/channel/UCWohaJg37iEA-Rjmng6Lb0w'>
                    <img src = "https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/youtube%20icon.png?alt=media&token=63c52e9b-2078-4036-ba95-fbc913107438"/>
                </a>
            </div>
        </div>
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

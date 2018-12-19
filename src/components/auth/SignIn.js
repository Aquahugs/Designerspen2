import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {NavLink} from 'react-router-dom';


class SignIn extends Component {

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
      }

    



    state = {
        email:'',
        password:''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    handleSubmit = (e) => {
     e.preventDefault();
     this.props.signIn(this.state)
    }
   
  render() {
      const {authError, auth} = this.props;
      if(auth.uid) return <Redirect to='/'/>
      
    return (
    <div className = 'divStyle col s12 m12 l12' >
      <div  className = ' container'>
        <div className = 'title'>
            <h1> DESIGNERSPEN</h1>
            <p>Everything Creation</p>
        </div>
        
        <form onSubmit={this.handleSubmit} className = 'signinform' >
            <h5 ><span>Sign-In</span>/ <NavLink to ='/signup'>Sign-Up</NavLink></h5>
            <div className = 'input-field'>
                <label htmlFor='email'> Email</label> 
                <input  type ='email' id='email' onChange={this.handleChange}/>
            </div>z
            <div className = 'input-field'>
                <label htmlFor='password'> Password</label>
                <input type ='password' id='password' onChange={this.handleChange} className = {'blue-text text-darken-2'}/>
            </div>
            <div className = 'input-field'>
                <button className = 'btn pink lighten-1 z-depth-0'>Login</button>
                <div className = 'red-text center'>
                    {authError ? <p>{authError}</p> : null }
                </div>
            </div>
        </form>
        <StyledFirebaseAuth uiConfig = {this.uiConfig}
        firebaseAuth={firebase.auth()}/>
      </div>
     
    </div>
    
    )
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch (signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

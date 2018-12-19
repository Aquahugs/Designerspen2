import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import {NavLink} from 'react-router-dom';

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
     e.preventDefault();
     this.props.signUp(this.state)
    }
   
  render() {
    const {auth,authError} = this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
      <div className = 'divStyle col s12 m12 l12'>
        <div className = 'container'>
            <div className = 'title'>
                <h1> DESIGNERSPEN</h1>
                <p>Everything Creation</p>
            </div>
            <form onSubmit={this.handleSubmit}  className = 'signinform'>
                <h5 ><NavLink to ='/signin'>Sign-In</NavLink>/ <NavLink to ='/signup'>Sign-Up</NavLink></h5>
                <div className = 'input-field'>
                    <label htmlFor='email'> Email</label> 
                    <input type ='email' id='email' onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <label htmlFor='password'> Password</label>
                    <input type ='password' id='password' onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <label htmlFor='firstName'> First Name</label>
                    <input type ='text' id='firstName' onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <label htmlFor='lastName'> Last Name</label>
                    <input type ='text' id='lastName' onChange={this.handleChange}/>
                </div>
                <div className = 'input-field'>
                    <button className = 'btn pink lighten-1 z-depth-0'>SignUp</button>
                    <div className = 'red-text center'>
                        {authError ? <p> {authError}</p> : null }
                    </div>
                </div>
            </form>
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
        signUp:(newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

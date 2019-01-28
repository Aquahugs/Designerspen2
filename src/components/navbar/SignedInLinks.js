import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect}from 'react-redux';
import {signOut} from '../../store/actions/authActions';


const SignedInLinks = (props) => {

    const styles1 = {
        color:'#212121'
      
    } 
    return (
        <ul className = 'right'>
            <li > <NavLink to ='/' style = {styles1}>Feed</NavLink></li>
            <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
            <li> <NavLink to ='/' className='btn btn-floating pink lighten-1'>
                {props.profile.inititals}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)
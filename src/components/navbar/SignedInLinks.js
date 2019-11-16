import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect}from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import { auth } from 'firebase';


const SignedInLinks = (props) => {
 
    console.log(props.auth.photoURL)

    const styles1 = {
        color:'#212121' 
    } 

    const styles2 = {
        color:'#212121',
        fontWeight:'bold' 
    } 
    return (
        <ul className = 'right'>
            <li > <NavLink to ='/News' style = {styles1}>News</NavLink></li>
            <li> <a href = 'https://designerspen.tumblr.com/' style = {{color:'#1C1C1C'}}>Inspiration</a></li>
            <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
            <li><NavLink to = '/users/:uid'><a style = {styles2}>{props.auth.displayName}</a></NavLink></li>
            <li> 
                <NavLink to ='/users/:uid' className='btn btn-floating pink lighten-1'>
                {props.profile.inititals}
                <img src = {props.auth.photoURL}/>
                </NavLink>
            </li>
           
           
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),  
   
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks)
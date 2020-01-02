import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect}from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import { auth } from 'firebase';


const SignedInLinks = (props) => {
 
    console.log(props)

    const styles1 = {
        color:'#212121' 
    } 

    const styles2 = {
        color:'#212121',
        fontWeight:'bold' 
    } 
    return (
        <ul className = 'right'>
            <li > <NavLink to ='/Feed' style = {styles1}>Feed</NavLink></li>
            <li> <NavLink to ='/Discover' style = {styles1}>Discover</NavLink></li>
            <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
            <li> 
                <a href={"http://localhost:3000/profile/" + props.auth.uid} className='btn btn-floating pink lighten-1'>
                <img src = {props.auth.photoURL} style = {{maxWidth:'40px'}}/>
                </a>
            </li>
            <li><a href={"http://localhost:3000/profile/" + props.auth.uid} style = {styles2}>{props.auth.displayName} {props.profile.displayName}</a></li>

           
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),  
   
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks)
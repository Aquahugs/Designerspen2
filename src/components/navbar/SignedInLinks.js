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

    const profileimg = {
        maxWidth: '75px',
        borderRadius: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'50%'
    }

    const containerPro = {
        marginTop:'17px',
        width:'100%'
    }
    return (
        <ul className = 'right'>
            <li> <NavLink to ='/News' style = {styles1}>News</NavLink></li>
            <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
            <li> 
                <a href={"https://www.designerspen.com/profile/" + props.auth.uid} style = {containerPro}>
                <img src = {props.auth.photoURL} style = {profileimg}/>
                </a>
            </li>
            <li><a href={"https://www.designerspen.com/profile/" + props.auth.uid} style = {styles2}>{props.auth.displayName} {props.profile.displayName}</a></li>

           
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),  
   
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks)
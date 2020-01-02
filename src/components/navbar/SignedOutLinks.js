import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


const SignedOutLinks = () => {
    const styles1 = {
        color:'#212121' 
    } 

    const styles2 = {
        color:'#212121',
        fontWeight:'bold' 
    } 
    return (
        <ul className = 'right'>
        
           
      
            {/* <li > <NavLink to ='/Wall' style = {styles1}>Wall</NavLink></li> */}
            <li > <NavLink to ='/News' style = {styles1}>News</NavLink></li>
            <li> <NavLink style = {{color:'white'}} to ='/signup'>Signup</NavLink></li>
            <li> <NavLink  style = {{color:'white'}} to ='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
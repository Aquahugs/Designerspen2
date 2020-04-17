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
            <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Feed'>Feed</NavLink></li>
            <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Discover</NavLink></li>
            <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
            <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Signup/Login</NavLink></li>
            
        </ul>
    )
}

export default SignedOutLinks
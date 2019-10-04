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
            <li > <NavLink to ='/' style = {styles1}>News</NavLink></li>
            <li> <a href = 'https://designerspen.tumblr.com/' style = {{color:'#1C1C1C'}}>Inspiration</a></li>
            <li> <NavLink style = {{color:'#1C1C1C'}} to ='/signup'>Signup</NavLink></li>
            <li> <NavLink  style = {{color:'#1C1C1C'}} to ='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
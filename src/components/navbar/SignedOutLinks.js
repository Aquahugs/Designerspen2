import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


const SignedOutLinks = () => {

    return (
        <ul className = 'right'>
            <li> <a href = 'https://designerspen.tumblr.com/' style = {{color:'#1C1C1C'}}>Inspiration</a></li>
            <li> <NavLink style = {{color:'#1C1C1C'}} to ='/signup'>Signup</NavLink></li>
            <li> <NavLink  style = {{color:'#1C1C1C'}} to ='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
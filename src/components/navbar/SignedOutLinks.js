import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Desktop, Tablet, Mobile, Phone } from '../shared';


const SignedOutLinks = () => {
    const styles1 = {
        color:'#212121' 
    } 

    const styles2 = {
        color:'#212121',
        fontWeight:'bold' 
    } 
    return (
        <div>
            <Desktop>
                <Link to ='/' className = "Logo ">
                    <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Black%20logofont.png?alt=media&token=16f2a7b6-eef4-418a-b8b9-9a6cbf1e7f94'/>
                </Link>
            
                <ul className = 'right'>
                    
                
            
                    {/* <li > <NavLink to ='/Wall' style = {styles1}>Wall</NavLink></li> */}
                
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Archives</NavLink></li>
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Vizcom</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/about'>About</NavLink></li>
                    
                </ul>  
            </Desktop>
            <Tablet>
                <Link to ='/' className = "Logo ">
                    <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Black%20logofont.png?alt=media&token=16f2a7b6-eef4-418a-b8b9-9a6cbf1e7f94'/>
                </Link>
            
                <ul className = 'right'>
                    
                
            
                    {/* <li > <NavLink to ='/Wall' style = {styles1}>Wall</NavLink></li> */}
                
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Archives</NavLink></li>
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Vizcom</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/about'>About</NavLink></li>
                    
                </ul>  
            </Tablet>
            <Mobile>
                <Link to ='/' className = "Logo ">
                <img  style = {{width:'30px'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/black%20Logo.png?alt=media&token=1b563f84-02f5-4cd2-b10f-3cbca8563d13'/>
                </Link>
            
                <ul className = 'right'>
                    
                
            
                    {/* <li > <NavLink to ='/Wall' style = {styles1}>Wall</NavLink></li> */}
                
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Archives</NavLink></li>
                    <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Vizcom</NavLink></li>
                    <li> <NavLink style = {{color:'#0E0E0C'}} to ='/about'>About</NavLink></li>
                    
                </ul>  
            </Mobile>
           
        </div>
    )
}

export default SignedOutLinks
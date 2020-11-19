import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect}from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import { auth } from 'firebase';
import {Link} from 'react-router-dom';

import { Desktop, Tablet, Mobile, Phone } from '../shared';

const SignedInLinks = (props) => {
  
    console.log(props)

    const styles1 = {
        color:'#212121' 
    } 
    const mobile = {
        color:'#212121',
        fontSize:'9px' 
    } 

    const styles2 = {
        color:'#212121',
        fontWeight:'bold' 
    } 
    const styles2mobile = {
        color:'#212121',
        fontWeight:'bold',
        fontSize:'9px' 
    } 

    const profileimg = {
        maxWidth: '75px',
        borderRadius: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'50%'
    }
    const profileimgMobile = {
        maxWidth: '25px',
        borderRadius: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'25px'
    }

    const containerPro = {
        marginTop:'17px',
        width:'100%'
    }
    const containerProMobile = {
        marginTop:'17px',
        width:'25px'
    }
    return (
        <div>
           
            <Desktop>
            <Link to ='/' className = "Logo ">
                <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Black%20logofont.png?alt=media&token=16f2a7b6-eef4-418a-b8b9-9a6cbf1e7f94'/>
            </Link>
             <ul className = 'right'>
                
                <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Archives</NavLink></li>
                <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
                <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Vizcom</NavLink></li>
                <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
                <li> 
                    <a href={"https://designerspen.com/profile/" + props.auth.uid} style = {containerPro}>
                    <img src = {props.auth.photoURL} style = {profileimg}/>
                    </a>
                </li>
                <li><a href={"https://designerspen.com/profile/" + props.auth.uid} style = {styles2}>{props.auth.displayName} {props.profile.displayName}</a></li>
            </ul>
            </Desktop>
        
            
            <Tablet>
            <Link to ='/' className = "Logo ">
            </Link>
            
             <ul className = 'right'>
                <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/Discover'>Archives</NavLink></li>
                <li> <NavLink  style = {{color:'#0E0E0C'}} to ='/News'>News</NavLink></li>
                <li> <NavLink style = {{color:'#0E0E0C'}} to ='/signup'>Vizcom</NavLink></li>
                <li > <a style = {styles1} onClick ={props.signOut}>Log Out</a></li>
                <li> 
                    <a href={"https://designerspen.com/profile/" + props.auth.uid} style = {containerPro}>
                    <img src = {props.auth.photoURL} style = {profileimgMobile}/>
                    </a>
                </li>
                <li><a href={"https://designerspen.com/profile/" + props.auth.uid} style = {styles2}>{props.auth.displayName} {props.profile.displayName}</a></li>
            </ul>
            </Tablet>
            
            <Mobile>
            <ul className = 'right'>
                <li> <NavLink  style = {mobile} to ='/Discover'>Archives</NavLink></li>
                <li> <NavLink   style = {mobile} to ='/News'>News</NavLink></li>
                <li> <NavLink  style = {mobile} to ='/signup'>Vizcom</NavLink></li>
                <li > <a style = {mobile} onClick ={props.signOut}>Log Out</a></li>
                <li> 
                    <a href={"https://designerspen.com/profile/" + props.auth.uid} style = {containerProMobile}>
                    <img src = {props.auth.photoURL} style = {profileimg}/>
                    </a>
                </li>
                <li><a href={"https://designerspen.com/profile/" + props.auth.uid} style = {styles2mobile}>{props.auth.displayName} {props.profile.displayName}</a></li>
            </ul>
           
            </Mobile>
        </div>       
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),  
   
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks)
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks, {signedInLinks} from './SignedInLinks';
import SignedOutLinks, {signedOutLinks} from './SignedOutLinks';
import {connect} from 'react-redux'
import  '../../assets/stylesheets/NavBar.css'



import { Desktop, Tablet, Mobile, Phone } from '../shared';
const Navbar = (props) => { // 2.) brings in all the inspect properties 
    console.log(props)
    const {auth, profile} = props; // 3.) access the auth and profile  properties 
    const links = auth.uid ? <SignedInLinks auth={auth} profile={profile} /> : <SignedOutLinks/> // 4.) is there an auth uid? 
    return (
    <div>
        <Desktop>
        <nav className = "navbar">
            <div className = "container">
                <Link to ='/' className = "Logo ">
                <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logofont.png?alt=media&token=785d9a81-aa1c-4365-a6f1-a1e8259b4e61'/>
                </Link>
                {links} 
            </div>
        </nav>
        </Desktop>
    
        <Tablet>
            <nav className = "navbar">
                <div className = "container">
                    <Link to ='/' className = "Logo ">
                    <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logofont.png?alt=media&token=785d9a81-aa1c-4365-a6f1-a1e8259b4e61'/>
                    </Link>
                    {links} 
                
                </div>
            </nav>
        </Tablet>

        <Mobile>
            <nav className = "navbar">
                {links}
                <Link to ='/' className = "Logo ">
                    <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logo.png?alt=media&token=e4875c11-d904-48bc-8271-cd3b5cfa8be1'/>
                </Link>
            </nav>
        </Mobile>
    </div>
    )
}


     
const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)
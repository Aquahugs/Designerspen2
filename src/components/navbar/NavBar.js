import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks, {signedInLinks} from './SignedInLinks';
import SignedOutLinks, {signedOutLinks} from './SignedOutLinks';
import {connect} from 'react-redux'
import  '../../assets/stylesheets/NavBar.css'


const Navbar = (props) => { // 2.) brings in all the inspect properties 
    
    const {auth, profile} = props; // 3.) access the auth and profile  properties 
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks/> // 4.) is there an auth uid? 
    return (
        <nav className = "navbar">
            <div className = "container">
                <Link to ='/' className = "Logo ">
                <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/logofont.png?alt=media&token=785d9a81-aa1c-4365-a6f1-a1e8259b4e61'/>
                </Link>
                {links} 
            </div>
        </nav>
    )
}


     
const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)
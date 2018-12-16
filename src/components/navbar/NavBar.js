import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks, {signedInLinks} from './SignedInLinks';
import SignedOutLinks, {signedOutLinks} from './SignedOutLinks';
import {connect} from 'react-redux'


const Navbar = (props) => { // 2.) brings in all the inspect properties 
    
    const {auth, profile} = props; // 3.) access the auth properties 
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks/> // 4.) is there an auth uid? 
    return (
        <nav className = "navbar">
            <div className = "container">
                <Link to ='/' className = "brand-logo blue-text">DesignersPen</Link>
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
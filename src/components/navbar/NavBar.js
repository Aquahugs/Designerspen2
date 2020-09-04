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

    const styles1 = {
        backgroundColor: auth.uid ? "white" : "white",
      
    } 
    return (
    <div>
    
        <nav className = 'navbar' style={styles1}>
            <div className = "container">
                
                {links} 
            </div>
        </nav>
     
    
    
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
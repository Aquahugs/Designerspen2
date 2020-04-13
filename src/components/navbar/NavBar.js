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
        backgroundColor: auth.uid ? "white" : "transparent",
        borderBottom: auth.uid ? "1px solid #c8c8c8" : "none"
    } 
    return (
    <div>
        <Desktop>
        <nav className = 'navbar' style={styles1}>
            <div className = "container">
                <Link to ='/' className = "Logo ">
                <img  style = {{paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Black%20logofont.png?alt=media&token=16f2a7b6-eef4-418a-b8b9-9a6cbf1e7f94'/>
                </Link>
                {links} 
            </div>
        </nav>
        </Desktop>
    
        <Tablet>
        <nav className = 'navbar' style={styles1}>
            <div className = "container">
                <Link to ='/' className = "Logo ">
                <img  style = {{display:auth.uid ? "none" : "inline-block", paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/white%20logofont.png?alt=media&token=1b17c09e-f2f2-4ee6-a232-1d3e68eba33b'/>
                <img  style = {{display:auth.uid ? "inline-block" : "none", paddingTop:'0.5%'}}src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Black%20logofont.png?alt=media&token=16f2a7b6-eef4-418a-b8b9-9a6cbf1e7f94'/>
                </Link>
                {links} 
            </div>
        </nav>
        </Tablet>

        <Mobile>
            <nav className = 'navbar' style={styles1}>
                <div className = "container">
                    
                    {links} 
                </div>
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
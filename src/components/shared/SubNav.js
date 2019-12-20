import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'




import { Desktop, Tablet, Mobile, Phone } from '../shared';
const SubNav = (props) => { // 2.) brings in all the inspect properties 
    console.log(props)
    const {auth, profile} = props; // 3.) access the auth and profile  properties 
    const links = auth.uid // 4.) is there an auth uid? 
    const styles1 = {
        color:'#212121' 
    } 

    const styles2 = {
        backgroundColor:'transparent',
        boxShadow:'none'
    }

    return (
    <div>
        <nav className = "navbarsub" style = {styles2}>
                <ul className = 'left'>
                    <li > <Link to ='/Feed' style = {styles1}>Feed</Link></li>
                    <li> <Link to ='/Discover' style = {styles1}>Discover</Link></li>
                </ul>
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
export default connect(mapStateToProps)(SubNav)
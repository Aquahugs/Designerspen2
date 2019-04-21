import React, {Component} from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

import '../../assets/stylesheets/ProjectList.css'

const ProjectList = ({projects}) => {

    return(
        <div className = 'post'>
            <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/kojimaproductions"><img src={require('../../assets/images/Cardimage/manny.jpg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>Kojima Productions company icon and mascot</h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/8/2019</p>
                </div>
            </div>

            <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/ArExp">  <img src={require('../../assets/images/Cardimage/Ar.jpeg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>Will AR hit an Inflection Point in 2019?</h1></span>
                    <p> </p>
                    <p className = "grey-text"> 2/8/2019</p>
                </div>
            </div>

            <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image '>
                    <Link to="/sahmtesla"> <img src={require('../../assets/images/Cardimage/Zero.jpg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>What if Tesla made <br/> Model 0? </h1></span>
                    <p> </p>
                    <p className = "grey-text"> 2/8/2019</p>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectList
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
                    <img src={require('../../assets/images/Cardimage/manny.jpg')}/>
                    </div>
                    <span className = "card-title"><h1>Here is why you need to know this thing</h1></span>
                    <p>  </p>
                    <p className = "grey-text"> Date  </p>
                </div>
            </div>

            <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                        <img src={require('../../assets/images/Cardimage/Ar.jpeg')}/>
                    </div>
                    <span className = "card-title"><h1>I tried Augmented Realility in the moutains it was awesome</h1></span>
                    <p> </p>
                    <p className = "grey-text"> Date  </p>
                </div>
            </div>

            <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image '>
                    <Link to="/sahmtesla"> <img src={require('../../assets/images/Cardimage/Zero.jpg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>What if Tesla made a Model Zero? </h1></span>
                    <p> </p>
                    <p className = "grey-text"> Date  </p>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectList
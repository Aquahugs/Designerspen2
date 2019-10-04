import React, {Component} from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'

import '../../assets/stylesheets/ProjectList.css'

const ProjectList = ({projects}) => {
    return(
        <div className = 'project-list section'>
            {projects && projects.map(project => {
                return(
                    <Link to = {'/project/' + project.id}>
                        <ProjectCard project={project} key={project.id}/>
                    </Link>
                )
            })}
            {/* <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/HoloLens2"><img src={'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/HoloLens.jpg?alt=media&token=d97e56bf-9447-4f52-8f37-d5b7a541a29c'}/></Link>
                    </div>
                    <span className = "card-title"><h1>{projects.title}</h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/24/2019</p>
                </div>
            </div>
            <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/HoloLens2"><img src={'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/HoloLens.jpg?alt=media&token=d97e56bf-9447-4f52-8f37-d5b7a541a29c'}/></Link>
                    </div>
                    <span className = "card-title"><h1>Microsoft Unveils Hololens 2 for $3500</h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/24/2019</p>
                </div>
            </div>
            <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/Airpods2"><img src={'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods.jpg?alt=media&token=b85c8184-6d89-41bf-9ca6-d07935ead012'}/></Link>
                    </div>
                    <span className = "card-title"><h1>Second Generation Airpods</h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/8/2019</p>
                </div>
            </div>
         
            <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/kojimaproductions"><img src={require('../../assets/images/Cardimage/manny.jpg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>Kojima Productions company icon and mascot</h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/8/2019</p>
                </div>
            </div>

            <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to="/ArExp">  <img src={require('../../assets/images/Cardimage/Ar.jpeg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>Will AR hit an Inflection Point in 2019?</h1></span>
                    <p> </p>
                    <p className = "grey-text"> 2/8/2019</p>
                </div>
            </div>

            <div className = ' col s12 m4 l4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image '>
                    <Link to="/sahmtesla"> <img src={require('../../assets/images/Cardimage/Zero.jpg')}/></Link>
                    </div>
                    <span className = "card-title"><h1>What if Tesla made <br/> Model 0? </h1></span>
                    <p> </p>
                    <p className = "grey-text"> 2/8/2019</p>
                </div>
            </div> */} 
        </div>
    )
    
}

export default ProjectList
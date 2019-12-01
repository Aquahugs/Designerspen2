import React, {Component} from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import '../../assets/stylesheets/ProjectList.css'


const Articles = () => {
    return(
        <div className = 'post'>
         <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to = '/WorkFlows'><a><img src= {require('../../assets/images/Cardimage/WorkFlow.jpg')}/></a></Link>
                    </div>
                    <span className = "card-title"><h1>5 Creative workflow tools worth exploring in 2019 </h1></span>
                    <p>  </p>
                    <p className = "grey-text"> 3/8/2019</p>
                </div>
        </div>

        <div className = ' col s12 m4 card z-depth-0 project-summary'>
                <div className = 'card-content grey-text text-darken-3'>
                    <div className = 'card-image'>
                    <Link to = '/HoloLens2'><a><img src='https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/HoloLens.jpg?alt=media&token=d97e56bf-9447-4f52-8f37-d5b7a541a29c'/></a></Link>
                    </div>
                    <span className = "card-title"><h1>Microsoft Unveils Hololens 2 for $3500 </h1></span>
                    <p>  </p>
                    <p className = "grey-text">2/24/2019</p>
                </div>
        </div>


        <div className = ' col s12 m4 card z-depth-0 project-summary'>
            <div className = 'card-content grey-text text-darken-3'>
                <div className = 'card-image '>
                <Link to="/airpod2"> <img src="https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Ar.jpg?alt=media&token=7f67596c-caa2-4367-9078-4493739e58d0"/></Link>
                </div>
                <span className = "card-title"><h1>Second Generation Airpods  </h1></span>
                <p> </p>
                <p className = "grey-text"> 2/8/2019</p>
            </div>
        </div>




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

export default Articles
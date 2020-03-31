import React, {Component} from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import '../../assets/stylesheets/Articles.scss'

import sahm  from '../../assets/images/Articles/2019/Cover1.jpg'
import Kojima  from '../../assets/images/Articles/2019/Cover2.jpg'
import airpod  from '../../assets/images/Articles/2019/Cover3.jpg'
import donut  from '../../assets/images/Articles/2019/Cover4.jpg'
import house  from '../../assets/images/Articles/2019/Cover5.jpg'
import { Desktop, Tablet, Mobile, Phone } from '../shared';




const Articles = () => {
    return(

    <div>
        <Desktop>
            <div className = 'row' style = {{margin:'0'}}>
            <div style = {{padding:'0'}}className = 'col s8 m8 l8 module'>
                <div className = 'row squares' >

                    <div style = {{padding:'0'}} className='col s12 m12 l12 squares'>
                            <div className = 'row squares'>
                                <Link to="/sahmtesla"><img style = {{width:'100%',height:'auto'}} src = {sahm}/>
                                    <div class = 'right '>
                                        <p>What if Tesla made a Model 0? <br/><span className = 'posttag'>Automotive Design</span></p>
                                    </div>
                                </Link>
                            </div>
                            
                            
                            <div style = {{padding:'0'}} className='col s6 m6 l6 squares'>
                                <Link to="/airpod2"><img style = {{width:'100%',height:'auto',padding:'3px'}} src = {airpod}/></Link>
                                <div class = 'right'>
                                    <p>Second Generation Airpods <br/><span className = 'posttag'>Industrial Design</span></p>
                                </div>
                            </div>
                            <div style = {{padding:'0',zIndex: '99999'}} className='col s6 m6 l6 squares'>
                                <Link to = '/WorkFlows'><a> <img style = {{width:'100%',height:'auto',padding:'3px'}} src = {donut}/></a></Link>
                                <div class = 'right'>
                                    <p>Creative workflow tools worth exploring in 2019<br/> <span className = 'posttag'>Design</span> </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                <div style = {{padding:'0'}} className = 'col s4 m4 l4  module'>
                    <div className = 'row squares'>
                        <Link to="/kojimaproductions"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {Kojima}/></Link>
                        <div class = 'right'>
                            <p>Kojima Productions company icon and mascot<br/><span className = 'posttag'>Gaming</span> </p>
                        </div>
                    </div>
                            
                    
                    <div className = 'row squares'>
                    <Link to="/Kyrkesund"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {house}/></Link>
                    <div class = 'right'>
                        <p>Kyrkesund Weekend House by Mattias Gunneflo<br/><span className = 'posttag'>Architecture</span> </p>
                    </div>
                    </div>
                </div>
                
            
        
            </div>
        </Desktop>

        <Tablet>
            <div className = 'row' style = {{margin:'0'}}>
            <div style = {{padding:'0'}}className = 'col s8 m8 l8 module'>
                <div className = 'row squares' >

                    <div style = {{padding:'0'}} className='col s12 m12 l12 squares'>
                            <div className = 'row squares'>
                                <Link to="/sahmtesla"><img style = {{width:'100%',height:'auto'}} src = {sahm}/>
                                    <div class = 'right '>
                                        <p>What if Tesla made a Model 0? <br/><span className = 'posttag'>Automotive Design</span></p>
                                    </div>
                                </Link>
                            </div>
                            
                            
                            <div style = {{padding:'0'}} className='col s6 m6 l6 squares'>
                                <Link to="/airpod2"><img style = {{width:'100%',height:'auto',padding:'3px'}} src = {airpod}/></Link>
                                <div class = 'right'>
                                    <p>Second Generation Airpods <br/><span className = 'posttag'>Industrial Design</span></p>
                                </div>
                            </div>
                            <div style = {{padding:'0',zIndex: '99999'}} className='col s6 m6 l6 squares'>
                                <Link to = '/WorkFlows'><a> <img style = {{width:'100%',height:'auto',padding:'3px'}} src = {donut}/></a></Link>
                                <div class = 'right'>
                                    <p>Creative workflow tools worth exploring in 2019<br/> <span className = 'posttag'>Design</span> </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                <div style = {{padding:'0'}} className = 'col s4 m4 l4  module'>
                    <div className = 'row squares'>
                        <Link to="/kojimaproductions"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {Kojima}/></Link>
                        <div class = 'right'>
                            <p>Kojima Productions company icon and mascot<br/><span className = 'posttag'>Gaming</span> </p>
                        </div>
                    </div>
                            
                    
                    <div className = 'row squares'>
                    <Link to="/Kyrkesund"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {house}/></Link>
                    <div class = 'right'>
                        <p>Kyrkesund Weekend House by Mattias Gunneflo<br/><span className = 'posttag'>Architecture</span> </p>
                    </div>
                    </div>
                </div>
                
            
        
            </div>
        </Tablet>

        <Mobile>
            <div className = 'row' style = {{margin:'0'}}>
           
                <div className = 'row squares module' >

                    <div style = {{padding:'0'}} className='col s12 m12 l12 squares'>
                            <div className = 'row squares'>
                            <Link to="/Kyrkesund"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {house}/></Link>
                            <div class = 'right'>
                                <p>Kyrkesund Weekend House by Mattias Gunneflo<br/><span className = 'posttag'>Architecture</span> </p>
                            </div>
                                
                            </div>
                            
                            
                            <div style = {{padding:'0'}} className='col s6 m6 l6 squares'>
                                <Link to="/airpod2"><img style = {{width:'100%',height:'auto',padding:'3px'}} src = {airpod}/></Link>
                                <div class = 'right'>
                                    <p>Second Generation Airpods <br/><span className = 'posttag'>Industrial Design</span></p>
                                </div>
                            </div>
                            <div style = {{padding:'0',zIndex: '99999'}} className='col s6 m6 l6 squares'>
                                <Link to = '/WorkFlows'><a> <img style = {{width:'100%',height:'auto',padding:'3px'}} src = {donut}/></a></Link>
                                <div class = 'right'>
                                    <p>Creative workflow tools worth exploring in 2019<br/> <span className = 'posttag'>Design</span> </p>
                                </div>
                            </div>
                    </div>
             
            </div>
             
                    <div className = 'row squares module'>
                        <Link to="/kojimaproductions"><img style = {{width:'100%',height:'auto',padding:'4px'}} src = {Kojima}/></Link>
                        <div class = 'right'>
                            <p>Kojima Productions company icon and mascot<br/><span className = 'posttag'>Gaming</span> </p>
                        </div>
                    </div>
                            
                    <div className = 'row squares module'>
                    <Link to="/sahmtesla"><img style = {{width:'100%',height:'auto'}} src = {sahm}/>
                        <div class = 'right '>
                            <p>What if Tesla made a Model 0? <br/><span className = 'posttag'>Automotive Design</span></p>
                        </div>
                    </Link>
                    </div>
            </div>
        </Mobile>
    </div>
    
    )
    
}

export default Articles
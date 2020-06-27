import React, {Component} from 'react';
import { Desktop, Tablet, Mobile, Phone } from '../shared';
import { Tab } from 'react-bootstrap';
import video from './assets/tuff.mp4'
import create from './assets/create.png'
import {Link} from 'react-router-dom';




// import Footer from '../navbar/Footer';






class Vizcom extends Component {
    render(){
        
       
    
        return(
            <div   >
            <Desktop>
                <div className = 'row'>
                    <h1>test</h1>
                    <img src = 'https://via.placeholder.com/550'/>
                    <video ref="video"  loop autoPlay>
                    <source src="./cover.mp4" type="video/mp4" />
                </video>
                    
                </div>
            </Desktop>
            <Tablet>
                <h1>Tablet</h1>
            </Tablet>
            <Mobile>
                <div style = {{padding:'5%'}} >
                 <video autoPlay loop muted
                    style = {{
                        position:"absolute",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        height:"auto",
                        ObjectFit:"cover",
                        transform: "translate(-50%,-50%)",
                        zIndex:"-1",
                        paddingBottom:"100%"
                        }}>
                     <source src={video} type="video/mp4"/>
                 </video>
                
                <div className = "row" style = {{marginTop:"130%"}}>
                   
                        
                </div>
                <img src = {create}/>
                <Link to ='/Generate' className = "Logo "><button className = 'btn  lighten-1 z-depth-0'>Try it now</button></Link>
                <img style = {{padding:"5%"}}src = 'https://via.placeholder.com/200x35'/>
                <p>Made by <span><a href = "https://www.instagram.com/designerspen/">(@Designerspen)</a></span></p>
                <div className = "row">
                    <h1 style = {{fontSize:'28px',textAlign:'center'}}>#VIZCOMCHALLENGE</h1>
                    <img src = "https://via.placeholder.com/400"/>
                    <p>Share your creations on instagram with #VIZCOMCHALLENGE with the chance to be featured on <a href = "https://www.instagram.com/designerspen/">(@Designerspen)</a></p>
                </div>
                </div>
                <div style = {{backgroundColor:"red",margin:"0"}} className = "row">
                    <img src = "https://via.placeholder.com/40"/>
                    <p>Designerspenmail@gmail.com</p>
                </div>
            </Mobile>
            </div>
            
        )
    }
}


export default Vizcom
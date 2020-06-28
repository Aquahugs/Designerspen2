import React, {Component} from 'react';
import axios from 'axios';
import StackGrid from "react-stack-grid";
import seed from './assets/seed0655.png'
import {connect} from 'react-redux'

import Flexbox from 'flexbox-react';
import video from './assets/tuff.mp4'
import video2 from './assets/desktopvideo.mp4'
import seed1 from './assets/seed1.jpg'
import seed2 from './assets/seed2.png'
import seed3 from './assets/seed3.png'
import seed4 from './assets/seed4.jpg'
import seed5 from './assets/seed5.jpg'
import seed6 from './assets/seed6.png'
import seed7 from './assets/seed7.png'
import seed8 from './assets/seed8.jpg'
import seed9 from './assets/seed9.png'
import seed10 from './assets/seed10.png'
import seed11 from './assets/seed11.jpg'
import seed12 from './assets/seed12.png'
import history from './assets/history.png'
import insta from '../../assets/images/instagram.svg'
import discord from '../../assets/images/discord.svg'

import { Desktop, Tablet, Mobile, Phone } from '../shared';
import  { transitions } from "react-stack-grid";
import '../../assets/stylesheets/Generate.css'
import Logo from '../../assets/images/Asset 1.svg'






class VizcomLearnmore extends Component {

    
    
    constructor(props){
        
        super(props);
        this.state= {
            items :[],
            users:[],
            description: '',
            postTag: '',
            collection:[],
            uuid: props.match.params.uuid,
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            tags:[],
            bio:[],
            id:[],
            isLoaded: false,
            submitted:true
           

            // product: {
            //     username:'',
            //     email:'',
            //     password:''
            // },
            
        }
    
    }

    onChange = (e) => {
        // event to update state when form inputs change
        switch (e.target.name) {
            case 'selectedFile':
              this.setState({ selectedFile: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
    }

  
    componentDidMount() {
        
        this.setState({ isLoaded: true }); 
    }
    

   
    

    openModal() {
    this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

       

    
    
     
      

     toggleImage = () => {
        this.setState(state => ({ selectedImage: !state.open }))
      }
      handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    
    }
    handleSubmit = (e) => {
        // event to submit the email data to the api server dawg
         e.preventDefault();
        console.log(e)
        const { email} = this.state;

        let formData = new FormData();;
        formData.append('email', email);
            
        fetch(`https://designerspendroplet.getdpsvapi.com/submitemail?email=${email}`)
            .then((result) => {
            // access results...
            console.log(result)
            })
            .then(() => {
        })
    }
     


    render(){
        var { isLoaded,items} = this.state;
        

        
       
          console.log(this.state)
          console.log(this.state.userphotos.data)
          console.log(this.state.collection.data)


          
        if (!isLoaded)    {return <div style = {{paddingTop:'50%'}}><h1 >Loading...</h1></div>}
        
        else{
          
        return(   
            
        <div >
            <Desktop>
            <div style = {{paddingLeft:'15%',paddingRight:'15%'}}>
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
                        <source src={video2} type="video/mp4"/>
                    </video>
                    <p style = {{paddingTop:'50%',fontSize:'2rem'}}>Project Vizcom <br/>
                    <span style = {{fontSize:'1.2rem'}}>By / <a href= "https://www.instagram.com/designerspen/">@Designerspen</a></span></p>
                    <p style = {{fontSize:'1.8rem'}}>Vizcom is an Ai driven design tool that is being trained on the collected consciousness of the car design world to help accelerate and inspire designer's creative process.</p>
                    <div className = 'input-field'>
                        
                    <p style = {{fontSize:'1.8rem',visibility: this.state.submitted != true? 'hidden': 'visible'}}>Get updates
                        <span style = {{fontSize:'1.8rem',visibility: this.state.submitted != true? 'visible': 'hidden', 'display':'block'}}>Stay tuned 👌😊👌</span>
                    </p>
                        <form onSubmit={this.handleSubmit} style ={{visibility: this.state.submitted != true? 'hidden': 'visible'}}>
                            <input style = {{height:'70px',fontSize:'2rem'}} type ='email' id='email' placeholder="Youremail@email.com" onChange={this.handleChange}/>
                            <button className = ' updatesbtn2 lighten-1 z-depth-0' onClick={e => this.setState({submitted: false})}>Sign up </button>
                
                        </form>
                    </div>
                    <p style = {{fontSize:'1.8rem'}}>By / Vizcom 🧠</p>
                    <div className = "row">
                        <div className = 'col s3 m3 l3 pics '>
                            <img src = {seed1}/>
                            <img src = {seed2}/>
                            <img src = {seed5}/>
                            
                        </div>
                        <div className = 'col s3 m3 l3 pics '>
                            <img src = {seed3}/>
                            <img src = {seed4}/>
                            <img src = {seed7}/>
                            
                            
                        </div>
                        <div className = 'col s3 m3 l3 pics '>
                        <img src = {seed6}/>
                            <img src = {seed8}/>
                            <img src = {seed11}/>
                        </div>
                        <div className = 'col s3 m3 l3 pics '>
                            <img src = {seed10}/>
                            <img src = {seed12}/>
                            <img src = {seed9}/>
                        </div>
                        
                        
                    </div>
                    
                    <div className = 'row'>
                        <p style = {{fontSize:'1.8rem'}}> Coming soon 👨+💻</p>
                        <img style = {{width:'600px',height:'auto'}}className = 'history' src = {history}/>
                        <a href ="https://www.instagram.com/designerspen/"><img  className = 'insta' src = {insta}/></a>
                        <a href = "https://discord.gg/HFsuDz"><img  className = 'discord' src = {discord}/></a>
                        <p style = {{fontSize:'1.8rem',padding:'0'}}>designerpensmail@gmail.com</p>
                        </div>
               </div> 
            </Desktop>  
            <Tablet>
                <div>
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
                    <p style = {{paddingTop:'80%'}}>Project Vizcom <br/>
                    <span style = {{fontSize:'1.8rem'}}>By / <a href= "https://www.instagram.com/designerspen/">@Designerspen</a></span></p>
                    <p style = {{fontSize:'2.2rem'}}>Vizcom is an Ai driven design tool that is being trained on the collected consciousness of the car design world to help accelerate and inspire designer's creative process.</p>
                    <div className = 'input-field'>
                    <p style = {{fontSize:'1.8rem'}}>Get updates</p>
                        <input  type ='email' id='email' placeholder="Youremail@email.com" onChange={this.handleChange}/>
                        <button className = ' updatesbtn lighten-1 z-depth-0'>Sign up </button>
                    </div>
                    <p style = {{fontSize:'1.8rem'}}>By / Vizcom 🧠</p>
                    <div className = "row">
                        <div className = 'col s6 m6 l6 pics '>
                            <img src = {seed1}/>
                            <img src = {seed2}/>
                            <img src = {seed5}/>
                            <img src = {seed6}/>
                            <img src = {seed8}/>
                            <img src = {seed11}/>
                        </div>
                        <div className = 'col s6 m6 l6 pics '>
                            <img src = {seed3}/>
                            <img src = {seed4}/>
                            <img src = {seed7}/>
                            <img src = {seed9}/>
                            <img src = {seed10}/>
                            <img src = {seed12}/>
                        </div>
                        <p style = {{fontSize:'1.8rem'}}> Coming soon 👨+💻</p>
                        <img className = 'history' src = {history}/>
                        <a href ="https://www.instagram.com/designerspen/"><img  className = 'insta' src = {insta}/></a>
                        <a href = "https://discord.gg/HFsuDz"><img  className = 'discord' src = {discord}/></a>
                        <p style = {{fontSize:'1.8rem'}}>designerpensmail@gmail.com</p>
                    </div>
               </div>
            </Tablet>    
            <Mobile>
                
               <div>
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
                   <p style = {{paddingTop:'120%'}}>Project Vizcom <br/>
                   <span style = {{fontSize:'1rem'}}>By / <a href= "https://www.instagram.com/designerspen/">@Designerspen</a></span></p>
                   <p>Vizcom is an Ai driven design tool that is being trained on the collected consciousness of the car design world to help accelerate and inspire designer's creative process.</p>
                   <div className = 'input-field'>
                   <p style = {{fontSize:'1rem'}}>Get updates</p>
                        <input  type ='email' id='email' placeholder="Youremail@email.com" onChange={this.handleChange}/>
                        <button className = ' updatesbtn lighten-1 z-depth-0'>Sign up </button>
                    </div>
                    <p>By / Vizcom 🧠</p>
                    <div className = "row">
                        <div className = 'col s6 m6 l6 pics '>
                            <img src = {seed1}/>
                            <img src = {seed2}/>
                            <img src = {seed5}/>
                            <img src = {seed6}/>
                            <img src = {seed8}/>
                            <img src = {seed11}/>
                        </div>
                        <div className = 'col s6 m6 l6 pics '>
                            <img src = {seed3}/>
                            <img src = {seed4}/>
                            <img src = {seed7}/>
                            <img src = {seed9}/>
                            <img src = {seed10}/>
                            <img src = {seed12}/>
                        </div>
                        <p> Coming soon 👨+💻</p>
                        <img className = 'history' src = {history}/>
                        <a href ="https://www.instagram.com/designerspen/"><img  className = 'insta' src = {insta}/></a>
                        <a href = "https://discord.gg/HFsuDz"><img  className = 'discord' src = {discord}/></a>
                        <p style = {{fontSize:'1rem'}}>designerpensmail@gmail.com</p>
                    </div>
               </div>
               
            </Mobile>
        </div>
        )
        }
    }
}

const mapStateToProps = (state) => { // 1.) Gives acces to the authentication state 
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

export default   connect(mapStateToProps) (VizcomLearnmore);
import React, {Component} from 'react';
import axios from 'axios';
import StackGrid from "react-stack-grid";
import seed from './assets/seed0655.png'
import {connect} from 'react-redux'

import Flexbox from 'flexbox-react';
import video from './assets/tuff2.mp4'
import video4 from './assets/vid.gif'
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
import story from './assets/Story.jpg'
import demo1 from './assets/demo1.jpg'
import demo2 from './assets/demo2.jpg'
import demo3 from './assets/demo3.jpg'
import demo4 from './assets/demo4.jpg'
import mobiledemo1 from './assets/mobiledemo1.jpg'
import mobiledemo2 from './assets/mobiledemo2.jpg'
import mobiledemo3 from './assets/mobiledemo3.jpg'
import mobiledemo4 from './assets/mobiledemo4.jpg'
import colorpick from './assets/colorpick.jpg'
import history from './assets/history.png'
import insta from '../../assets/images/instagram.svg'
import discord from '../../assets/images/discord.svg'

import vizcomBanner from './assets/vizcomBanner.jpg'
import vizcom1 from './assets/vizcomchallenge1.jpg'
import Mobilevizcomchallenge1 from './assets/Mobilevizcomchallenge1.jpg'
import vizcom2 from './assets/vizcomexample1.jpg'
import vizcom3 from './assets/vizcomexample2.jpg'
import vizcom4 from './assets/vizcomexample3.jpg'
import vizcomchallenge from './assets/stylesheets/vizcomchallenge.css'
import Footer from '../navbar/Footer';




import { Desktop, Tablet, Mobile, Phone } from '../shared';
import  { transitions } from "react-stack-grid";
import '../../assets/stylesheets/Generate.css'

import Logo from '../../assets/images/Asset 1.svg'






class VizcomChallenge extends Component {

    
    
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
                <img className = 'bg' src ={vizcomBanner}/>
                <div className = 'row'>
                    <div className = 'centerimage'>
                        <img  src = {vizcom1}/>
                    </div>

                    <p style = {{textAlign:'center',fontSize:'30px',paddingLeft:'10%',paddingRight:'10%'}}> Discover new design possiblities when collaborating <br/>with Aritficial Intellegence.</p>
                    <a href = "https://designerspen.com/signup"><button className = ' tryitbtn lighten-1 z-depth-0' >Try Vizcom </button></a>

                    <div className = 'col s6 m6 l6'>
                        <h1 style = {{marginLeft:'45%', fontSize:'35px'}}>How to participate</h1>
                    </div>
                    <div className = 'col s6 m6 l6'>
                        <p style = {{float:'left',textAlign:'left',padding:'5%',paddingRight:'25%',fontSize:'20px'}}>Upload your creations to instagram with the hashtag <span style = {{fontWeight:'bold'}}>#VizcomChallenge</span> and you will have the chance to be featured on <a href = 'https://www.instagram.com/designerspen/'>@Designerspen</a></p>
                    </div>
                    
                    <a href = "https://designerspen.com/aboutvizcom"> <p>Learn More</p> </a>
                 
                </div>

                <div className = 'row'>
                <div className = 'centerimage'>
                        <img src= {vizcom2}/>
                        <p style = {{textAlign:'left', paddingLeft:'5%'}}> Demo By / Scott Guan <a href = 'https://www.instagram.com/scottguan/'>(@scottguan)</a></p>

                    </div>

                </div>
                <Footer/>
            </Desktop>
            <Tablet>
                <img className = 'bg' src ={vizcomBanner}/>
                <div className = 'row'>
                    <div className = 'centerimage'>
                        <img  src = {vizcom1}/>
                    </div>

                    <p style = {{textAlign:'center',fontSize:'30px',paddingLeft:'10%',paddingRight:'10%'}}> Discover new design possiblities when collaborating <br/>with Aritficial Intellegence.</p>
                    <a href = "https://designerspen.com/signup"><button className = ' tryitbtn lighten-1 z-depth-0' >Try Vizcom </button></a>

                    <div className = 'col s6 m6 l6'>
                        <h1 style = {{marginLeft:'40%', fontSize:'35px'}}>How to participate</h1>
                    </div>
                    <div className = 'col s6 m6 l6'>
                        <p style = {{float:'left',textAlign:'left',padding:'5%',paddingRight:'25%',fontSize:'20px'}}>Upload your creations to instagram with the hashtag <span style = {{fontWeight:'bold'}}>#VizcomChallenge</span> and you will have the chance to be featured on <a href = 'https://www.instagram.com/designerspen/'>@Designerspen</a></p>
                    </div>
                    
                    <a href = "https://designerspen.com/aboutvizcom"> <p>Learn More</p> </a>
                 
                </div>

                <div className = 'row'>
                <div className = ''>
                        <img src= {vizcom2}/>
                        <p style = {{textAlign:'left', paddingLeft:'5%'}}> Demo By / Scott Guan <a href = 'https://www.instagram.com/scottguan/'>(@scottguan)</a></p>

                    </div>

                </div>
                <Footer/>
            </Tablet>
            <Mobile>
                <div >

               
                <h1 style = {{paddingTop:'30%',fontSize:'25px',textAlign:'center'}}>#VizcomChallenge</h1>
                <div className = 'row'>
                    <div >
                        <img  src = {Mobilevizcomchallenge1}/>
                    </div>

                    <p style = {{textAlign:'center',fontSize:'15px',paddingLeft:'10%',paddingRight:'10%'}}> Discover new design possiblities when collaborating with <br/>Aritficial Intellegence.</p>
                    <a href = "https://designerspen.com/signup"><button className = ' mobiletryitbtn lighten-1 z-depth-0' >Try Vizcom </button></a>

                    <div className = 'col s12 m12 l12'>
                        <h1 style = {{ fontSize:'15px',textAlign:'center'}}>How to participate</h1>
                    </div>
                    <div className = 'col s12 m12 l12'>
                        <p style = {{fontSize:'15px',paddingBottom:'15%'}}>Upload your creations to instagram with the hashtag <span style = {{fontWeight:'bold'}}>#VizcomChallenge</span> and you will have the chance to be featured on <a href = 'https://www.instagram.com/designerspen/'>@Designerspen</a></p>
                    </div>
                    
                    <a href = "https://designerspen.com/aboutvizcom"> <p>Learn More</p> </a>
                 
                </div>

                <div className = 'row'>
                <div className = ''>
                        <img src= {vizcom2}/>
                        <p style = {{textAlign:'left', paddingLeft:'5%',paddingBottom:'40%'}}> Demo By / Scott Guan <a href = 'https://www.instagram.com/scottguan/'>(@scottguan)</a></p>

                    </div>

                </div>
                <Footer/>
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

export default   connect(mapStateToProps) (VizcomChallenge);
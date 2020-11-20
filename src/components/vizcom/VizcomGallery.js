import React, {Component} from 'react';
import axios from 'axios';
import StackGrid from "react-stack-grid";
import seed from './assets/seed0655.png'
import {connect} from 'react-redux'

import Flexbox from 'flexbox-react';
import video from './assets/tuff2.mp4'
import video4 from './assets/vid.gif'
import video2 from './assets/desktopvideo.mp4'
import logo from './assets/Gallery/logo.png'
import seed58 from './assets/Gallery/58.png'
import seed2 from './assets/Gallery/2.png'
import seed3 from './assets/Gallery/3.png'
import seed4 from './assets/Gallery/4.png'
import seed5 from './assets/Gallery/5.png'
import seed6 from './assets/Gallery/6.png'
import seed7 from './assets/Gallery/7.png'
import seed8 from './assets/Gallery/8.png'
import seed9 from './assets/Gallery/9.png'
import seed10 from './assets/Gallery/10.png'
import seed11 from './assets/Gallery/11.png'
import seed12 from './assets/Gallery/12.png'
import seed50 from './assets/Gallery/50.png'
import seed14 from './assets/Gallery/14.png'
import seed15 from './assets/Gallery/15.png'
import seed16 from './assets/Gallery/16.png'
import seed17 from './assets/Gallery/17.png'
import seed18 from './assets/Gallery/18.png'
import seed19 from './assets/Gallery/19.png'
import seed20 from './assets/Gallery/20.png'
import seed21 from './assets/Gallery/21.png'
import seed22 from './assets/Gallery/22.png'
import seed23 from './assets/Gallery/23.png'
import seed24 from './assets/Gallery/24.png'
import seed25 from './assets/Gallery/25.png'
import seed26 from './assets/Gallery/26.png'
import seed27 from './assets/Gallery/27.png'
import seed28 from './assets/Gallery/28.png'
import seed29 from './assets/Gallery/29.png'
import seed30 from './assets/Gallery/30.png'
import seed31 from './assets/Gallery/31.png'
import seed32 from './assets/Gallery/32.png'
import seed33 from './assets/Gallery/33.png'
import seed34 from './assets/Gallery/34.png'
import seed35 from './assets/Gallery/35.png'
import seed36 from './assets/Gallery/36.png'
import seed37 from './assets/Gallery/37.png'
import seed38 from './assets/Gallery/38.png'
import seed39 from './assets/Gallery/39.png'
import seed40 from './assets/Gallery/40.png'
import seed41 from './assets/Gallery/41.png'
import seed42 from './assets/Gallery/42.png'
import seed43 from './assets/Gallery/43.png'
import seed44 from './assets/Gallery/44.png'
import seed45 from './assets/Gallery/45.png'
import seed46 from './assets/Gallery/46.png'
import seed47 from './assets/Gallery/47.png'
import seed48 from './assets/Gallery/48.png'
import seed60 from './assets/Gallery/60.png'
import seed62 from './assets/Gallery/62.png'
import seed51 from './assets/Gallery/51.png'
import seed65 from './assets/Gallery/65.png'
import seed66 from './assets/Gallery/66.png'
import seed67 from './assets/Gallery/67.png'
import seed68 from './assets/Gallery/68.png'
import seed69 from './assets/Gallery/69.png'
import seed70 from './assets/Gallery/70.png'

import history from './assets/history.png'
import insta from '../../assets/images/instagram.svg'
import discord from '../../assets/images/discord.svg'


import { Desktop, Tablet, Mobile, Phone } from '../shared';
import  { transitions } from "react-stack-grid";
import '../../assets/stylesheets/Generate.css'
import '../vizcom/assets/stylesheets/vizcomchallenge.css'

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
            <div style = {{paddingLeft:'5%',paddingRight:'5%'}}>
           
                <div className = 'row' >
                    <p style = {{fontSize:'1.8rem'}}> More coming soon 👨+💻</p>
                
                   
                    <a href = "https://designerspen.com/generate"><img  className = 'vizcom' src = {logo}/></a>
                    <p style = {{fontSize:'1.2rem',padding:'2'}}>v1.1 Sample gallery</p>
                    <p style = {{fontSize:'1rem',paddingLeft:'20%',paddingRight:'20%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make</p>
                    <a href = "https://designerspen.com/signup"><button className = ' tryitbtn2 lighten-1 z-depth-0' >Try Vizcom </button></a>

                </div>
                 
                 <StackGrid
                columnWidth={370}
                >   
                <div key="key1">
                    <img src = {seed60}/>
                    <img src = {seed58}/>   
                    <img src = {seed62}/>
                    <img src = {seed6}/>
                    <img src = {seed23}/> 
                    <img src = {seed9}/>
                </div>
                <div key="key2"> 
                    <img src = {seed2}/>
                    <img src = {seed67}/>
                    <img src = {seed30}/>
                    <img src = {seed31}/>
                    <img src = {seed46}/>
                    <img src = {seed39}/>
                </div>
                <div key="key3"> 
                    <img src = {seed3}/>
                    <img src = {seed44}/>
                    <img src = {seed66}/>
                    <img src = {seed50}/>
                    <img src = {seed16}/>
                    <img src = {seed68}/>
                </div>
                <div key="key34"> 
                <img src = {seed35}/>
                    <img src = {seed21}/>
                    <img src = {seed69}/>
                    <img src = {seed51}/>
                    <img src = {seed70}/>
                    <img src = {seed65}/>
                </div>
                
            </StackGrid>
            <div className = 'row' style = {{padding:'100px'}}>
                   
                    <a href ="https://www.instagram.com/designerspen/"><img  className = 'insta' src = {insta}/></a>
                    <a href = "https://discord.gg/RDwruDp"><img  className = 'discord' src = {discord}/></a>
                    <p style = {{fontSize:'1.8rem',padding:'0'}}>contact@designerspen.com</p>
                </div>
            </div> 
            </Desktop>  
            <Tablet>
                <div>
                    
               </div>
            </Tablet>    
            <Mobile>
                
               <div> 
                    
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
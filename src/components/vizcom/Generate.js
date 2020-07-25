import React, {Component} from 'react';
import axios from 'axios';
import StackGrid from "react-stack-grid";
import seed from './assets/seed0655.png'
import {connect} from 'react-redux'

import Flexbox from 'flexbox-react';

import { Desktop, Tablet, Mobile, Phone } from '../shared';
import  { transitions } from "react-stack-grid";
import '../../assets/stylesheets/Generate.css'
import Logo from '../../assets/images/Asset 1.svg'






class Generate extends Component {

    
    
    constructor(props){
        
        super(props);
        this.state= {
            items :[],
            users:[],

            uuid: props.match.params.uuid,
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            id:[],
            isLoaded: false,
            selectedImage:'',
            limit:50,
            GeneratePreview:'',
            index : 0
            
           

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
        document.addEventListener('scroll', this.trackScrolling);
        const {uuid} = this.state
         
            fetch('https://designerspendroplet.getdpsvapi.com/Generate')
    
         .then((res1) => (res1.json()))
         .then((data1) => this.setState({
             isLoaded:true,
             userphotos:data1
            
         }))      
    }
    

   
    
    

   
    onCollect = _ => {  
    const {uuid,collectedimage} = this.state;
    fetch(`https://designerspendroplet.getdpsvapi.com/collectpost?uuid=${uuid}&post_id=${collectedimage}`)
    .then(console.log("this worked stuff submitted"))
    .catch (err => console.err(err))
    }

    onRemoveCollect = _ => {  
        const {uuid,collectedimage} = this.state;
        fetch(`https://designerspendroplet.getdpsvapi.com/removecollectpost?uuid=${uuid}&post_id=${collectedimage}`)
        .then(console.log("this worked stuff REMOVED"))
        .catch (err => console.err(err))
    }
    openModal() {
    this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

       

    
    
    handleClick(e) { if (e) {e.preventDefault()}; }


  

     toggleImage = () => {
        this.setState({ index : this.state.index + 1 });
      }

     


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        
        // const random = this.state.userphotos.data[Math.floor(Math.random() * this.state.userphotos.data.length)];

      

        
       
          console.log(this.state)
          console.log(this.state.userphotos.data && this.state.userphotos.data.length)
         




          
        if (!isLoaded)    {return <div style = {{paddingTop:'50%'}}><h1 >Loading...</h1></div>
        }
        
        else{
          
      



        return(   
            
            <div style = {{padding:"5%"}}>
            <Desktop>
                
           
                <div      className = 'row'> 
                <p style = {{textAlign:'center',color:'#878787',padding:'0'}}>Vizcom v1.0</p> 
                <h2 style = {{fontSize:'15px',textAlign:'center'}}>Generated Result</h2>
               
                {/* {this.state.userphotos.data.slice(299).map(function (n) {    
                      return ( //post tags 
                <div >
                    <img className = 'generated-image'  src = {n.imageUrl}  />
                </div>
                  );
                })} */}
                 <div >
                    <img className = 'generated-image'  src = {this.state.userphotos.data[this.state.index].imageUrl}  />
                </div>  
                
                <div className = "vertical-center">
                    <p style = {{textAlign:'center',color:'#878787'}}>Click button to generate images</p>
                    <button style = {{bottom:'25px',zIndex:'99999',borderRadius:'50px'}}className = 'generatebtn lighten-1 z-depth-0' onClick={this.toggleImage} onMouseDown={this.handleClick} onKeyUp={(e) => {if (e.keyCode === 13 || e.keyCode === 32) {this.handleClick()}}}>Generate </button>
                    <p style = {{textAlign:'center',paddingTop:'5%'}}>Learn More</p>
                </div>                 
                </div>
                
               
            </Desktop> 
            <Tablet>
               
            </Tablet>    
            <Mobile>
                
                <div style = {{paddingTop:'5%'}}></div>     
                <div      className = 'row'>   
                 
                <h2 style = {{fontSize:'15px',textAlign:'center'}}>Generated Result</h2>
                <div>
                <img style = {{ borderRadius:'20%',backgroundcolor:'white',padding:'2%'}} src = {seed}/>
                </div>
                <div className = "vertical-center">
                    <p style = {{textAlign:'center',color:'#878787',paddingTop:'50%'}}>Tap to generate images</p>
                    <button style = {{bottom:'25px',borderRadius:'50px'}}className = 'generatebtn lighten-1 z-depth-0' onClick={this.toggleImage}  >Generate </button>
                    <p style = {{textAlign:'center',paddingTop:'5%'}}>Learn More</p>
                </div>                
                <img style = {{position:"fixed",zIndex:'99999'}} src = {this.state.selectedImage}  onClick={e => this.setState({selectedImage: ''})}/> 
                    <div style = {{display: this.state.isLoaded ? 'none' : 'inline-block'}}><h1>loading</h1></div>
                    
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

export default   connect(mapStateToProps) (Generate);
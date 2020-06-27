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
            selectedImage:'',
            limit:50
           

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
         Promise.all([
             fetch('https://designerspendroplet.getdpsvapi.com/Discover'), 
             fetch('https://designerspendroplet.getdpsvapi.com/tags'),
                fetch(`https://designerspendroplet.getdpsvapi.com/bio/:uuid?uuid=${(uuid)}`,
             
              {
                method: "GET",
                headers: {'Content-Type':'application/json'}  
            }),
            fetch(`https://designerspendroplet.getdpsvapi.com/collection/:uuid?uuid=${(uuid)}`)
         ])
         .then(([res1, res2,res3,res4]) => Promise.all([res1.json(), res2.json(),res3.json(),res4.json()]))
         .then(([data1,data2,data3,data4]) => this.setState({
             isLoaded:true,
             userphotos:data1,
             tags:data2,
             bio:data3,
             collection:data4
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

       

    
    
     
      loadmore = (event) => {
        const {limit} = this.state;
        fetch(`https://designerspendroplet.getdpsvapi.com/Discovermore?limit=${limit}`)
        .then((res1) => Promise.all([res1.json()]))
        .then(([data1]) => this.setState({ 
            userphotos:data1,
            limit:limit + 50
           
        }));
        console.log(this.state)
     } 

     toggleImage = () => {
        this.setState(state => ({ selectedImage: !state.open }))
      }

     


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile,postTag,id } = this.state;
        const {uuid,displayName,userPhotoUrl,userphotos} = this.state;
        const {auth} = this.props; 
        const {data} = this.state.userphotos
        const { scaleDown } = transitions;

        
       
          console.log(this.state)
          console.log(this.state.userphotos.data)
          console.log(this.state.collection.data)


          
        if (!isLoaded)    {return <div style = {{paddingTop:'50%'}}><h1 >Loading...</h1></div>
        }
        
        else{
          
             



        return(   
            
            <div style = {{padding:"5%"}}>
                <Desktop>
                 
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
                    <button style = {{bottom:'25px',zIndex:'99999',borderRadius:'50px'}}className = 'generatebtn lighten-1 z-depth-0'  onClick={this.loadmore}>Generate </button>
                    <p style = {{textAlign:'center',paddingTop:'5%'}}>Learn More</p>
                </div>                
                <img style = {{position:"fixed",zIndex:'99999'}} src = {this.state.selectedImage}  onClick={e => this.setState({selectedImage: ''})}/> 
                    <div style = {{display: this.state.isLoaded ? 'none' : 'inline-block'}}><h1>loading</h1></div>
                    {this.state.userphotos.data.reverse(0).map((n,index) => { 
                    // return (
                    // <div style ={{paddingTop:'25.75%'}} className = 'col s4 m4 l4'  key={n}>
                    //     <div className = 'col s12 m12 l12' style = {{paddingTop:'20%',zIndex:'-9999'}}>
                    //     <StackGrid
                    //         columnWidth={140}
                    //         appear={scaleDown.appear}
                    //         appeared={scaleDown.appeared}
                    //         enter={scaleDown.enter}
                    //         entered={scaleDown.entered}
                    //         leaved={scaleDown.leaved}
                    //     >
                    //         <img style = {{maxWidth:"100%",paddingTop:'40%'}}src = {n.imageUrl}  onClick={e => this.setState({selectedImage: n.imageUrl})} /> 
                    //         </StackGrid>
                    //     </div>
                    
                
                        
                    //     <div className = "row dis"> 
                    //         <div  style = {{display: n.displayname === "undefined" ? "none": "inline-block"}} className = "col s6 m6 l6">
                    //             <div style = {{float:'left'}}><img  style = {{maxWidth:"25px"}} src = {n.userphotourl}/></div> 
                    //         </div>
                    //     </div>
                    // </div>
                    // );
                    })}
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
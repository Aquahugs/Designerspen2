import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Footer from '../navbar/Footer'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

import { Desktop, Tablet, Mobile, Phone } from '../shared';

import '../../assets/stylesheets/Generate.css'




 

class Generate extends Component {

    
    
    constructor(props){
        
        super(props);
        this.state= {
            items :[],
            users:[],
            collectedimage:'',
            uuid: this.props.auth.uid,
            displayName: props.auth.displayName,
            userPhotoUrl: props.auth.photoURL,
            userphotos:[],
            id:[],
            isLoaded: false,
            selectedImage:'',
            limit:50,
            GeneratePreview:'',
            index : 0,
            isLoggedIn:false,
            setIsOpen:true,
            modalIsOpen:true,
            isGenerating:false
            
           

            // product: {
            //     username:'',
            //     email:'',
            //     password:''
            // },
            
        }
    
    }

    createNotification = (type) => {
        return () => {
           
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success ', 'Image was added to your collection');
              const {uuid,collectedimage} = this.state;
              fetch(`https://designerspendroplet.getdpsvapi.com/collectgenerate?uuid=${uuid}&post_id=${collectedimage}`)
              .catch (err => console.err(err))
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
              case 'error':
                NotificationManager.error('error ', 'Image was removed from your collection');
                

                fetch(`https://designerspendroplet.getdpsvapi.com/removecollectpost?uuid=${uuid}&post_id=${collectedimage}`)
                .then(console.log("this worked stuff REMOVED"))
                .catch (err => console.err(err))
                break;
          }
        };
      };

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
    fetch(`https://designerspendroplet.getdpsvapi.com/collectgenerate?uuid=${uuid}&post_id=${collectedimage}`)
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
        this.setState({ isGenerating :true });
        this.setState({ index : this.state.index + 1 });
        setTimeout(() => {
            this.setState({ isGenerating :false });
          }, 800);
       
      }

     closeModal = () => {
        this.setState({ modalIsOpen :false });
      }

     


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const {auth,authError} = this.props;

        const {modalIsOpen,setIsOpen} = this.state;
        function openModal() {
            setIsOpen(true);
        }
        
        function afterOpenModal() {
            // references are now sync'd and can be accessed.
        }
        
        function closeModal(){
            setIsOpen(false);
        }
        // const random = this.state.userphotos.data[Math.floor(Math.random() * this.state.userphotos.data.length)];

      

        
       
          console.log(this.state)
          console.log(this.props)
          console.log(this.props.auth.uid)
          console.log(this.state.userphotos.data && this.state.userphotos.data.length)
         




          
        if (!isLoaded)    {return <div style = {{paddingTop:'50%'}}><h1 >Loading...</h1></div>
        }
        if(!auth.uid) return <Redirect to='/signup'/>
        
        else{
            const customStyles = {
                content : {
                  top                   : '50%',
                  left                  : '50%',
                  right                 : 'auto',
                  bottom                : 'auto',
                  marginRight           : '-50%',
                  transform             : 'translate(-50%, -50%)'
                }
              };
      



        return(   
            
            <div style = {{paddingBottom:"5%",paddingTop:"5%"}}>
            <Desktop>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
            
                    <h2>How it works </h2>
                    <div className = 'row'>
                        <div className = 's12 m12 l12'>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Boxes.jpg?alt=media&token=3b234b3b-0b83-48ff-b938-7dd2b6869751'/>    
                        </div>
                    </div>
                    
                    <button className="btn2 waves-effect waves-light" style = {{width:'40% !important !important'}}   onClick={this.closeModal}>Continue</button>

                </Modal>
                <a href ={"https://designerspen.com/profile/" + this.props.auth.uid} >
                    <NotificationContainer />        
                </a>
            
                <div      className = 'row'> 
                    <p style = {{textAlign:'center',color:'#878787',padding:'0'}}>Vizcom v1.0</p> 
                    <h2 style = {{fontSize:'15px',textAlign:'center',color:'#323232'}}>Generated Result</h2>
                    <p style = {{padding:'0', color:'#515151'}}>Every click uses Artifical Intellegence to generate an image </p>
               
                {/* {this.state.userphotos.data.slice(299).map(function (n) {    
                      return ( //post tags 
                <div >
                    <img className = 'generated-image'  src = {n.imageUrl}  />
                </div>
                  );
                })} */}
                 <div div className = 'row'>
                    
                  <img 
                    className = 'generated-image'  
                    src = {this.state.userphotos.data[this.state.index].imageUrl}
                    style = {{
                        visibility: this.state.isGenerating ? 'hidden': 'visible',
                        display: this.state.isGenerating ? 'none': 'block'
                    }}  
                  />
                   <img //LOAD ANIMATION
                    className = 'generated-image' 
                    src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/New%20LoadingGenereate%20.gif?alt=media&token=93ba0e96-24af-43a3-8463-650337660f01'
                    style ={{
                        visibility: this.state.isGenerating ? 'visible': 'hidden',
                        display: this.state.isGenerating ? 'block': 'none'
                       
                    }}
                    />
                    <div div className = 'row'>
                        <div  className = 'col s6 m6 l6'>
                           
                            <a href={this.state.userphotos.data[this.state.index].imageUrl} download>
                                <p style = {{textAlign:'left',paddingTop:'0',marginLeft:'60%'}}>Download image</p>
                            </a>
                        </div>
                        <div className = 'col s6 m6 l6'   style = {{paddingLeft:'10%'}} >
                            <button
                              
                                className = 'collectButton2 ' 
                                onClick={e => this.setState({collectedimage:this.state.userphotos.data[this.state.index].imageUrl},this.createNotification('success'))}  type="button">
                                    
                            </button>
                            <p className = 'collect'>Collect</p>
                           
                        </div>
                    </div>
                </div>  
                
                <div className = "vertical-center">
            
                    <button style = {{bottom:'25px',zIndex:'99999',borderRadius:'50px'}}
                        className = 'generatebtn lighten-1 z-depth-0 animate '
                          
                        onClick={this.toggleImage} onMouseDown={this.handleClick} 
                        onKeyUp={(e) => {if (e.keyCode === 13 || e.keyCode === 32) {this.handleClick()}}}>Generate 
                    </button>
                    <a href = 'https://designerspen.com/aboutvizcom'>
                        <p style = {{textAlign:'center',marginTop:'5%',marginBottom:'15%', color:'#272727'}}>Learn More</p>
                    </a>
                    
                </div>                 
                </div>
                <Footer/>
               
            </Desktop> 
            <Tablet>
            
                <a href ={"https://designerspen.com/profile/" + this.props.auth.uid} >
                    <NotificationContainer />        
                </a>
            
                <div      className = 'row'> 
                    <p style = {{textAlign:'center',color:'#878787',padding:'0'}}>Vizcom v1.0</p> 
                    <h2 style = {{fontSize:'15px',textAlign:'center',color:'#323232'}}>Generated Result</h2>
                    <p style = {{padding:'0', color:'#515151'}}>Every click uses Artifical Intellegence to generate an image </p>
               
                {/* {this.state.userphotos.data.slice(299).map(function (n) {    
                      return ( //post tags 
                <div >
                    <img className = 'generated-image'  src = {n.imageUrl}  />
                </div>
                  );
                })} */}
                 <div div className = 'row'>
                    
                  <img 
                    className = 'generated-image'  
                    src = {this.state.userphotos.data[this.state.index].imageUrl}
                    style = {{
                        visibility: this.state.isGenerating ? 'hidden': 'visible',
                        display: this.state.isGenerating ? 'none': 'block'
                    }}  
                  />
                   <img //LOAD ANIMATION
                    className = 'generated-image' 
                    src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/New%20LoadingGenereate%20.gif?alt=media&token=93ba0e96-24af-43a3-8463-650337660f01'
                    style ={{
                        visibility: this.state.isGenerating ? 'visible': 'hidden',
                        display: this.state.isGenerating ? 'block': 'none'
                       
                    }}
                    />
                    <div div className = 'row'>
                        <div  className = 'col s6 m6 l6'>
                           
                            <a href={this.state.userphotos.data[this.state.index].imageUrl} download>
                                <p style = {{textAlign:'left',paddingTop:'0',marginLeft:'60%'}}>Download image</p>
                            </a>
                        </div>
                        <div className = 'col s6 m6 l6'   style = {{paddingLeft:'10%'}} >
                            <button
                              
                                className = 'collectButton2 ' 
                                onClick={e => this.setState({collectedimage:this.state.userphotos.data[this.state.index].imageUrl},this.createNotification('success'))}  type="button">
                                    
                            </button>
                            <p className = 'collect'>Collect</p>
                           
                        </div>
                    </div>
                </div>  
                
                <div className = "vertical-center">
               

                    <button style = {{bottom:'25px',zIndex:'99999',borderRadius:'50px'}}
                        className = 'generatebtn lighten-1 z-depth-0 animate '
                          
                        onClick={this.toggleImage} onMouseDown={this.handleClick} 
                        onKeyUp={(e) => {if (e.keyCode === 13 || e.keyCode === 32) {this.handleClick()}}}>Generate 
                    </button>
                    <a href = 'https://designerspen.com/aboutvizcom'>
                        <p style = {{textAlign:'center',marginTop:'5%',marginBottom:'15%', color:'#272727'}}>Learn More</p>
                    </a>
                    
                </div>                 
                </div>
                <Footer/>
            </Tablet>    
            <Mobile>
                
            <div      className = 'row'> 
                    <p style = {{textAlign:'center',color:'#878787',padding:'0'}}>Vizcom v1.0</p> 
                    <h2 style = {{fontSize:'15px',textAlign:'center',color:'#323232'}}>Generated Result</h2>
                    <p style = {{padding:'0', color:'#515151'}}>Every click uses Artifical Intellegence <br/>to generate an image </p>
               
                {/* {this.state.userphotos.data.slice(299).map(function (n) {    
                      return ( //post tags 
                <div >
                    <img className = 'generated-image'  src = {n.imageUrl}  />
                </div>
                  );
                })} */}
                 <div >
                    
                   <img 
                    className = 'generated-image-mobile'  
                    src = {this.state.userphotos.data[this.state.index].imageUrl}
                    style = {{
                        visibility: this.state.isGenerating ? 'hidden': 'visible',
                        display: this.state.isGenerating ? 'none': 'block'
                    }}  
                  />
                   <img //LOAD ANIMATION
                    className = 'generated-image-mobile' 
                    src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/loadingsmaller.gif?alt=media&token=7f4e10e2-a592-40f2-9901-001e5fe7657a'
                    style ={{
                        visibility: this.state.isGenerating ? 'visible': 'hidden',
                        display: this.state.isGenerating ? 'block': 'none' 
                    }}
                    />
                </div>  
                
                <div className = "vertical-center">
                    <p style = {{textAlign:'center',color:'#878787',marginTop:'15%'}}>Click button to generate images</p>
                    <button style = {{bottom:'25px',zIndex:'99999',borderRadius:'50px'}}className = 'generatebtn lighten-1 z-depth-0' onClick={this.toggleImage} onMouseDown={this.handleClick} onKeyUp={(e) => {if (e.keyCode === 13 || e.keyCode === 32) {this.handleClick()}}}>Generate </button>
                    <a href = 'https://designerspen.com/aboutvizcom'>
                        <p style = {{textAlign:'center',marginTop:'5%',marginBottom:'15%', color:'#272727'}}>Learn More</p>
                    </a>
                    
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

export default   connect(mapStateToProps) (Generate);
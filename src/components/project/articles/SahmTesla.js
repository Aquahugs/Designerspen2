import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';


import RetroHitCounter from 'react-retro-hit-counter';
import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';

const disqusShortname = 'designerspen2'



class SahmTesla extends Component {
    _isMounted = false;

    state = {
        articleurl : window.location.href,
        
    }
    
    componentDidMount() { this._isMounted = true;}
    

   
    render() {

        var info = { //info for share
            text:'Tesla Model 0',
            longtext:'To be able to buy a Tesla for $25,000 to $30,000 sounds unreal. However the Tesla',
            image:'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'
        };
        const disqusConfig = {
            identifier: identifier,
            title: title,
            url:window.location.href
        }
        const title = (this.props.location.key)
        const identifier = (this.props.location.pathname)
        console.log(this.props)
        return ( 
            <div>
            <div className = 'container'>
            <Desktop> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if Telsa made a <br/>Model 0?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <video loop autoPlay muted ref="vidRef" src="https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FSahm%2Fsunny-00001.mp4?alt=media&token=089390df-158c-4fe5-b02c-ff521bda6585" type="video/mp4"></video>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen - Automotive Design</p>
                        <div style = {{paddingRight:'20%'}} >
                        <ShareButtons  onClick={ this.handleClick } info={info}/>
                 
                        </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 2/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                            To be able to buy a Tesla for $25,000 to $30,000 sounds unreal. However the Tesla Model Zero Project by <a href = 'http://sahmjafari.com/http://sahmjafari.com/'>Sahm Jafari</a> touches on that subject.  
                            Sham Jafari is currently an Automotive Designer working at Tesla in Los Angeles, California. This was a project that he showcased at the 2017 Art Center Student Show.
                            </p>
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                            A car that slots under the Model 3 with the goal of making the electric lifestyle accessible to all. - Sahm Jafari
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                     <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                     <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero4.jpg?fit=8000%2C4500'/>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/10-1.jpg?fit=1080%2C618'/>  
                        </div>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Pretty-Pictures4.jpg?fit=7810%2C4423'/>  
                        </div>
                    </div>
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/tip-up2aa-e1508140556702.jpg?fit=3071%2C2009'/>
                    </div>

                    
                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                            The Model Zero strengthens the brand image toward the entry-level market and opens up the doors to sustainable 
                            commuting to nearly anyone looking to get into a new vehicle. - Sahm Jafari
                            </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero7.jpg?fit=8000%2C4500'/>
                            <p style = {{fontSize:'14px'}}>Package Drawing: Sahm Jafari</p>
                        </div>
                        <div className = 'row'>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero3.jpg?fit=8000%2C4500'/>
                        </div>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero8.jpg?fit=8000%2C4500'/>
                        </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero9.jpg?fit=8000%2C4500'/>
                                <p style = {{fontSize:'14px'}}>Sketches: Sahm Jafari</p>
                            </div>
                        </div>
                    </div>
                     

                    
                    <div className = 'row'  style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                            <Carousel>
                                <div>
                                    <img src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-25.jpg?fit=3840%2C1508"/>
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-29.jpg?fit=3840%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-2.jpg?fit=3538%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero6.jpg?fit=8000%2C4500" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-22.jpg?fit=3840%2C1619" />
                                </div>
                                <div>
                                    <img src="https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-210.jpg?fit=3763%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero11.jpg?fit=8000%2C4500" />
                                </div>

                            </Carousel>
                        </div>
                    
                    </div>
                    <h1>Comments</h1>
                    <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig} /> 
                </div>
                <Footer/>
              </Desktop>

               <Tablet minWidth = '768px'> 
               <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if Telsa made a <br/>Model 0?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <video loop autoPlay muted ref="vidRef" src="https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FSahm%2Fsunny-00001.mp4?alt=media&token=089390df-158c-4fe5-b02c-ff521bda6585" type="video/mp4"></video>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen - Automotive Design</p>
                        <div style = {{paddingRight:'20%'}} >
                        <ShareButtons info={info}/>
                        </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 2 / 8 /19</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                        <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                            To be able to buy a Tesla for $25,000 to $30,000 sounds unreal. How ever the  Tesla Model Zero Project by <a href = 'http://sahmjafari.com/http://sahmjafari.com/'>Sahm Jafari</a> touches on that subject.  
                            Sham Jafari is currently an Automotive Designer working at Tesla in Los Angeles, California. This was a project that he showcased at the 2017 Art Center Student Show.
                            </p>
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                            A car that slots under the Model 3 with the goal of making the electric lifestyle accessible to all. - Sahm Jafari
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                     <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                     <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero4.jpg?fit=8000%2C4500'/>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/10-1.jpg?fit=1080%2C618'/>  
                        </div>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Pretty-Pictures4.jpg?fit=7810%2C4423'/>  
                        </div>
                    </div>
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/tip-up2aa-e1508140556702.jpg?fit=3071%2C2009'/>
                    </div>

                    
                   
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'34px', fontFamily:'Georgia'}}>
                            The Model Zero strengthens the brand image toward the entry-level market and opens up the doors to sustainable 
                            commuting to nearly anyone looking to get into a new vehicle. - Sahm Jafari
                            </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero7.jpg?fit=8000%2C4500'/>
                            <p style = {{fontSize:'14px'}}>Package Drawing: Sahm Jafari</p>
                        </div>
                        <div className = 'row'>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero3.jpg?fit=8000%2C4500'/>
                        </div>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero8.jpg?fit=8000%2C4500'/>
                        </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero9.jpg?fit=8000%2C4500'/>
                                <p style = {{fontSize:'14px'}}>Sketches: Sahm Jafari</p>
                            </div>
                        </div>
                    </div>
                     


                    <div className = 'row'  style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                            <Carousel>
                                <div>
                                    <img src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-25.jpg?fit=3840%2C1508"/>
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-29.jpg?fit=3840%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-2.jpg?fit=3538%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero6.jpg?fit=8000%2C4500" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-22.jpg?fit=3840%2C1619" />
                                </div>
                                <div>
                                    <img src="https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-210.jpg?fit=3763%2C2160" />
                                </div>
                                <div>
                                    <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero11.jpg?fit=8000%2C4500" />
                                </div>
                            </Carousel>
                        </div>
                    </div> 
                    <h1>Comments</h1>
                    <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                </div>
                <Footer/>
              </Tablet>   
            </div>







            
            <div className = 'mobile'>
                <Mobile> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if  Tesla <br/> made a Model 0?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <video  loop autoPlay muted ref="vidRef" src="https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FSahm%2Fsunny-00001.mp4?alt=media&token=089390df-158c-4fe5-b02c-ff521bda6585" type="video/mp4"></video>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s6 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p>Designerspen - Automotive Design</p>
                    </div>
                    <div className = 'col s6 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 2 / 8 /19</p>
                    </div>

                    <div className ='row' >
                    <div className = 'col s12 m12 l12' >
                        <ShareButtonsMobile/> 
                    </div>
                    </div>
                    
                 
                    
                    <div className = "row">
                        <div  className = 'col x12 m12 l12'>
                        <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                            To be able to buy a Tesla for $25,000 to $30,000 sounds unreal. How ever the  Tesla Model Zero Project by <a href = 'http://sahmjafari.com/http://sahmjafari.com/'>Sahm Jafari</a> touches on that subject.  
                            Sham Jafari is currently an Automotive Designer working at Tesla in Los Angeles, California. This was a project that he showcased at the 2017 Art Center Student Show.
                            </p>
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'18px', fontFamily:'Georgia'}}>
                                A car that slots under the Model 3 with the goal of making the electric lifestyle accessible to all. - Sahm Jafari
                            </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{marginTop:'3%'}}>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/10-1.jpg?fit=1080%2C618'/>  
                        </div>
                        <div className = 'col x12 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Pretty-Pictures4.jpg?fit=7810%2C4423'/>  
                        </div>
                    </div>
                    <div className = 'row' >
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/tip-up2aa-e1508140556702.jpg?fit=3071%2C2009'/>
                    </div>

                    
                   
                    <div className = 'row' >
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'16px', fontFamily:'Georgia'}}>
                            The Model Zero strengthens the brand image toward the entry-level market and opens up the doors to sustainable 
                            commuting to nearly anyone looking to get into a new vehicle. - Sahm Jafari
                            </p>
                        </div>
                    </div>


                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero7.jpg?fit=8000%2C4500'/>
                            <p style = {{fontSize:'12px'}}>Package Drawing: Sahm Jafari</p>
                        </div>
                        <div className = 'row'>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero3.jpg?fit=8000%2C4500'/>
                        </div>
                        <div className = 'col x6 m6 l6'>
                            <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero8.jpg?fit=8000%2C4500'/>
                        </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero9.jpg?fit=8000%2C4500'/>
                                <p style = {{fontSize:'12px'}}>Sketches: Sahm Jafari</p>
                            </div>
                        </div>
                    </div>
                     

                    
                       
                </div>
                <Carousel >
                    <div>
                        <img  src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-25.jpg?fit=3840%2C1508"/>
                        <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero6.jpg?fit=8000%2C4500" />
                    </div>
                    <div>
                        <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-29.jpg?fit=3840%2C2160" />
                        <img src="https://i1.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-2.jpg?fit=3538%2C2160" />
                    </div>

                    <div>
                        <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-22.jpg?fit=3840%2C1619" />
                        <img src="https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/10/Export-210.jpg?fit=3763%2C2160" />
                        <img src="https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero11.jpg?fit=8000%2C4500" />
                    </div>  
                    <div>
                        <img src = "https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero4.jpg?fit=8000%2C4500"/>
                        <img src = 'https://i0.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero2.jpg?fit=8000%2C4500'/>
                    </div> 
                </Carousel>
                <h1>Comments</h1>
                <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                <Footer/>
              </Mobile>
            </div>
           
            </div>   
        )
    }   
}
    

const mapStateToProps = (state) => {
    console.log(state)
 
}


export default compose(connect(mapStateToProps)) (SahmTesla)
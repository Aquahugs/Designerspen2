import React, {Component} from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';



import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';

class SahmTesla extends Component {
    render() {
        console.log(this.state)
        return ( 
            <div>
            <div className = 'container'>
            <Desktop> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if Telsa made a <br/>Model Zero?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen</p>
                        <div style = {{paddingRight:'20%'}} >
                        <ShareButtons/>
                        </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 1 / 22 /19</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literaturewhen an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. 
                               <p style = {{paddingTop:'1%'}}>It has survived not only five centuries, but also the leap into electronic 
                                typesetting,remaining essentially unchanged. It was popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem  </p>
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
                  
                    
                    
                    
                </div>
                    
             
                <Footer/>
              </Desktop>

               <Tablet minWidth = '768px'> 
               <div className = 'row'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if Telsa made a <br/>Model Zero?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen</p>
                        <div style = {{paddingRight:'20%'}} >
                        <ShareButtons/>
                        </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 1 / 22 /19</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literaturewhen an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. 
                               <p style = {{paddingTop:'1%'}}>It has survived not only five centuries, but also the leap into electronic 
                                typesetting,remaining essentially unchanged. It was popularised in the 1960s 
                                with the release of Letraset sheets containing Lorem  </p>
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
                </div>
                <Footer/>
              </Tablet>   
            </div>







            
            <div className = 'mobile'>
                <Mobile> 
                <div className = 'row'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            What if  Tesla <br/> made a Model Zero?
                        </h1>
                        <p style = {{ fontSize :'20px'}}> By / Sahm Jafari</p>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'/>
                        <p style = {{textAlign:'center'}}>The electric lifestyle for all. - Sahm Jafari</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s6 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p>Designerspen</p>
                    </div>
                    <div className = 'col s6 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 1 / 22 /19</p>
                    </div>

                    <div className ='row' >
                    <div className = 'col s12 m12 l12' >
                        <ShareButtonsMobile/> 
                    </div>
                    </div>
                    
                 
                    
                    <div className = "row">
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literaturewhen an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. 
                               <p style = {{paddingTop:'1%'}}> 
                               A car that slots under the Model 3 with the goal of 
                               making the electric lifestyle accessible to all. - Sahm Jafari
                               </p>
                            </p>
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            <p style = {{textAlign:'left', fontSize:'34px', fontFamily:'Georgia'}}>
                           
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{marginTop:'3%'}}>
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
                <Footer/>
              </Mobile>
            </div>
            </div>   
        )
    }   
}
    




export default SahmTesla
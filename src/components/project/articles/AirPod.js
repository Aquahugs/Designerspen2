import React, {Component} from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';

import {Helmet} from "react-helmet";
import DocumentMeta from 'react-document-meta';

import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';

const disqusShortname = 'designerspen2'




class AirPod extends Component {
    render() {
        
        var info = { //info for share
         //   text:'Tesla Model 0',
          //  longtext:'To be able to buy a Tesla for $25,000 to $30,000 sounds unreal. However the Tesla',
            image:'https://i2.wp.com/sahmjafari.com/wp-content/uploads/2017/11/Zero.jpg?fit=8000%2C4500'
        }; 
        const disqusConfig = {
            identifier: identifier,
            title: title,
            url:window.location.href
        }
        const title = (this.props.location.key)
        const identifier = (this.props.location.pathname)
        const meta = {
            title: ' Second generation of AirPods',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'https://designerspen.com/airpod2',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Airpods,Technology,Apple,html,tags'
              }
            }
        };

        console.log(this.state)
        return ( 
            <div>

            <DocumentMeta {...meta}>
           
            <div className = 'container'>
              
            <Desktop> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            Second generation of AirPods
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2Fd6233574359445.5c2d6b6303aff.jpg?alt=media&token=6011310b-317e-4f27-a6e7-b3bbb95ba122'/>
                        <p style = {{textAlign:'center'}}>Airpods Concept Render & Design- <a href = 'https://www.behance.net/gallery/74359445/AirPodshttps://www.behance.net/gallery/74359445/AirPods'>Xhakomo Doda</a></p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen</p>
                        <div style = {{paddingRight:'20%'}} >
                        <ShareButtons info={info}/>
                        </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 2/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Lets face it, everyone and their grandma pretty much has a pair of Airpods.There’s a good chance we will 
                                be hearing about the Airpods 2 sometime this year with some new features. The big question is how will apple 
                                continue to innovate on what just seem to be wireless earbuds. Sure there will be a faster W2 chip , better
                                battery life and probably active noise cancelling added as time goes on but these are just simply secondary features that are expected .
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F80fc3a74359445.5c2d6b6303251.jpg?alt=media&token=928e4ea3-5a7e-4d0b-8a82-21dafcd84928'/>
                            <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                            "This concept wants to show how can the second generation of AirPods be. 
                            This version provides a magnetic flat surface that allows wireless charging 
                            and the ability to introduce new gesture for the control of AirPods."- <a href = 'https://www.behance.net/dodaxk10eb'>Xhakomo Doda</a>
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                    
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F7d814674359445.5c32c8a65fe6c.jpg?alt=media&token=65af6a91-a86c-4ab7-869f-4c145dbb362e'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F8bd8f674359445.5c2d6b630405c.jpg?alt=media&token=1fd0f3db-e041-4653-ad10-414eea072572'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F3f4ff874359445.5c2d6b6302fa0.jpg?alt=media&token=da4c9a6d-d248-45ec-b719-b9a0bc805950'/>
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F5b80ed74359445.5c2d6b63029bb.jpg?alt=media&token=fb0eaf62-88e8-478f-be51-d412d25354fc'/>
                    </div>
                </div>
                    
                <h1>Comments</h1>
                <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                <Footer/>
              </Desktop>

               <Tablet minWidth = '768px'> 
               <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            Second generation of AirPods
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2Fd6233574359445.5c2d6b6303aff.jpg?alt=media&token=6011310b-317e-4f27-a6e7-b3bbb95ba122'/>
                        <p style = {{textAlign:'center'}}>Airpods Concept Render & Design- <a href = 'https://www.behance.net/gallery/74359445/AirPodshttps://www.behance.net/gallery/74359445/AirPods'>Xhakomo Doda</a></p>
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
                        <p style = {{float:'right'}}>Date: 2/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Lets face it, everyone and their grandma pretty much has a pair of Airpods.There’s a good chance we will 
                                be hearing about the Airpods 2 sometime this year with some new features. The big question is how will apple 
                                continue to innovate on what just seem to be wireless earbuds. Sure there will be a faster W2 chip , better
                                battery life and probably active noise cancelling added as time goes on but these are just simply secondary features that are expected .
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F80fc3a74359445.5c2d6b6303251.jpg?alt=media&token=928e4ea3-5a7e-4d0b-8a82-21dafcd84928'/>
                            <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                            "This concept wants to show how can the second generation of AirPods be. 
                            This version provides a magnetic flat surface that allows wireless charging 
                            and the ability to introduce new gesture for the control of AirPods."- <a href = 'https://www.behance.net/dodaxk10eb'>Xhakomo Doda</a>
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                    
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F7d814674359445.5c32c8a65fe6c.jpg?alt=media&token=65af6a91-a86c-4ab7-869f-4c145dbb362e'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F8bd8f674359445.5c2d6b630405c.jpg?alt=media&token=1fd0f3db-e041-4653-ad10-414eea072572'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F3f4ff874359445.5c2d6b6302fa0.jpg?alt=media&token=da4c9a6d-d248-45ec-b719-b9a0bc805950'/>
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F5b80ed74359445.5c2d6b63029bb.jpg?alt=media&token=fb0eaf62-88e8-478f-be51-d412d25354fc'/>
                    </div>
                </div>
                    
                <h1>Comments</h1>
                <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                <Footer/>
              </Tablet>   
            </div>







            
            <div className = 'mobile'>
                <Mobile> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                            Second generation of AirPods
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2Fd6233574359445.5c2d6b6303aff.jpg?alt=media&token=6011310b-317e-4f27-a6e7-b3bbb95ba122'/>
                        <p style = {{textAlign:'center'}}>Airpods Concept Render & Design- <a href = 'https://www.behance.net/gallery/74359445/AirPodshttps://www.behance.net/gallery/74359445/AirPods'>Xhakomo Doda</a></p>
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
                    
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Lets face it, everyone and their grandma pretty much has a pair of Airpods.There’s a good chance we will 
                                be hearing about the Airpods 2 sometime this year with some new features. The big question is how will apple 
                                continue to innovate on what just seem to be wireless earbuds. Sure there will be a faster W2 chip , better
                                battery life and probably active noise cancelling added as time goes on but these are just simply secondary features that are expected .
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  grey-text'>
                            
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F80fc3a74359445.5c2d6b6303251.jpg?alt=media&token=928e4ea3-5a7e-4d0b-8a82-21dafcd84928'/>
                            <p style = {{textAlign:'left', fontSize:'20px', fontFamily:'Georgia'}}>
                            "This concept wants to show how can the second generation of AirPods be. 
                            This version provides a magnetic flat surface that allows wireless charging 
                            and the ability to introduce new gesture for the control of AirPods."- <a href = 'https://www.behance.net/dodaxk10eb'>Xhakomo Doda</a>
                             </p>
                        </div>
                    </div>


                    <div className = 'row' style = {{ marginTop:'5%'}}>
                    
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F7d814674359445.5c32c8a65fe6c.jpg?alt=media&token=65af6a91-a86c-4ab7-869f-4c145dbb362e'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F8bd8f674359445.5c2d6b630405c.jpg?alt=media&token=1fd0f3db-e041-4653-ad10-414eea072572'/>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F3f4ff874359445.5c2d6b6302fa0.jpg?alt=media&token=da4c9a6d-d248-45ec-b719-b9a0bc805950'/>
                     <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Airpods%2F5b80ed74359445.5c2d6b63029bb.jpg?alt=media&token=fb0eaf62-88e8-478f-be51-d412d25354fc'/>
                    </div>
                </div>
                    
                <h1>Comments</h1>
                <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                <Footer/>
              </Mobile>
            </div>
            </DocumentMeta>
            </div>   
        )
    }   
}
    




export default AirPod
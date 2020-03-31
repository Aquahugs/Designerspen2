import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';

import cover  from '../../../assets/images/Articles/2020/Kyrkesun/1.jpg'
import image2  from '../../../assets/images/Articles/2020/Kyrkesun/2.jpg'
import image3  from '../../../assets/images/Articles/2020/Kyrkesun/3.jpg'
import image4  from '../../../assets/images/Articles/2020/Kyrkesun/4.jpg'
import image5  from '../../../assets/images/Articles/2020/Kyrkesun/5.jpg'
import image6  from '../../../assets/images/Articles/2020/Kyrkesun/6.jpg'
import image7  from '../../../assets/images/Articles/2020/Kyrkesun/7.jpg'
import image8  from '../../../assets/images/Articles/2020/Kyrkesun/8.jpg'
import image9  from '../../../assets/images/Articles/2020/Kyrkesun/9.jpg'
import image10  from '../../../assets/images/Articles/2020/Kyrkesun/10.jpg'
import image11 from '../../../assets/images/Articles/2020/Kyrkesun/11.jpg'
import image12 from '../../../assets/images/Articles/2020/Kyrkesun/12.jpg'
import image13 from '../../../assets/images/Articles/2020/Kyrkesun/13.jpg'
import image14  from '../../../assets/images/Articles/2020/Kyrkesun/14.jpg'

import RetroHitCounter from 'react-retro-hit-counter';
import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';

const disqusShortname = 'designerspen2'



class Kyrkesund extends Component {
    _isMounted = false;

    state = {
        articleurl : window.location.href,
        
    }
    
    componentDidMount() { this._isMounted = true;}
    
    handleClick(e) {
        console.log('hello world')
      }

   
    render() {

        var info = { //info for share
            text:'Kyrkesund Weekend House',
            longtext:'',
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
                            Kyrkesund Weekend House 
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By / Mattias Gunneflo</p>
                        </div>
                        
                    </div>
                    
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = {cover}></img>
                            <p style = {{textAlign:'center'}}>PHOTOS BY <a href = 'https://www.instagram.com/akeeson/?hl=it'>ÅKE E:SON LINDMAN </a>
                            <br/>LOCATION SWEDEN - KYRKESUND<br/> 
                                DESIGNER <a href = 'http://www.mattiasgunneflo.com/#1'>MATTIAS GUNNEFLO</a><br/>
                                PROJECT YEAR 2014
                            </p>
                        </div>
                    </div>

                    <div className ='row' >
                        {/* <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <p style = {{ fontSize :'20px'}}>Designerspen - Architecture </p>
                            <div style = {{paddingRight:'20%'}} >
                            <ShareButtons  onClick={ this.handleClick } info={info}/>
                    
                            </div>
                        </div> */}
                        {/* <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                            <p style = {{float:'right'}}>Date:2/ 8 /19</p>
                        </div> */}
                    
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'center', fontSize:'45px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                A contemporary cabin with sweeping views of South Sweden
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{ marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                    This structure was commissioned by a couple looking for a weekend refuge where one can enjoy the natural surroundings from every vantage.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = {image2}/>
                                <img style = {{maxWidth:'100%'}} src = {image3}/>
                                <img style = {{maxWidth:'100%'}} src = {image4}/>
                                <img style = {{maxWidth:'100%'}} src = {image5}/>
                                <img style = {{maxWidth:'100%'}} src = {image6}/>
                                <img style = {{maxWidth:'100%'}} src = {image7}/>
                                <img style = {{maxWidth:'100%'}} src = {image8}/>
                                <img style = {{maxWidth:'100%'}} src = {image9}/>
                                <img style = {{maxWidth:'100%'}} src = {image10}/>
                                <img style = {{maxWidth:'100%'}} src = {image11}/>
                                <img style = {{maxWidth:'100%'}} src = {image12}/>
                                <img style = {{maxWidth:'100%'}} src = {image13}/>
                                <img style = {{maxWidth:'100%'}} src = {image14}/>
                            </div>
                            
                        </div>
                    </div>
                        <h1>Comments</h1>
                        <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig} /> 
                    <Footer/>
                </Desktop>
             </div>
            <div>
              

               <Tablet minWidth = '768px'> 
               <div className = 'row Toptitle'>
                        <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                            <h1>
                            Kyrkesund Weekend House 
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By / Mattias Gunneflo</p>
                        </div>
                        
                    </div>
                    
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = {cover}></img>
                            <p style = {{textAlign:'center'}}>PHOTOS BY <a href = 'https://www.instagram.com/akeeson/?hl=it'>ÅKE E:SON LINDMAN </a>
                            <br/>LOCATION SWEDEN - KYRKESUND<br/> 
                                DESIGNER <a href = 'http://www.mattiasgunneflo.com/#1'>MATTIAS GUNNEFLO</a><br/>
                                PROJECT YEAR 2014
                            </p>
                        </div>
                    </div>

                    <div className ='row' >
                        {/* <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <p style = {{ fontSize :'20px'}}>Designerspen - Architecture </p>
                            <div style = {{paddingRight:'20%'}} >
                            <ShareButtons  onClick={ this.handleClick } info={info}/>
                    
                            </div>
                        </div> */}
                        {/* <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                            <p style = {{float:'right'}}>Date:2/ 8 /19</p>
                        </div> */}
                    
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'center', fontSize:'45px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                A contemporary cabin with sweeping views of South Sweden
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{ marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                    This structure was commissioned by a couple looking for a weekend refuge where one can enjoy the natural surroundings from every vantage.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = {image2}/>
                                <img style = {{maxWidth:'100%'}} src = {image3}/>
                                <img style = {{maxWidth:'100%'}} src = {image4}/>
                                <img style = {{maxWidth:'100%'}} src = {image5}/>
                                <img style = {{maxWidth:'100%'}} src = {image6}/>
                                <img style = {{maxWidth:'100%'}} src = {image7}/>
                                <img style = {{maxWidth:'100%'}} src = {image8}/>
                                <img style = {{maxWidth:'100%'}} src = {image9}/>
                                <img style = {{maxWidth:'100%'}} src = {image10}/>
                                <img style = {{maxWidth:'100%'}} src = {image11}/>
                                <img style = {{maxWidth:'100%'}} src = {image12}/>
                                <img style = {{maxWidth:'100%'}} src = {image13}/>
                                <img style = {{maxWidth:'100%'}} src = {image14}/>
                            </div>
                            
                        </div>
                    </div>
                        <h1>Comments</h1>
                        <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig} /> 
                    <Footer/>
              </Tablet>   
            </div>







            
            <div className = 'mobile '>
                <Mobile> 
                <div className = 'row Toptitle'>
                        <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                            <h1>
                            Kyrkesund Weekend House 
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By / Mattias Gunneflo</p>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = {cover}></img>
                            <p style = {{textAlign:'center'}}>PHOTOS BY <a href = 'https://www.instagram.com/akeeson/?hl=it'>ÅKE E:SON LINDMAN </a>
                            <br/>LOCATION SWEDEN - KYRKESUND<br/> 
                                DESIGNER <a href = 'http://www.mattiasgunneflo.com/#1'>MATTIAS GUNNEFLO</a><br/>
                                PROJECT YEAR 2014
                            </p>
                        </div>
                    </div>

                    <div className ='row' >
                        <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <div style = {{paddingRight:'20%'}} >
                            </div>
                        </div>
                        {/* <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                            <p style = {{float:'right'}}>Date:2/ 8 /19</p>
                        </div> */}
                    
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'center', fontSize:'45px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                A contemporary cabin with sweeping views of South Sweden
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{ marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                    This structure was commissioned by a couple looking for a weekend refuge where one can enjoy the natural surroundings from every vantage.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = {image2}/>
                                <img style = {{maxWidth:'100%'}} src = {image3}/>
                                <img style = {{maxWidth:'100%'}} src = {image4}/>
                                <img style = {{maxWidth:'100%'}} src = {image5}/>
                                <img style = {{maxWidth:'100%'}} src = {image6}/>
                                <img style = {{maxWidth:'100%'}} src = {image7}/>
                                <img style = {{maxWidth:'100%'}} src = {image8}/>
                                <img style = {{maxWidth:'100%'}} src = {image9}/>
                                <img style = {{maxWidth:'100%'}} src = {image10}/>
                                <img style = {{maxWidth:'100%'}} src = {image11}/>
                                <img style = {{maxWidth:'100%'}} src = {image12}/>
                                <img style = {{maxWidth:'100%'}} src = {image13}/>
                                <img style = {{maxWidth:'100%'}} src = {image14}/>
                            </div>
                            
                        </div>
                    </div>
                        <h1>Comments</h1>
                        <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig} /> 
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


export default compose(connect(mapStateToProps)) (Kyrkesund)
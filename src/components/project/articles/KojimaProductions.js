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



class KojimaProductions extends Component {
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
            text:'Kojima Productions company icon and mascot',
            longtext:'Years before the development of Death Stranding , Kojima discussed with Shinkawa before the idea of an astronaut exploring a digital space.',
            image:'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_okelenZwbg1rhb3jxo2_1280.jpg?alt=media&token=1a4543a6-02e0-4b6f-9335-89b89e8862e9'
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
                                Kojima Productions company icon and mascot
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By /Kojima Productions</p>
                        </div>
                        
                    </div>
                    
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_okelenZwbg1rhb3jxo2_1280.jpg?alt=media&token=1a4543a6-02e0-4b6f-9335-89b89e8862e9'></img>
                            <p style = {{textAlign:'center'}}>Hideo Kojima & Ludens</p>
                        </div>
                    </div>

                    <div className ='row' >
                        <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <p style = {{ fontSize :'20px'}}>Designerspen - Video Games</p>
                            <div style = {{paddingRight:'20%'}} >
                            <ShareButtons  onClick={ this.handleClick } info={info}/>
                    
                            </div>
                        </div>
                        <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                            <p style = {{float:'right'}}>Date:2/ 8 /19</p>
                        </div>
                    
                        
                    
                        
                        <div className = "row" style = {{paddingTop:'10%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Legendary game designer Hideo Kojima originally entered college to study economics but as a college student Kojima found himself using his freetime to play video games. 
                                Hideo Kojima always had ambitions to be a film director but decided at the age of 23 to join Konami as a Designer & Planner. Having a lack of familiarity of programming Kojima's gameplay
                                ideas were initially overlooked. After working on 2 smaller projects at Konami, he was asked to take over a project within the company called Metal Gear, and the rest is history.
                                </p>
                            </div>
                        </div>
                      
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                “I’m trying to make something different. How to show that, how to have people see that, that’s something I’m trying to figure out.” - Hideo Kojima
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <h1>Yoji Shinkawa</h1>
                                <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Yoji Shinkawa was the lead designer of Ludens. Years before the development of Death Stranding , Kojima discussed with Shinkawa before the idea of an astronaut exploring a digital space.
                                 A <a href = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2322090.m570.l1313.TR1.TRC0.A0.H0.XLudens+1%2F6+.TRS0&_nkw=Ludens+1%2F6+&_sacat=0'>1/6 scale model of Ludens</a> usually goes for around $599.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fhqdefault.jpg?alt=media&token=d585c1a6-5e9d-41ce-8763-054a4f54603e'/>
                               
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fludens_1000toys_6.0.jpg?alt=media&token=67613a28-8ba2-4f4f-9515-ca181fad2cb2'/>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Flogoideation.jpg?alt=media&token=59c1b2b5-c0b2-493c-b576-cf53e7a33eb4'/>   
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch%202.jpg?alt=media&token=5266d633-13c7-49d3-9e42-52289d46b30d'/>
                                <p>Yoji Shinkawa artworks of Ludens from Kojima Production</p>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch3.jpg?alt=media&token=8784b429-1d77-492b-b229-362db8b0ded7'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l6rIE7p1riif28_500.jpg?alt=media&token=54acee51-02b6-4d7d-b9ba-fae749ea8c98'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l00OJqV1riif28_500.jpg?alt=media&token=2b0c3360-da1d-4121-a94c-392dc69f7ec8'/>  
                            </div>
                            <div  className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fl2.jpg?alt=media&token=b6356165-048e-4134-9f66-99f59403a138'/>
                            </div>
                        </div>

                        <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-53.jpg?alt=media&token=d9e96b67-b8dd-46c1-83dc-abc001b1010c'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-e21313.jpg?alt=media&token=2660a58e-394f-483d-a671-3d781323371b'/>  
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
                                Kojima Productions company icon and mascot
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By /Kojima Productions</p>
                        </div>
                        
                    </div>
                    
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_okelenZwbg1rhb3jxo2_1280.jpg?alt=media&token=1a4543a6-02e0-4b6f-9335-89b89e8862e9'></img>
                            <p style = {{textAlign:'center'}}>Hideo Kojima & Ludens</p>
                        </div>
                    </div>

                    <div className ='row' >
                        <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <p style = {{ fontSize :'20px'}}>Designerspen - Video Games</p>
                            <div style = {{paddingRight:'20%'}} >
                            <ShareButtons  onClick={ this.handleClick } info={info}/>
                    
                            </div>
                        </div>
                        <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                            <p style = {{float:'right'}}>Date:2/ 8 /19</p>
                        </div>
                    
                        
                    
                        
                        <div className = "row" style = {{paddingTop:'10%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <p style = {{fontSize:'22px',lineHeight:'2',paddingLeft:'15%',paddingRight:'15%',fontFamily:'Georgia'}}>
                                Legendary game designer Hideo Kojima originally entered college to study economics but as a college student Kojima found himself using his freetime to play video games. 
                                Hideo Kojima always had ambitions to be a film director but decided at the age of 23 to join Konami as a Designer & Planner. Having a lack of familiarity of programming Kojima's gameplay
                                ideas were initially overlooked. After working on 2 smaller projects at Konami, he was asked to take over a project within the company called Metal Gear, and the rest is history.
                                </p>
                            </div>
                        </div>
                      
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                “I’m trying to make something different. How to show that, how to have people see that, that’s something I’m trying to figure out.” - Hideo Kojima
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <h1>Yoji Shinkawa</h1>
                                <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Yoji Shinkawa was the lead designer of Ludens. Years before the development of Death Stranding , Kojima discussed with Shinkawa before the idea of an astronaut exploring a digital space.
                                 A <a href = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2322090.m570.l1313.TR1.TRC0.A0.H0.XLudens+1%2F6+.TRS0&_nkw=Ludens+1%2F6+&_sacat=0'>1/6 scale model of Ludens</a> usually goes for around $599.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fhqdefault.jpg?alt=media&token=d585c1a6-5e9d-41ce-8763-054a4f54603e'/>
                               
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fludens_1000toys_6.0.jpg?alt=media&token=67613a28-8ba2-4f4f-9515-ca181fad2cb2'/>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Flogoideation.jpg?alt=media&token=59c1b2b5-c0b2-493c-b576-cf53e7a33eb4'/>   
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch%202.jpg?alt=media&token=5266d633-13c7-49d3-9e42-52289d46b30d'/>
                                <p>Yoji Shinkawa artworks of Ludens from Kojima Production</p>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch3.jpg?alt=media&token=8784b429-1d77-492b-b229-362db8b0ded7'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l6rIE7p1riif28_500.jpg?alt=media&token=54acee51-02b6-4d7d-b9ba-fae749ea8c98'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l00OJqV1riif28_500.jpg?alt=media&token=2b0c3360-da1d-4121-a94c-392dc69f7ec8'/>  
                            </div>
                            <div  className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fl2.jpg?alt=media&token=b6356165-048e-4134-9f66-99f59403a138'/>
                            </div>
                        </div>

                        <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-53.jpg?alt=media&token=d9e96b67-b8dd-46c1-83dc-abc001b1010c'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-e21313.jpg?alt=media&token=2660a58e-394f-483d-a671-3d781323371b'/>  
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
                <div className = 'row Toptitle container'>
                        <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                            <h1>
                                Kojima Productions company icon and mascot
                            </h1>
                            <p style = {{ fontSize :'20px'}}> By /Kojima Productions</p>
                        </div>
                        
                    </div>
                    
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                            <img src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_okelenZwbg1rhb3jxo2_1280.jpg?alt=media&token=1a4543a6-02e0-4b6f-9335-89b89e8862e9'></img>
                            <p style = {{textAlign:'center'}}>Hideo Kojima & Ludens</p>
                        </div>
                    </div>

                    <div className ='row' >
                        <div className = 'col s6 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                            <p>Designerspen - Video Games</p>
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
                                Legendary game designer Hideo Kojima originally entered college to study economics but as a college student Kojima found himself using his freetime to play video games. 
                                Hideo Kojima always had ambitions to be a film director but decided at the age of 23 to join Konami as a Designer & Planner. Having a lack of familiarity of programming Kojima's gameplay
                                ideas were initially overlooked. After working on 2 smaller projects at Konami, he was asked to take over a project within the company called Metal Gear, and the rest is history.
                                </p>
                            </div>
                        </div>
                      
                        <div className = 'row'>
                            <div className = ' col x12 m12 l12  grey-text'>
                                <p style = {{textAlign:'left', fontSize:'18px', fontFamily:'Georgia'}}>
                                “I’m trying to make something different. How to show that, how to have people see that, that’s something I’m trying to figure out.” - Hideo Kojima
                                </p>
                            </div>
                        </div>
                    

                        <div className = 'row' style = {{ marginTop:'5%'}}>
                            <div  className = 'col x12 m12 l12'>
                                <h1>Yoji Shinkawa</h1>
                                <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Yoji Shinkawa was the lead designer of Ludens. Years before the development of Death Stranding , Kojima discussed with Shinkawa before the idea of an astronaut exploring a digital space.
                                 A <a href = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2322090.m570.l1313.TR1.TRC0.A0.H0.XLudens+1%2F6+.TRS0&_nkw=Ludens+1%2F6+&_sacat=0'>1/6 scale model of Ludens</a> usually goes for around $599.
                                </p> 
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fhqdefault.jpg?alt=media&token=d585c1a6-5e9d-41ce-8763-054a4f54603e'/>
                               
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fludens_1000toys_6.0.jpg?alt=media&token=67613a28-8ba2-4f4f-9515-ca181fad2cb2'/>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Flogoideation.jpg?alt=media&token=59c1b2b5-c0b2-493c-b576-cf53e7a33eb4'/>   
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch%202.jpg?alt=media&token=5266d633-13c7-49d3-9e42-52289d46b30d'/>
                                <p>Yoji Shinkawa artworks of Ludens from Kojima Production</p>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fsketch3.jpg?alt=media&token=8784b429-1d77-492b-b229-362db8b0ded7'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l6rIE7p1riif28_500.jpg?alt=media&token=54acee51-02b6-4d7d-b9ba-fae749ea8c98'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Ftumblr_inline_oe0l00OJqV1riif28_500.jpg?alt=media&token=2b0c3360-da1d-4121-a94c-392dc69f7ec8'/>  
                            </div>
                            <div  className = 'col x12 m12 l12'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2Fl2.jpg?alt=media&token=b6356165-048e-4134-9f66-99f59403a138'/>
                            </div>
                        </div>

                        <div className = 'row'>
                        <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-53.jpg?alt=media&token=d9e96b67-b8dd-46c1-83dc-abc001b1010c'/>
                            </div>
                            <div className = 'col x12 m6 l6'>
                                <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FDeathStranding%2FLudens-Onesixth-scale-figure-By-Kojima-Productions-x-1000toys-e21313.jpg?alt=media&token=2660a58e-394f-483d-a671-3d781323371b'/>  
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


export default compose(connect(mapStateToProps)) (KojimaProductions)
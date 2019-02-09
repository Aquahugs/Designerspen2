import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';
//import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';


import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';


const disqusShortname = 'designerspen2'
//Post.css
class ArExp extends Component {
    render() {
        var info = { //info for share
            text:' Will AR hit an Inflection Point in 2019?',
            longtext:'Imagine walking into an office and there are no desk or chairs but once you put on a pair of lightweight goggles all',
            image:'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2FIMG_6153smaller.jpg?alt=media&token=01847295-aad2-461c-8084-87c0b5d4743c'
        };
        const disqusConfig = {
            identifier: identifier,
            title: title,
            url:window.location.href
        }
        const title = (this.props.location.key)
        const identifier = (this.props.location.pathname)
        console.log(this.state)
        return ( 
        <div>
            <div className = 'container'>
            <Desktop> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                          Will AR hit an Inflection Point in 2019?
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/hr3OvG6M7Ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p style = {{textAlign:'center'}}>Video recorded using Microsoft Hololens</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen - Technology</p>
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
                                     Imagine walking into an office and there are no desk or chairs but once you
                                 put on a pair of lightweight goggles all of a  sudden the room comes to life. You look to your right, you see your 
                                 colleague Shayna, who’s joining from Boston. To the left, the company CEO, Daniel, who’s currently in Seattle. Across 
                                 the room from you is Andy, who’s joining from his home office in London. A reality such as this isn't to far away and 
                                 is very much possible to happen sooner than we think.  
                            </p>
                        </div>
                    </div>

               

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2FIMG_6153smaller.jpg?alt=media&token=01847295-aad2-461c-8084-87c0b5d4743c'/>
                    </div>

                    
                    <div className = "row" style = {{marginTop:'5%', marginBottom:'10%',paddingLeft:'15%',paddingRight:'15%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <h2>Trying AR in the mountains</h2>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            When I first started using AR in more environmental settings it felt like the world became my desktop and the physical boundaries of my space were the only limits.
                             The idea of a fixed interface on a screen of some sort  instantly started to feel dated. 
                            </p>
                            <div className = 'row'>
                                <div className = ' col x12 m12 l12  grey-text'>
                                    <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                     A fundamental shift in Graphic User Interface.
                                    </p>
                                </div>
                            </div>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>        
                            Even though the current gesture control practices used to interact with what we have now in AR is still in its infancy,  after trying it you can start to see how 
                             it could become commonized. You could almost argue that the idea of a mouse and keyboard being our primary choice was maybe a mistake. But
                             who will be the one to lay out the standardized rules for interacting with spatial computing? No longer having to sit in somewhat of a fixed position just 
                              to use a computer might be right around the corner.
                               </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                        <h2>Adoption will take some time.</h2>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            According to  <a href = 'https://www.usatoday.com/story/money/markets/2018/02/24/a-foolish-take-nearly-80-of-americans-own-smartphones/110342918/' >survey</a> conducted by Walker Sands Communications, approximately 80 percent of adults in the United States own a smartphone. Although I absolutely love the technology and its many potential applications in the upcoming years , 
                            I think It will take some time before we see these kind of adoption numbers in the  AR space.  
                             </p>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2Fadoption%20chart.png?alt=media&token=122d824e-07c5-4837-ad61-f584b2a0b41e'/>
                            <p style = {{fontSize:'14px'}}>Source :<a href = 'https://www.statista.com/statistics/591181/global-augmented-virtual-reality-market-size/'> ©Statista</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>        
                              Until then AR still feels like it's just breaking out its “1.0 stage” of gimmick applications that show off the just core tech like an AR measuring tape.
                              But this isn’t only a software driven progression. The hardware is something that will be driving the content that is provided on it . As of now
                              Microsoft Hololens and Magic Leap both are priced in the 5 figure range which I believe is still a hard value proposition for most consumers especially 
                              for ones who are maybe just curious about it.
                            </p>
                        </div>
                    </div>
                    <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                </div>
                    

                <Footer/>
              </Desktop>

            </div>


            <div className = 'container'>
            <Tablet> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                          Will AR hit an Inflection Point in 2019?
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                    <iframe width="100%" height="720" src="https://www.youtube.com/embed/hr3OvG6M7Ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p style = {{textAlign:'center'}}>Video recorded using Microsoft Hololens</p>
                    </div>
                </div>

                 <div className ='row' >
                    <div className = 'col s2 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p style = {{ fontSize :'20px'}}>Designerspen - Technology</p>
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
                                     Imagine walking into an office and there are no desk or chairs but once you
                                 put on a pair of lightweight goggles all of a  sudden the room comes to life. You look to your right, you see your 
                                 colleague Shayna, who’s joining from Boston. To the left, the company CEO, Daniel, who’s currently in Seattle. Across 
                                 the room from you is Andy, who’s joining from his home office in London. A reality such as this isn't to far away and 
                                 is very much possible to happen sooner than we think.  
                            </p>
                        </div>
                    </div>

               

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%', marginTop:'5%'}}>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2FIMG_6153smaller.jpg?alt=media&token=01847295-aad2-461c-8084-87c0b5d4743c'/>
                    </div>

                    
                    <div className = "row" style = {{marginTop:'5%', marginBottom:'10%',paddingLeft:'15%',paddingRight:'15%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <h2>Trying AR in the mountains</h2>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            When I first started using AR in more environmental settings it felt like the world became my desktop and the physical boundaries of my space were the only limits.
                             The idea of a fixed interface on a screen of some sort  instantly started to feel dated. 
                            </p>
                            <div className = 'row'>
                                <div className = ' col x12 m12 l12  grey-text'>
                                    <p style = {{textAlign:'left', fontSize:'34px', paddingLeft:'15%',paddingRight:'15%', fontFamily:'Georgia'}}>
                                     A fundamental shift in Graphic User Interface.
                                    </p>
                                </div>
                            </div>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>        
                            Even though the current gesture control practices used to interact with what we have now in AR is still in its infancy,  after trying it you can start to see how 
                             it could become commonized. You could almost argue that the idea of a mouse and keyboard being our primary choice was maybe a mistake.But
                             who will be the one to lay out the standardized rules for interacting with spatial computing? No longer having to sit in somewhat of a fixed position just 
                              to use a computer might be right around the corner.
                               </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = 'col x12 m12 l12'>
                        <h2>Adoption will take some time.</h2>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            According to  <a href = 'https://www.usatoday.com/story/money/markets/2018/02/24/a-foolish-take-nearly-80-of-americans-own-smartphones/110342918/' >survey</a> conducted by Walker Sands Communications, approximately 80 percent of adults in the United States own a smartphone. Although I absolutely love the technology and its many potential applications in the upcoming years , 
                            I think It will take some time before we see these kind of adoption numbers in the  AR space.  
                             </p>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2Fadoption%20chart.png?alt=media&token=122d824e-07c5-4837-ad61-f584b2a0b41e'/>
                            <p style = {{fontSize:'14px'}}>Source :<a href = 'https://www.statista.com/statistics/591181/global-augmented-virtual-reality-market-size/'> ©Statista</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>        
                              Until then AR still feels like it's just breaking out its “1.0 stage” of gimmick applications that show off the just core tech like an AR measuring tape.
                              But this isn’t only a software driven progression. The hardware is something that will be driving the content that is provided on it . As of now
                              Microsoft Hololens and Magic Leap both are priced in the 5 figure range which I believe is still a hard value proposition for most consumers especially 
                              for ones who are maybe just curious about it.
                            </p>
                        </div>
                    </div>
                    <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                </div>
                    

                <Footer/>
              </Tablet>
            </div>



            <div className = 'container'>
            <Mobile> 
                <div className = 'row Toptitle'>
                    <div className = 'col s12 m12 l12' style = {{textAlign:'center'}}>
                        <h1>
                          Will AR hit an Inflection Point in 2019?
                        </h1>
                    </div>
                    
                </div>
                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                    <iframe width="100%" height="340" src="https://www.youtube.com/embed/hr3OvG6M7Ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p style = {{textAlign:'center'}}>Video recorded using Microsoft Hololens</p>
                    </div>
                </div>

                <div className ='row' >
                    <div className = 'col s6 m6 l6' style = {{paddingLeft:'15%',fontFamily:'Georgia'}} >
                        <p>Designerspen -Technology</p>
                    </div>
                    <div className = 'col s6 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 2 / 8 /19</p>
                    </div>

                    <div className ='row' >
                    <div className = 'col s12 m12 l12' >
                        <ShareButtonsMobile info={info}/> 
                    </div>
                </div>
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                                     Imagine walking into an office and there are no desk or chairs but once you
                                 put on a pair of lightweight goggles all of a  sudden the room comes to life. You look to your right, you see your 
                                 colleague Shayna, who’s joining from Boston. To the left, the company CEO, Daniel, who’s currently in Seattle.<br/> Across 
                                 the room from you is Andy, who’s joining from his home office in London. A reality such as this isn't to far away and 
                                 is very much possible to happen sooner than we think.  
                            </p>
                        </div>
                    </div>

               

                    <div className = 'row' style = {{ marginTop:'5%'}}>
                     <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2FIMG_6153smaller.jpg?alt=media&token=01847295-aad2-461c-8084-87c0b5d4743c'/>
                    </div>

                    
                    <div className = "row" style = {{marginTop:'5%', marginBottom:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <h2>Trying AR in the mountains</h2>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                            When I first started using AR in more environmental settings it felt like the world became my desktop and the physical boundaries of my space were the only limits.
                             The idea of a fixed interface on a screen of some sort  instantly started to feel dated. 
                            </p>
                            <div className = 'row'>
                                <div className = ' col x12 m12 l12  grey-text'>
                                    <p style = {{textAlign:'left', fontSize:'24px', fontFamily:'Georgia'}}>
                                     A fundamental shift in Graphic User Interface.
                                    </p>
                                </div>
                            </div>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>        
                            Even though the current gesture control practices used to interact with what we have now in AR is still in its infancy,  after trying it you can start to see how 
                             it could become commonized. You could almost argue that the idea of a mouse and keyboard being our primary choice was maybe a mistake.But
                             who will be the one to lay out the standardized rules for interacting with spatial computing? No longer having to sit in somewhat of a fixed position just 
                              to use a computer might be right around the corner.
                               </p>
                        </div>
                    </div>

                    <div className = 'row' >
                        <div className = 'col x12 m12 l12'>
                        <h2>Adoption will take some time.</h2>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>
                            According to  <a href = 'https://www.usatoday.com/story/money/markets/2018/02/24/a-foolish-take-nearly-80-of-americans-own-smartphones/110342918/' >survey</a> conducted by Walker Sands Communications, approximately 80 percent of adults in the United States own a smartphone. Although I absolutely love the technology and its many potential applications in the upcoming years , 
                            I think It will take some time before we see these kind of adoption numbers in the  AR space.  
                             </p>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FAugmentedReality%2Fadoption%20chart.png?alt=media&token=122d824e-07c5-4837-ad61-f584b2a0b41e'/>
                            <p style = {{fontSize:'14px'}}>Source :<a href = 'https://www.statista.com/statistics/591181/global-augmented-virtual-reality-market-size/'> ©Statista</a></p>
                            <p style = {{fontSize:'16px',lineHeight:'2',fontFamily:'Georgia'}}>        
                              Until then AR still feels like it's just breaking out its “1.0 stage” of gimmick applications that show off the just core tech like an AR measuring tape.
                              But this isn’t only a software driven progression. The hardware is something that will be driving the content that is provided on it . As of now
                              Microsoft Hololens and Magic Leap both are priced in the 5 figure range which I believe is still a hard value proposition for most consumers especially 
                              for ones who are maybe just curious about it.
                            </p>
                        </div>
                    </div>
                    <DiscussionEmbed shortname = {disqusShortname} config={disqusConfig}/>
                </div>
                    

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

export default compose(connect(mapStateToProps)) (ArExp)
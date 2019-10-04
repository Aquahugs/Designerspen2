import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';

import DocumentMeta from 'react-document-meta';

import { Desktop, Tablet, Mobile, Phone } from '../../shared';
import '../../shared/Post.css';
import '../../shared/Articles.css';

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
            title: '   How AI will impact the way we create. ',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'https://designerspen.com/Workflows',
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
                         How AI is changing the way we create. 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/patternbrain.jpg')}/>
                        
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
                        <p style = {{float:'right'}}>Date: 9/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%',paddingLeft:'15%', paddingRight:'15%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The childlike wonder of thinking of something in our heads and bringing it to life 
                            seemingly never gets old. We have all by now seen doomsday theory headlines  of “AI taking over the world” or 
                            how we will “all be out of jobs”.
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>As someone working in a creative oriented field it is easy to come to the conclusion
                             that Art is something that computers can never produce without assistance from humans. This is true to some extent however
                              we are slowly starting to see AI based tools maybe not completely replacing the way we create but definitely changing it . 
                              </p>
                        </div>
                    </div>

                    <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <p style = {{textAlign:'center'}}>“I Almost never get asked what's NOT going to change in the next 10 years?...<br/>> and that’s actually the more important of the two” -- Jeff Bezos, Amazon CEO </p>
                    </div>
                    </div>

                    
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}} >
                        <div className = ' col x12 m12 l12 '>
                            <h1>3D style transfer </h1>
                            <img  src = {require('../../../assets/images/Articles/2019/AiDesign/style transger.JPG')}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Style transfer is an interesting problem in Machine learning research that revolves around having 2 input images one for content and one for style. 
                            The output results in a reimagined content image with the style applied. Can this concept be pushed further ?
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The answer is yes it already has. Such style transfer techniques can also be done in 3D where you could have an artist apply his 
                            or her artistic style to a sphere which could then carry over to a complex piece of 3d geometry in real-time. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}}src = {require("../../../assets/images/Articles/2019/AiDesign/style transfer.gif")}/>
                          
                            <img style = {{height:'auto', width:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/style transfer2.gif')}/>
                           
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            You very quickly can
                            start to imagine the opportunities this opens for even novice artist to express their ideas in a sophisticated manner. Such techniques
                            are only possible due to extremely difficult advancements made in Neural-based approaches and more.
                            </p>
                            <p>Source paper of "Fast Example-Based Stylization with Local Guidance" is available <span ><a href = "https://dcgi.fel.cvut.cz/home/sykorad/styleblit.html ">HERE</a></span></p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12  '>
                            <h1>NVIDIA GUAGAN </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/nvguagan.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Someone picking up a paintbrush for the first time seeks to create landscapes,
                             mountains and their bold silhouettes. Days go by and the novice artist comes up with what 
                             looks like multi colored ink blobs. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture.JPG")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            No problem. A deep learning model developed by NVIDIA Research does pretty much the opposite. 
                            It has the ability to turn rough doodles into photorealistic masterpieces with absolute ease. 
                            This tool leverages Generative Adversarial Networks which rather than train a single neural network to 
                            recognize images, research train two competing networks , a generator and a discriminator .
                            </p>

                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture3.JPG")}/>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture4.JPG")}/>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             In layman terms you could think of this as the generator as someone who is trying to convince 
                             the discriminator that the counterfeit dollar bill it has is real. The discriminator in this particular 
                             situation is a master of dollar bills and has seen over a million images of dollar bills. This competition 
                             between the 2 networks happens extremely fast over and over until the discriminator can no longer tell if
                             the dollar bills the generator is producing are real or fake, hence the name GAN ( General Adversarial Networks).
                            </p>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture2.JPG")}/>
                                <p style = {{textAlign:'center'}}>“As of 2016, a rough rule of thumb is that a supervised deep learning algorithm will generally 
                                achieve acceptable performance with around 5,000 labeled examples per category, and will match or exceed human performance when 
                                trained with a dataset containing at least 10 million labeled examples.”  - Ian Goodfellow ( Director of Machine Learning at Apple)
                                </p>
                            </div>
                        </div>
                        <div className = 'col x12 m12 l12'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NKFrg9HMYaY" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I see tools as such not completely replacing concept artist but something that would tremendously speed up their creative 
                            process. You'd most likely still need basic fundamentals to achieve a good result, especially if you're painting over it
                            however it does allow for a massive increase in the amount of iterative ideas possible in a usually tight time frame . 
                            This potentially changes the notion of what tools to use when coming up with ideas.
                            </p> 
                            <p>Full paper on Semantic Image Synthesis with Spatially-Adaptive Normalization : <span> <a href = "https://arxiv.org/pdf/1903.07291.pdf">Here.</a></span>
                            <br/>Taesung Park1∗ Ming-Yu Liu2 Ting-Chun Wang2 Jun-Yan Zhu2,3 1UC Berkeley 2NVIDIA 3MIT CSAIL
                            </p>
                        </div>
                    </div>

                    <div className = 'row'  style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12 '>
                            <h1>Fusion 360 Generative design </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/generative design.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Even the world of design and manufacturing is experiencing rapid change due to these AI advancements.Autodesk 
                            has also started to offer generative design tools in fusion 360. Tell it the problem it needs to solve, 
                            then sit back and let the cloud generate a number of potential solutions. The real value of generative design is not the
                             geometry generated, but the data presented to make more informed decisions more quickly. Not just one incrementally better 
                             solution but a number of them.
                            </p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I am personally very excited to see what more creative design tools we will see emerge as the AI research field matures throughout time.
                            </p>
                        </div>
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
                         How AI is changing the way we create. 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/patternbrain.jpg')}/>
                        
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
                        <p style = {{float:'right'}}>Date: 9/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The childlike wonder of thinking of something in our heads and bringing it to life 
                            seemingly never gets old. We have all by now seen doomsday theory headlines  of “AI taking over the world” or 
                            how we will “all be out of jobs”.
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>As someone working in a creative oriented field it is easy to come to the conclusion
                             that Art is something that computers can never produce without assistance from humans. This is true to some extent however
                              we are slowly starting to see AI based tools maybe not completely replacing the way we create but definitely changing it . 
                              </p>
                        </div>
                    </div>

                    <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <p style = {{textAlign:'center'}}>“I Almost never get asked what's NOT going to change in the next 10 years?...<br/>> and that’s actually the more important of the two” -- Jeff Bezos, Amazon CEO </p>
                    </div>
                    </div>

                    
                    <div className = 'row'  >
                        <div className = ' col x12 m12 l12 '>
                            <h1>3D style transfer </h1>
                            <img  src = {require('../../../assets/images/Articles/2019/AiDesign/style transger.JPG')}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Style transfer is an interesting problem in Machine learning research that revolves around having 2 input images one for content and one for style. 
                            The output results in a reimagined content image with the style applied. Can this concept be pushed further ?
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The answer is yes it already has. Such style transfer techniques can also be done in 3D where you could have an artist apply his 
                            or her artistic style to a sphere which could then carry over to a complex piece of 3d geometry in real-time. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}}src = {require("../../../assets/images/Articles/2019/AiDesign/style transfer.gif")}/>
                          
                            <img style = {{height:'auto', width:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/style transfer2.gif')}/>
                           
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            You very quickly can
                            start to imagine the opportunities this opens for even novice artist to express their ideas in a sophisticated manner. Such techniques
                            are only possible due to extremely difficult advancements made in Neural-based approaches and more.
                            </p>
                            <p>Source paper of "Fast Example-Based Stylization with Local Guidance" is available <span ><a href = "https://dcgi.fel.cvut.cz/home/sykorad/styleblit.html ">HERE</a></span></p>
                        </div>
                    </div>

                    <div className = 'row' >
                        <div className = ' col x12 m12 l12  '>
                            <h1>NVIDIA GUAGAN </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/nvguagan.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Someone picking up a paintbrush for the first time seeks to create landscapes,
                             mountains and their bold silhouettes. Days go by and the novice artist comes up with what 
                             looks like multi colored ink blobs. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture.JPG")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            No problem. A deep learning model developed by NVIDIA Research does pretty much the opposite. 
                            It has the ability to turn rough doodles into photorealistic masterpieces with absolute ease. 
                            This tool leverages Generative Adversarial Networks which rather than train a single neural network to 
                            recognize images, research train two competing networks , a generator and a discriminator .
                            </p>

                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture3.JPG")}/>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture4.JPG")}/>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             In layman terms you could think of this as the generator as someone who is trying to convince 
                             the discriminator that the counterfeit dollar bill it has is real. The discriminator in this particular 
                             situation is a master of dollar bills and has seen over a million images of dollar bills. This competition 
                             between the 2 networks happens extremely fast over and over until the discriminator can no longer tell if
                             the dollar bills the generator is producing are real or fake, hence the name GAN ( General Adversarial Networks).
                            </p>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture2.JPG")}/>
                                <p style = {{textAlign:'center'}}>“As of 2016, a rough rule of thumb is that a supervised deep learning algorithm will generally 
                                achieve acceptable performance with around 5,000 labeled examples per category, and will match or exceed human performance when 
                                trained with a dataset containing at least 10 million labeled examples.”  - Ian Goodfellow ( Director of Machine Learning at Apple)
                                </p>
                            </div>
                        </div>
                        <div className = 'col x12 m12 l12'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NKFrg9HMYaY" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I see tools as such not completely replacing concept artist but something that would tremendously speed up their creative 
                            process. You'd most likely still need basic fundamentals to achieve a good result, especially if you're painting over it
                            however it does allow for a massive increase in the amount of iterative ideas possible in a usually tight time frame . 
                            This potentially changes the notion of what tools to use when coming up with ideas.
                            </p> 
                            <p>Full paper on Semantic Image Synthesis with Spatially-Adaptive Normalization : <span> <a href = "https://arxiv.org/pdf/1903.07291.pdf">Here.</a></span>
                            <br/>Taesung Park1∗ Ming-Yu Liu2 Ting-Chun Wang2 Jun-Yan Zhu2,3 1UC Berkeley 2NVIDIA 3MIT CSAIL
                            </p>
                        </div>
                    </div>

                    <div className = 'row' >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Fusion 360 Generative design </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/generative design.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Even the world of design and manufacturing is experiencing rapid change due to these AI advancements.Autodesk 
                            has also started to offer generative design tools in fusion 360. Tell it the problem it needs to solve, 
                            then sit back and let the cloud generate a number of potential solutions. The real value of generative design is not the
                             geometry generated, but the data presented to make more informed decisions more quickly. Not just one incrementally better 
                             solution but a number of them.
                            </p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I am personally very excited to see what more creative design tools we will see emerge as the AI research field matures throughout time.
                            </p>
                        </div>
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
                        <h1 style = {{fontSize:'34px'}}>
                         How AI is changing the way we create. 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/patternbrain.jpg')}/>
                        
                    </div>
                </div>
                
                 <div className ='row' >
                 <div className ='row' >
                    <div className = 'col s12 m12 l12' >
                        <ShareButtonsMobile/> 
                    </div>
                    </div>
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 9/8/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The childlike wonder of thinking of something in our heads and bringing it to life 
                            seemingly never gets old. We have all by now seen doomsday theory headlines  of “AI taking over the world” or 
                            how we will “all be out of jobs”.
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>As someone working in a creative oriented field it is easy to come to the conclusion
                             that Art is something that computers can never produce without assistance from humans. This is true to some extent however
                              we are slowly starting to see AI based tools maybe not completely replacing the way we create but definitely changing it . 
                              </p>
                        </div>
                    </div>

                    <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <p style = {{textAlign:'center'}}>“I Almost never get asked what's NOT going to change in the next 10 years?...<br/> and that’s actually the more important of the two” -- Jeff Bezos, Amazon CEO </p>
                    </div>
                    </div>

                    
                    <div className = 'row'  >
                        <div className = ' col x12 m12 l12 '>
                            <h1>3D style transfer </h1>
                            <img  src = {require('../../../assets/images/Articles/2019/AiDesign/style transger.JPG')}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Style transfer is an interesting problem in Machine learning research that revolves around having 2 input images one for content and one for style. 
                            The output results in a reimagined content image with the style applied. Can this concept be pushed further ?
                            </p>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            The answer is yes it already has. Such style transfer techniques can also be done in 3D where you could have an artist apply his 
                            or her artistic style to a sphere which could then carry over to a complex piece of 3d geometry in real-time. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}}src = {require("../../../assets/images/Articles/2019/AiDesign/style transfer.gif")}/>
                          
                            <img style = {{height:'auto', width:'100%'}} src = {require('../../../assets/images/Articles/2019/AiDesign/style transfer2.gif')}/>
                           
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            You very quickly can
                            start to imagine the opportunities this opens for even novice artist to express their ideas in a sophisticated manner. Such techniques
                            are only possible due to extremely difficult advancements made in Neural-based approaches and more.
                            </p>
                            <p>Source paper of "Fast Example-Based Stylization with Local Guidance" is available <span ><a href = "https://dcgi.fel.cvut.cz/home/sykorad/styleblit.html ">HERE</a></span></p>
                        </div>
                    </div>

                    <div className = 'row' >
                        <div className = ' col x12 m12 l12  '>
                            <h1>NVIDIA GUAGAN </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/nvguagan.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                Someone picking up a paintbrush for the first time seeks to create landscapes,
                             mountains and their bold silhouettes. Days go by and the novice artist comes up with what 
                             looks like multi colored ink blobs. 
                            </p>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture.JPG")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            No problem. A deep learning model developed by NVIDIA Research does pretty much the opposite. 
                            It has the ability to turn rough doodles into photorealistic masterpieces with absolute ease. 
                            This tool leverages Generative Adversarial Networks which rather than train a single neural network to 
                            recognize images, research train two competing networks , a generator and a discriminator .
                            </p>

                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture3.JPG")}/>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture4.JPG")}/>
                            <p  style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             In layman terms you could think of this as the generator as someone who is trying to convince 
                             the discriminator that the counterfeit dollar bill it has is real. The discriminator in this particular 
                             situation is a master of dollar bills and has seen over a million images of dollar bills. This competition 
                             between the 2 networks happens extremely fast over and over until the discriminator can no longer tell if
                             the dollar bills the generator is producing are real or fake, hence the name GAN ( General Adversarial Networks).
                            </p>
                        </div>
                        <div className = 'row'>
                            <div className = 'col x12 m12 l12'>
                                <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/Capture2.JPG")}/>
                                <p style = {{textAlign:'center'}}>“As of 2016, a rough rule of thumb is that a supervised deep learning algorithm will generally 
                                achieve acceptable performance with around 5,000 labeled examples per category, and will match or exceed human performance when 
                                trained with a dataset containing at least 10 million labeled examples.”  - Ian Goodfellow ( Director of Machine Learning at Apple)
                                </p>
                            </div>
                        </div>
                        <div className = 'col x12 m12 l12'>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/NKFrg9HMYaY" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I see tools as such not completely replacing concept artist but something that would tremendously speed up their creative 
                            process. You'd most likely still need basic fundamentals to achieve a good result, especially if you're painting over it
                            however it does allow for a massive increase in the amount of iterative ideas possible in a usually tight time frame . 
                            This potentially changes the notion of what tools to use when coming up with ideas.
                            </p> 
                            <p>Full paper on <span style = {{fontWeight:'bold'}}>Image Synthesis with Spatially-Adaptive Normalization</span> : <span> <a href = "https://arxiv.org/pdf/1903.07291.pdf">Here.</a></span>
                            <br/>Taesung Park1∗ Ming-Yu Liu2 Ting-Chun Wang2 Jun-Yan Zhu2,3 1UC Berkeley 2NVIDIA 3MIT CSAIL
                            </p>
                        </div>
                    </div>

                    <div className = 'row' >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Fusion 360 Generative design </h1>
                            <img style = {{height:'auto', width:'100%'}} src = {require("../../../assets/images/Articles/2019/AiDesign/generative design.gif")}/>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            Even the world of design and manufacturing is experiencing rapid change due to these AI advancements.Autodesk 
                            has also started to offer generative design tools in fusion 360. Tell it the problem it needs to solve, 
                            then sit back and let the cloud generate a number of potential solutions. The real value of generative design is not the
                             geometry generated, but the data presented to make more informed decisions more quickly. Not just one incrementally better 
                             solution but a number of them.
                            </p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            I am personally very excited to see what more creative design tools we will see emerge as the AI research field matures throughout time.
                            </p>
                        </div>
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
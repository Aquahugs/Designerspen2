import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {DiscussionEmbed} from 'disqus-react'
import Footer from '../../navbar/Footer';
import ShareButtons from '../../navbar/ShareButtons';
import ShareButtonsMobile from '../../navbar/ShareButtonsMobile';

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
            title: '   5 Creative workflow tools worth exploring in 2019 ',
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
                             5 Creative workflow tools worth exploring in 2019 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCover.jpg?alt=media&token=a9f95410-aaaa-40a7-ab0d-202f3648ab3d'/>
                        
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
                        <p style = {{float:'right'}}>Date: 4/21/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%',paddingLeft:'15%', paddingRight:'15%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                We’re slowly starting to realize now that the design process is a common language between most creative fields. 
                                Creating a common language between the presently disparate fields of Architecture, Industrial Design, Video games, or Animation 
                                for example, suggests that the industries themselves may begin to hybridize and learn from one another. 
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}} >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Blender</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FBlender.jpg?alt=media&token=a4d533b4-ab61-4924-85cf-4dd65d174ccf'/>
                            <p style = {{textAlign:'center'}}>Blender - <a href = 'https://www.blender.org/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            A 3d model is way more versatile than a sketch on paper. Blender is a free and open 
                            source 3D creation suite. It can be used for a ton of different task like modeling, rigging, animation, simulation,
                             rendering, compositing and motion tracking.  It has a polygonal based modeling tool which is an approach for
                              modeling objects by representing or approximating their surfaces using polygons. <br/>
                              
                              After a while your brain will then be able to interpret your sketches at a thumbnail stage into a quick 3D models and blender is a great tool for such thing.
                            </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12  '>
                            <h1>Cinema 4d + Octane Render</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCinema4DOctane.jpg?alt=media&token=22cb0798-6b69-4d2c-a395-f0a6ba60bd6a'/>
                            <p style = {{textAlign:'center'}}>Get Cinema 4D - <a href = 'https://www.maxon.net/en-us/'>Here</a> Octane Render - <a href = 'https://home.otoy.com/render/octane-render/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             Cinema 4D and Octane render engine are two tools that work very well together for quickly being able to visualize
                             your 3d creations at very high quality. As of now Keyshot is probably the most popular render engine for industrial design. However
                             Octane is a GPU based renderer and  It gives you a good selection of options to tweak and refine your model rendering . 
                             Cinema 4d  and Octane have tons of resources online to learn for free but if both of these programs are acquired legitimately they carry hefty price tags. 
                            </p>
                        </div>
                    </div>

                    <div className = 'row'  style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12 '>
                            <h1>Unreal Engine </h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FUnrealengine.jpg?alt=media&token=b91964d4-479c-446b-8f08-f71dfe026597'/>
                            <p style = {{textAlign:'center'}}>Unreal Engine-<a href = 'https://www.unrealengine.com/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             The lines across industries are blurring and companies behind the rendering engines for the most popular video 
                            games are now marketing their software directly to architects, Car Designers and Production Studios.Unreal is a free
                            game engine at the core but can also be the the holy grail of simulations, and visualizations.It can come in handy for showcasing environments or interactive 3D demos.
                             Also has tons of resources and tutorials online.
                            </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}} >
                        <div className = ' col x12 m12 l12  '>
                            <h1>Adobe XD</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FAdobe%20XD.jpg?alt=media&token=ac14e538-cac5-4453-a865-48fe9b2e9110'/>
                            <p style = {{textAlign:'center'}}>Adobe XD-<a href = 'https://www.adobe.com/products/xd.html'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>                           
	                            Designing UX workflow from research to design to prototype and handoff in Adobe XD is simple. It is based 
                                on a lot of Adobe conventions and feels like an appropriate fusion of adobe illustrator and Photoshop.If 
                                you work on a PC and are getting tired of everyone mentioning a popular streamlined vector graphic editor 
                                called Sketch, Adobe XD will be a nice sigh of relief. 
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
                             5 Creative workflow tools worth exploring in 2019 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCover.jpg?alt=media&token=a9f95410-aaaa-40a7-ab0d-202f3648ab3d'/>
                        
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
                        <p style = {{float:'right'}}>Date: 4/21/2019</p>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%',paddingLeft:'15%', paddingRight:'15%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                We’re slowly starting to realize now that the design process is a common language between most creative fields. 
                                Creating a common language between the presently disparate fields of Architecture, Industrial Design, Video games, or Animation 
                                for example, suggests that the industries themselves may begin to hybridize and learn from one another. 
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}} >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Blender</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FBlender.jpg?alt=media&token=a4d533b4-ab61-4924-85cf-4dd65d174ccf'/>
                            <p style = {{textAlign:'center'}}>Blender - <a href = 'https://www.blender.org/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            A 3d model is way more versatile than a sketch on paper. Blender is a free and open 
                            source 3D creation suite. It can be used for a ton of different task like modeling, rigging, animation, simulation,
                             rendering, compositing and motion tracking.  It has a polygonal based modeling tool which is an approach for
                              modeling objects by representing or approximating their surfaces using polygons. <br/>
                              
                              After a while your brain will then be able to interpret your sketches at a thumbnail stage into a quick 3D models and blender is a great tool for such thing.
                            </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12  '>
                            <h1>Cinema 4d + Octane Render</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCinema4DOctane.jpg?alt=media&token=22cb0798-6b69-4d2c-a395-f0a6ba60bd6a'/>
                            <p style = {{textAlign:'center'}}>Get Cinema 4D - <a href = 'https://www.maxon.net/en-us/'>Here</a> Octane Render - <a href = 'https://home.otoy.com/render/octane-render/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             Cinema 4D and Octane render engine are two tools that work very well together for quickly being able to visualize
                             your 3d creations at very high quality. As of now Keyshot is probably the most popular render engine for industrial design. However
                             Octane is a GPU based renderer and  It gives you a good selection of options to tweak and refine your model rendering . 
                             Cinema 4d  and Octane have tons of resources online to learn for free but if both of these programs are acquired legitimately they carry hefty price tags. 
                            </p>
                        </div>
                    </div>

                    <div className = 'row'  style = {{paddingLeft:'15%', paddingRight:'15%'}}>
                        <div className = ' col x12 m12 l12 '>
                            <h1>Unreal Engine </h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FUnrealengine.jpg?alt=media&token=b91964d4-479c-446b-8f08-f71dfe026597'/>
                            <p style = {{textAlign:'center'}}>Unreal Engine-<a href = 'https://www.unrealengine.com/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             The lines across industries are blurring and companies behind the rendering engines for the most popular video 
                            games are now marketing their software directly to architects, Car Designers and Production Studios.Unreal is a free
                            game engine at the core but can also be the the holy grail of simulations, and visualizations.It can come in handy for showcasing environments or interactive 3D demos.
                             Also has tons of resources and tutorials online.
                            </p>
                        </div>
                    </div>

                    <div className = 'row' style = {{paddingLeft:'15%', paddingRight:'15%'}} >
                        <div className = ' col x12 m12 l12  '>
                            <h1>Adobe XD</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FAdobe%20XD.jpg?alt=media&token=ac14e538-cac5-4453-a865-48fe9b2e9110'/>
                            <p style = {{textAlign:'center'}}>Adobe XD-<a href = 'https://www.adobe.com/products/xd.html'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>                           
	                            Designing UX workflow from research to design to prototype and handoff in Adobe XD is simple. It is based 
                                on a lot of Adobe conventions and feels like an appropriate fusion of adobe illustrator and Photoshop.If 
                                you work on a PC and are getting tired of everyone mentioning a popular streamlined vector graphic editor 
                                called Sketch, Adobe XD will be a nice sigh of relief. 
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
                        <h1>
                             5 Creative workflow tools worth exploring in 2019 
                        </h1>
                    </div>
                    
                </div>

                <div className = 'row'>
                    <div className = 'col x12 m12 l12'>
                        <img style = {{maxWidth:'100%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCover.jpg?alt=media&token=a9f95410-aaaa-40a7-ab0d-202f3648ab3d'/>
                        
                    </div>
                </div>
                
                 <div className ='row' >
                    <div className = 'col s4 m6 l6' style = {{paddingRight:'15%'}} >
                        <p style = {{float:'right'}}>Date: 4/21/2019</p>
                    </div>
                    <div className ='row' >
                            <div className = 'col s12 m12 l12' >
                                <ShareButtonsMobile/> 
                            </div>
                    </div>
                  
                    
                 
                    
                    <div className = "row" style = {{paddingTop:'10%'}}>
                        <div  className = 'col x12 m12 l12'>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                                We’re slowly starting to realize now that the design process is a common language between most creative fields. 
                                Creating a common language between the presently disparate fields of Architecture, Industrial Design, Video games, or Animation 
                                for example, suggests that the industries themselves may begin to hybridize and learn from one another. 
                            </p>
                        </div>
                    </div>

                    
                    <div className = 'row' >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Blender</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FBlender.jpg?alt=media&token=a4d533b4-ab61-4924-85cf-4dd65d174ccf'/>
                            <p style = {{textAlign:'center'}}>Blender - <a href = 'https://www.blender.org/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                            A 3d model is way more versatile than a sketch on paper. Blender is a free and open 
                            source 3D creation suite. It can be used for a ton of different task like modeling, rigging, animation, simulation,
                             rendering, compositing and motion tracking.  It has a polygonal based modeling tool which is an approach for
                              modeling objects by representing or approximating their surfaces using polygons. <br/>
                              
                              After a while your brain will then be able to interpret your sketches at a thumbnail stage into a quick 3D models and blender is a great tool for such thing.
                            </p>
                        </div>
                    </div>

                    <div className = 'row'>
                        <div className = ' col x12 m12 l12  '>
                            <h1>Cinema 4d + Octane Render</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FCinema4DOctane.jpg?alt=media&token=22cb0798-6b69-4d2c-a395-f0a6ba60bd6a'/>
                            <p style = {{textAlign:'center'}}>Get Cinema 4D - <a href = 'https://www.maxon.net/en-us/'>Here</a> Octane Render - <a href = 'https://home.otoy.com/render/octane-render/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             Cinema 4D and Octane render engine are two tools that work very well together for quickly being able to visualize
                             your 3d creations at very high quality. As of now Keyshot is probably the most popular render engine for industrial design. However
                             Octane is a GPU based renderer and  It gives you a good selection of options to tweak and refine your model rendering . 
                             Cinema 4d  and Octane have tons of resources online to learn for free but if both of these programs are acquired legitimately they carry hefty price tags. 
                            </p>
                        </div>
                    </div>

                    <div className = 'row'  >
                        <div className = ' col x12 m12 l12 '>
                            <h1>Unreal Engine </h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FUnrealengine.jpg?alt=media&token=b91964d4-479c-446b-8f08-f71dfe026597'/>
                            <p style = {{textAlign:'center'}}>Unreal Engine-<a href = 'https://www.unrealengine.com/'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>
                             The lines across industries are blurring and companies behind the rendering engines for the most popular video 
                            games are now marketing their software directly to architects, Car Designers and Production Studios.Unreal is a free
                            game engine at the core but can also be the the holy grail of simulations, and visualizations.It can come in handy for showcasing environments or interactive 3D demos.
                             Also has tons of resources and tutorials online.
                            </p>
                        </div>
                    </div>

                    <div className = 'row'  >
                        <div className = ' col x12 m12 l12  '>
                            <h1>Adobe XD</h1>
                            <img  src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/Articles%2FWorkFlow%2FAdobe%20XD.jpg?alt=media&token=ac14e538-cac5-4453-a865-48fe9b2e9110'/>
                            <p style = {{textAlign:'center'}}>Adobe XD-<a href = 'https://www.adobe.com/products/xd.html'>Here</a></p>
                            <p style = {{fontSize:'22px',lineHeight:'2',fontFamily:'Georgia'}}>                           
	                            Designing UX workflow from research to design to prototype and handoff in Adobe XD is simple. It is based 
                                on a lot of Adobe conventions and feels like an appropriate fusion of adobe illustrator and Photoshop.If 
                                you work on a PC and are getting tired of everyone mentioning a popular streamlined vector graphic editor 
                                called Sketch, Adobe XD will be a nice sigh of relief. 
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
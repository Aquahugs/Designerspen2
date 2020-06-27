import React, {Component} from 'react';
import { Desktop, Tablet, Mobile, Phone } from './shared';



// import Footer from '../navbar/Footer';






class CurratorSignup extends Component {
    render(){
        
        const styles1 = {
            paddingTop:'3%'
            
        }
        const title1 = {
            color:'white',
            textAlight:'center',
            margin:'0',
            padding:'1%',
            textAlign:'center'
            
        }
        const title2 = {
            color:'#a3a3a3',
            textAlight:'center',
            margin:'0',
            paddingTop:'10%',
            textAlign:'center',
            fontSize:'12px',
            fontWeight:'light'
        }

        const bodytext = {
            color: '#e9e9e9',
            textAlign:'center',
            margin:'0', 
            paddingLeft:'200px',
            paddingRight:'200px',
            fontSize:'42px' 
        }
        const bodytext2 = {
            color: '#b5b5b5',
            textAlign:'center',
            margin:'0', 
            paddingLeft:'200px',
            paddingRight:'200px',
            fontSize:'28px' 
        }

        const GeaButton = {
            backgroundColor: 'white',
            border: 'none',
            color: '#191919',
            padding: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inlineblock',
            fontSize: '16px',
            margin: '4px 2px',
            borderRadius: '50px',
            cursor: 'pointer',
            

        }
        const BacButton = {
            backgroundColor: 'transparent',
            border: 'solid white 4px',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inlineblock',
            fontSize: '16px',
            margin: '4px 2px',
            borderRadius: '50px',
            cursor: 'pointer',
        }

        const buttonRow = {

            display: 'flex',
            alignTtems: 'center',
            justifyContent: 'center'
            
        }

        const list1 = {
            color:'white',
            display:'inline',
            backgroundColor:'#242424',
            marginRight:'5%',
            paddingLeft:'25px',
            paddingRight:'25px',
            paddingTop:'15px',
            paddingBottom:'15px',
            textAlign:'center'
            
        }
    
        return(
            
            <div style = {{backgroundColor:'black',margin:'0'}}   >
                <div >
                        <h2 style = {title2}>Project Archive</h2>
                  
                        <p style = {bodytext}>The mission of Project Archive is to preserve meaningful 
                         content around the web by empowering world class curators.</p>
                          <div style = {{textAlign:'center',paddingTop:'65px',paddingBottom:'65px'}}>
                            <ul style = {{display: 'inline-block',margin:'aut0',padding:'0',display:'inline'}}>
                                <li style = {list1}>Human-Currated</li>
                                <li style = {list1}>Community-driven</li>
                                <li style = {list1}>No-ads</li>
                            </ul>
                          </div>
                          
                        <p style = {bodytext2}>In the era of exponential content growth, <span style = {{fontWeight:'bold'}}>curators are the most undervalued elements of today's internet ecosystem. </span> 
                         But I believe their emerging role will be crucial to keep the web vital, generous and diverse.
                        </p>
                        <div >
                        </div> 
                </div>
            </div>
        )
    }
}


export default CurratorSignup
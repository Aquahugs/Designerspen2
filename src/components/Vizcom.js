import React, {Component} from 'react';
import { Desktop, Tablet, Mobile, Phone } from './shared';



// import Footer from '../navbar/Footer';






class Vizcom extends Component {
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
              <h1>test</h1>
            </div>
        )
    }
}


export default Vizcom
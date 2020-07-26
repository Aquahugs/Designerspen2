import React, {Component} from 'react';



import Footer from '../navbar/Footer';






class About extends Component {
    render(){
       
    
        return(
            
            <div>
                <div className='  container'>
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                        <img style = {{paddingTop:'10%',display:'block',marginLeft:'auto',marginRight:'auto',width:'5%'}} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/Logo.png?alt=media&token=3b622bc9-c520-4a6a-82c3-fd5383b7d5e8'/>
                          <p>Feeding your curiosity with Art and Design</p>
                          <p style = {{padding:'0'}}>Mountain View, California</p>
                          <p style = {{paddingBottom:'45%',paddingTop:'15%'}}>Check out : <a href = "https://www.designerspen.com/Aboutvizcom ">Project Vizcom</a></p>
                          <p >Email: Contact@designerspen.com </p>
                          <a href= ' https://www.instagram.com/designerspen/'><img style = {{paddingBottom:'45%',display:'block',marginLeft:'auto',marginRight:'auto',width:'3%'}} src = "https://firebasestorage.googleapis.com/v0/b/designerspen-95f24.appspot.com/o/icon_insta.png?alt=media&token=0d57bb59-06b1-45bb-b885-8d19114c06cf"/></a>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}


export default About
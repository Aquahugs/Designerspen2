import React, {Component} from 'react';



import Footer from '../navbar/Footer';






class About extends Component {
    render(){
       
    
        return(
            
            <div>
                <div className='  container'>
                    <div className = 'row'>
                        <div className = 'col x12 m12 l12'>
                          <h1 style = {{paddingTop:'10%'}}>About</h1>
                          <p>Started in 2016 in Detroit Michigan. Now based out of California Bay Area.</p>
                          <p>Email: Designerspenmail@gmail.com </p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}


export default About
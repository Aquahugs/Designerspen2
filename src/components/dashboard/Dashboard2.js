import React, {Component} from 'react';
import Notifications from './Notifications';
import Articles from '../project/Articles';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Footer from '../navbar/Footer';
import {Link} from 'react-router-dom'





class Home extends Component {
    render(){
        console.log(this.props.auth.displayName);
        console.log(this.props.auth.uid)
        
        const {projects,auth, notifications} = this.props;
        //if(!auth.uid) return <Redirect to='/signin'/>

      

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
            paddingTop:'5%',
            textAlign:'center',
            fontSize:'12px',
            fontWeight:'light'
        }

        const bodytext = {
            color: '#e9e9e9',
            textAlign:'center',
            margin:'0', 
            padding:'5px' 
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
        
        return(
                
          
                <div style = {{backgroundColor:'black',margin:'0'}}   >
                    <div>
                        {/* <h2 style = {title2}>Introducing</h2>
                        <h1 style = {title1}>Archives</h1>
                        <p style = {bodytext}>Feed your curiosity and make better sense of the world through 
                        carefully-curated archives that matter to you.</p>
                        <div className = 'row' style = {buttonRow}>
                        <button  style = {GeaButton}>Get Early Access</button>
                        <button  style = {BacButton}>Become a Currator</button> 
                        </div>
                       

                        <div >
                        </div>  */}
                     
                        <Articles/>
                    </div>
                    <Footer/>
                </div>         
            
        )
    }
}

//<div className = 'col s12 m5 offset-m1'> 
//<Notifications notifications={notifications}/>
//</div>

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects, // Grab from firestore instead of dummy data state.project.projects
        auth:state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//Compose is used when you want to pass multiple store enhancers to the store.
//func1(func2(func3(func4))))
//we could just write
//compose(func1, func2, func3, func4)

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects', orderBy:['createdAt','desc']},
        {collection: 'notifications', limit:3,orderBy:['time','desc']} // limit the amount of notifications shown 
    ])
)(Home)
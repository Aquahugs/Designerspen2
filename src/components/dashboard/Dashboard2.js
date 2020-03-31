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

        
        return(
                
          
                <div style = {{backgroundColor:'black',margin:'0'}}   >
                    <div>
                        <div >
                            {/* <div className = 'card-content grey-text text-darken-3'>
                                <div className = 'card-image z-depth-2'>
                                <Link to="/AiDesign"><img src={require('../../assets/images/Articles/2019/AiDesign/patternbrain.jpg')}/></Link>
                                </div>
                                <span className = "card-title"><h1 style = {{fontSize:'35px'}}>How AI is changing the way we create. </h1></span>
                                <p></p>
                                <p className = "grey-text"> 9/8/2019  </p>
                            </div> */}
                        </div> 
                        
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
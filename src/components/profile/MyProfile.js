import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios'
import './Profile.scss'
import Tabs from './Tabs'

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state= {  
            images :[],
            photoURL: props.auth.photoURL,
            displayName:props.auth.displayName,
            uuid: props.match.params.uuid,
            isLoaded:false,
            isLoggedIn: props.auth.uid,
            isMe:false,
            isEdit:false,
            info:[],
            userCollection:[],
            bio:[],
            newbio:''
        }
    }
    
    
   
    componentDidMount() {
        // M.Tabs.init(this.Tabs);
        const {uuid} = this.state
        Promise.all([
            fetch(`http://localhost:3001/profileimages/:uuid?uuid=${(uuid)}`, {
            method: "GET",
            headers: {'Content-Type':'application/json'}  
            }),
            fetch(`http://localhost:3001/collection/:uuid?uuid=${(uuid)}`, {
                method: "GET",
                headers: {'Content-Type':'application/json'}  
            }),
            fetch(`http://localhost:3001/bio/:uuid?uuid=${(uuid)}`, {
                method: "GET",
                headers: {'Content-Type':'application/json'}  
            })
        ])
        
        .then(([res1, res2,res3]) => Promise.all([res1.json(), res2.json(),res3.json()]))
        .then(([data1,data2,data3]) => this.setState({
            info:data1,
            userCollection:data2,
            bio: data3,
            isLoaded:true
        }))
    
        console.log(this.props)
    
    }

    onSubmit = (e) => {
        // event to submit the data to the server
        e.preventDefault();
        const {newbio} = this.state;
        const {uuid} = this.props.match.params.uuid
        
        let formData = new FormData();        
        formData.append('newbio', newbio);
        
        fetch(`http://localhost:3001/editbio?bio=${newbio}&uuid=${this.props.match.params.uuid}`)
            .then((result) => {
            // access results...
            console.log(result)
        });
    }

    onChange = (e) => {
        // event to update state when form inputs change
        switch (e.target.name) {
            case 'selectedFile':
              this.setState({ selectedFile: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
          console.log(this.state)
    }
      
    onEdit = () => {
        this.setState({isEdit:true});
    }

    render () {

        const {bio } = this.state
         if (this.state.isLoaded === false) return null; 
        

    console.log(this.state)
    console.log(this.props.auth.uid)
    console.log(this.props.match)
    console.log(this.props)


    
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (this.props.match.params.uuid === this.props.auth.uid) {
        button = <p>this is my profile</p>;
      } else {
        button = <p>this is not my profile</p>;
      }
    if (this.props.match.params.uuid === this.props.auth.uid)
    return (


        //somewhere in here project.selectedFile
        //MYPROFILE
    <div className = 'container' style = {{paddingTop:'10%'}}>
        <div className = "row ">
            <div className = 'col s12 m12 l12 profile-info'>
            <button type="button"  onClick={e => this.setState({isEdit:true},console.log(this.state))} >Edit Profile</button>
                <img src = {this.props.auth.photoURL}/>
                <h2>{this.props.auth.displayName}</h2>
                <p>{this.state.bio.data[0].bio}</p>
                <p>{this.state.newbio}</p>

                 {/* <p>{this.state.uuid}</p>  */}
                 {/* edit your bio input form  */}
            <form onSubmit={this.onSubmit}> 
                <input
                   style={{ visibility: this.state.isEdit ? 'visible': 'hidden'}}
                    type="text"
                    name="newbio"
                    onChange={this.onChange}
                    placeholder="Tell em about yourself champ"
                     />
                <button type="submit" onClick={e => this.setState({isEdit:false},console.log(this.state))}>Submit</button>
            </form> 
            </div>
           
            <Tabs 
            uuid = {this.state}
            />
        </div>   
        
    </div>
    )   
else{
  return ( 
      //somewhere in here project.selectedFile
      //OTHER USERS PROFILE
      <div className = 'container  ' style = {{paddingTop:'10%'}}>
          <img style = {{maxWidth:"55px"}} src = {this.state.info.data[0].userphotourl}/>
          <h1>{this.state.info.data[0].displayname}'s</h1> 
        <Tabs uuid = {this.state}/>
     </div>
     ) 
}

}
}

const mapStateToProps = (state,ownProps) => {
    console.log(state)
    const uid = ownProps.match.params.uid;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[uid] : null //projects is just an object with the diffrent properties 
    return {
        project:project,
        auth: state.firebase.auth
        
    }
}
export default compose(
    connect(mapStateToProps)
)(MyProfile)
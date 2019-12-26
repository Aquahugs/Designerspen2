import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state =  {
            props:props
        }
    }
    componentDidMount(){
        M.Tabs.init(this.Tabs);
        console.log(this.state)
    }
   render() {
    // let button;
    // if (this.state.props.match.params.uuid === this.state.props.auth.uid) {
    //     button = <p>this is my profile</p>;
    //   } else {
    //     button = <p>this is not my profile</p>;
    //   }
    // if (this.state.props.match.params.uuid === this.state.props.auth.uid)
    return (
      <>
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
        >
          <li className="tab col s3">
            <a href="#test-swipe-1">Post</a>
          </li>
          <li className="tab col s3">
            <a href="#test-swipe-2">Collection</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col s12 ">
        <div  className = 'row'>  
      
            {this.state.props.uuid.info.data.map(function (n) { 
                function handleClick() {
                    const imagelink = n.imageUrl
                    fetch('http://localhost:3001/profile/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({imagelink})
                    })
                    .then((result) => {
                        // access results...
                        console.log(result)
                    });
                    }
                    
            return (
                <div className = 'col s3 m3 l3'  key={n}>
                <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
                <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                <p>{n.description}</p>
                {/* {button}   */}
                </div>
                );
            })}
        </div>
        </div>
        <div id="test-swipe-2" className="col s12 ">
        <div className = "row">
        {this.state.props.uuid.userCollection.data.map(function (n) { 
                    function handleClick() {
                    const imagelink = n.imageUrl
                    fetch('http://localhost:3001/profile/delete', {
                        method: 'DELETE',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({imagelink})
                        })
                        .then((result) => {
                            // access results...
                            console.log(result)
                        });
                    }
                return (
                    <div  className = 'col s3 m3 l3'  key={n}>
                        <img style = {{maxWidth:"100%"}}src = {n.post_id}/>
                        <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
                    <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
                    <p>{n.description}</p> 
                        <p>THIS IS COLLECTED</p>
                    </div>
                );
                })}
        </div>
        </div>
        
      </>
    );
    // else{
    //     return ( 
    //         //somewhere in here project.selectedFile
    //         //OTHER USERS PROFILE
    //         <div className = 'container' style = {{paddingTop:'10%'}}>
              
              
    //         <h1>{this.state.info.data[0].displayname}'s stuff</h1> 
    //         <div  className = 'row'>  
            
    //             {this.state.info.data.map(function (n) { 
    //                 function handleClick() {
    //                    const imagelink = n.imageUrl
    //                    fetch('http://localhost:3001/profile/delete', {
    //                     method: 'DELETE',
    //                     headers: {
    //                       'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify({imagelink})
    //                     })
    //                     .then((result) => {
    //                         // access results...
    //                         console.log(result)
    //                     });
    //                   }
                      
    //             return (
    //                 <div className = 'col s3 m3 l3'  key={n}>
    //                 <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/> 
    //                 <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
    //                 <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
    //                 <p>{n.description}</p>
    //                 {button} 
    //                 </div>
    //               );
    //             })}
    //         </div> 
    //     </div>) 
    //   }
      
    }
  }




export default Tabs;
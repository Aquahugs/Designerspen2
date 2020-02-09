import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Popup from "reactjs-popup";
import './Profile.scss'



class Tabs extends Component {
    constructor(props){
        super(props);
        this.state =  {
            props:props
        }
    }
    componentDidMount(){
        M.Tabs.init(this.Tabs);
        console.log(this.state.props.uuid.uuid)
        console.log(this.state)
        console.log(this.props)
    }

    onRemoveCollect = _ => {  
      
  }
   render() {
    let deleteButton;
    
    if (this.state.props.uuid.uuid === this.state.props.uuid.isLoggedIn) {
        // button = <button onClick = {this.handleClick}>delete</button>
        deleteButton = {
          display:'inlineblock'
        }
      } else {
        deleteButton = {
         display:'none'
        }
      }
    // if (this.state.props.uuid  === this.state.props.isLoggedIn)
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
            <a href="#test-swipe-1">Images</a>
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
              // Images
              <div className = 'col s3 m3 l3'  key={n}  style ={{padding:'0.75%'}}>
                <img style = {{maxWidth:"100%"}}src = {n.imageUrl}/>
                <div  style = {{backgroundColor:'white',padding:'2%'}}> 
                  <img style = {{maxWidth:"25px",float:'left'}} src = {n.userphotourl}/> 
                  <a href={"http://localhost:3000/users/" + n.uuid} > <p style = {{float:'left'}}>{n.displayname}:</p> </a>
                  <p>{n.description}</p>
                  <Popup
                    trigger={<img style = {deleteButton} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/TDOT3.png?alt=media&token=551b1b80-55bc-4a14-906e-fb0bdc044615' className="button"/>}
                    position="bottom center"
                    on="hover"
                  >
                    
                    <button class="remove-button waves-effect waves-teal btn-flat" style = {deleteButton} onClick={handleClick}>remove</button>
                  </Popup>
                </div>
                {/* {button} */}
              </div>
              );
            })}
        </div>
        </div>

        {/* Collection */}
        <div id="test-swipe-2" className="col s12 ">
        <div className = "row">
        {this.state.props.uuid.userCollection.data.map(function (n) { 
           
           function onRemoveCollect() {
      
            fetch(`http://localhost:3001/removecollectpost?uuid=${n.uuid}&post_id=${n.post_id}`)
            .then(console.log("this worked stuff REMOVED"),console.log(n))
            .catch (err => console.err(err))
            
          }
          return (
            <div  className = 'col s3 m3 l3'  key={n}>
                <img style = {{maxWidth:"100%"}}src = {n.post_id}/>
                <img style = {{maxWidth:"25px"}} src = {n.userphotourl}/> 
            <a href={"http://localhost:3000/users/" + n.uuid} > <p>{n.displayname}</p> </a>
            <p>{n.description}</p> 
                <Popup
                    trigger={<img style = {deleteButton} src = 'https://firebasestorage.googleapis.com/v0/b/designerspen2.appspot.com/o/TDOT3.png?alt=media&token=551b1b80-55bc-4a14-906e-fb0bdc044615' className="button"/>}
                    position="bottom center"
                    on="hover"
                  >
                    
                  <button className="remove-button waves-effect waves-teal btn-flat" style = {deleteButton} onClick={onRemoveCollect}>remove</button>
                </Popup>
                
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
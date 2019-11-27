import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import  './Inspiration.scss'
import axios from 'axios';




class Inspiration extends Component {

    constructor(props){
        super(props);
        this.state= {
            items :[],
            users:[],
            description: '',
            selectedFile: '',
            isLoaded: false,
            loadPost:false,
            product: {
                username:'',
                email:'',
                password:''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
      }

      onSubmit = (e) => {
        // event to submit the data to the server
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();

        formData.append('description', description);
        formData.append('selectedFile', selectedFile);

        axios.post('//localhost:4000/userimages', formData)
            .then((result) => {
            // access results...
            });
      }
    

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        //  window.onscroll = function() {
        //      if(window.pageYOffset >= 1000) {
        //           console.log("poopty scoop")
        //           this.setState({
        //             loadPost:true,
        //           })
        //          }
        //          window.onscroll = null;
                 
        //      }
         Promise.all([
             fetch('http://localhost:4000/users'),
             fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&offset=52&format=text')
         ])
         .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
         .then(([data1, data2]) => this.setState({
             isLoaded:true,
             users:data1,
             items2:data2
         }));
    }
    
    handleScroll(event) {
        if(window.pageYOffset <= 1000) {
            console.log ("correct")
            
        }
      }

      handleSubmit(event){ 
        event.preventDefault();
        fetch('http://localhost:4000/users/add', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
            "username": this.username.value,
            "email":this.email.value,
            "password":this.password.value
       })
        });
       };

       addProduct = _ => {
            const {product} = this.state;
            fetch(`http://localhost:4000/users/add?username=${product.name}&email=${product.email}&password=${product.password}`)
            .then(console.log("this worked stuff submitted"))
            .catch (err => console.err(err))
       }


    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
        const {users,product} = this.state 
        const { description, selectedFile } = this.state;

       
        


        // Authenticate via OAuth
        // var tumblr = require('tumblr.js');
        // var client = tumblr.createClient({
        // consumer_key: 'TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y',
        // consumer_secret: 'WEhOmhBDd3RmRivsYTjUXlnwFeDKrO3DNZC30BnwIr2K8i89MA',
        // token: '6fKeGciBfovmWd8sYm71573fLOa1tox6DRtTFezhIMQ9Dbi9Zv',
        // token_secret: 'lZy70AZwHJiVVKZFrT2RCK6ifG3o1W7t1PFOlmSUt6klvbsi6u'
        // });
        // client.userInfo(function(err, data) {
        //     data.user.blogs.forEach(function(blog) {
                
        //     //   console.log(blog.name);
        //     //   console.log(blog);
        //     //   console.log(isLoaded)
              
        //     });
        //   });
          console.log(users)  
          console.log(loadPost)
          console.log( this.state.users.data)
          console.log(this.state.selectedFile)
          console.log(this.state.description)
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        
        else{

            const headerStyle = {
                margin: '0',
                paddingTop:'50px'
              }
              const linerStyle = {
                  margin:'0',
                  fontSize: '12px'
              }

              const hoverImages = {
                maxWidth:'350px',
                paddingLeft:"2%",
                height:'auto',
              }

              
            
        return(   

            <div style = {{padding:"5%"}}>
                <h1 style = {headerStyle}>Get Inspired</h1>
                <p style = {linerStyle}>A visual stream of Inspiration</p>
                <div> {
                 this.state.users.data.map((names,i) =>
                 <h1>{names.username}</h1>  
                    )
                }
                </div>
                <div>
                {/* <div>{
                    this.state.items2.response.posts.map((blogImages,i) => 
                    <img  className = "images" style = {hoverImages} src = {blogImages.photos[0].original_size.url}/>
                    )
                }</div>  */}
                
                </div>
                <div id="signup">
                {/* <form onSubmit={this.handleSubmit}>
                    <input ref={(ref) => {this.username = ref}} placeholder="First Name" type="text" name="username"/><br />
                    <input ref={(ref) => {this.email = ref}} placeholder="Email" type="text" name="email"/><br />
                    <input ref={(ref) => {this.pa = ref}} placeholder="Email" type="text" name="password"/><br />

                <button type="Submit">Start</button>
                </form> */}
                <input value = {product.name}
                       onChange={e => this.setState({product: {...product, name: e.target.value}})}/>
                <input value = {product.email} 
                       onChange={e => this.setState({product: {...product, email: e.target.value}})}/>
                <input value = {product.password} 
                       onChange={e => this.setState({product: {...product, password: e.target.value}})}/>
                <button onClick = {this.addProduct}>Submit this stuff</button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                    />
                    <input
                    type="file"
                    name="selectedFile"
                    onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                 </form>

            </div>
        )
        }
    }
}


export default Inspiration;
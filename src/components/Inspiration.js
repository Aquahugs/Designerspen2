import React, {Component} from 'react';
import NavBar from './navbar/NavBar';





class Inspiration extends Component {

    constructor(props){
        super(props);
        this.state= {
            items :[],
            isLoaded: false,
            loadPost:false
         
        }
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
             fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&format=text'),
             fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&offset=52&format=text')
         ])
         .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
         .then(([data1, data2]) => this.setState({
             isLoaded:true,
             items:data1,
             items2:data2
         }));
    }
    
    handleScroll(event) {
        if(window.pageYOffset <= 1000) {
            console.log ("correct")
            
        }
        
      }

    
    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state
        const loadPost = this.state
       
        


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
          console.log(items)  
          console.log(loadPost)
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
            console.log(items.response.posts)

            const headerStyle = {
                margin: '0',
                paddingTop:'10px'
              }
              const linerStyle = {
                  margin:'0',
                  fontSize: '0.8vw'
              }

            
        return(   
            
            <div style = {{padding:"5%"}}>
                <h1 style = {headerStyle}>Get Inspired</h1>
                <p style = {linerStyle}>A visual stream of Inspiration</p>
                <a href = "https://chrome.google.com/webstore/detail/imagus/immpkjjlgappgfkkfieppnmlhakdmaab?hl=en"><p>For the best viewing experience on desktop</p></a>
                <div>
                    {
                        this.state.items.response.posts.map((blogImages,i) => 
                        <img style = {{maxWidth:'350px',paddingLeft:"2%",height:'auto'}}src = {blogImages.photos[0].original_size.url}/>
                        )
                    }
                </div>
                <div>
                {loadPost ? <div>{
                    this.state.items2.response.posts.map((blogImages,i) => 
                    <img style = {{maxWidth:'350px',paddingLeft:"2%",height:'auto'}}src = {blogImages.photos[0].original_size.url}/>
                    )
                }</div> : 'not'}
                
                </div>

            </div>
        )
        }
    }
}


export default Inspiration;
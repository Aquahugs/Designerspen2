import React, {Component} from 'react';





class Inspiration extends Component {


    

    componentDidMount() {
        fetch('http://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts?api_key=TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y&limit=50&format=text')
            
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items: json,
                })
            })
    }
    constructor(props){
        super(props);
        this.state= {
            items :[],
            isLoaded: false,
        }
    }

    render(){
        var { isLoaded,items} = this.state;
        const {items} = this.state

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
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
            console.log(items.response.posts)
        return(   
            
            <div style = {{padding:"5%"}}>
                <h1 style = {{paddingTop:'140px'}}>Get Inspired</h1>
                <a href = "https://chrome.google.com/webstore/detail/imagus/immpkjjlgappgfkkfieppnmlhakdmaab?hl=en"><p>For the best viewing experience on desktop</p></a>
                <div>
                    {
                        this.state.items.response.posts.map((blogImages,i) => 
                        
                            <img style = {{maxWidth:'350px',paddingLeft:"2%",height:'auto'}}src = {blogImages.photos[0].original_size.url}/>
                       
                        )
                    }
                </div>

            </div>
        )
        }
    }
}


export default Inspiration;
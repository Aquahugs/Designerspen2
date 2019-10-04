import React, {Component} from 'react';





class Inspiration extends Component {


    constructor(props){
        super(props);
        this.state= {
            items :[],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.tumblr.com/v2/blog/designerspen.tumblr.com/posts/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items: json,
                })
            })
    }

    render(){
        var { isLoaded,items} = this.state;

        // Authenticate via OAuth
        var tumblr = require('tumblr.js');
        var client = tumblr.createClient({
        consumer_key: 'TAdFdj2jjYcaIm47BF3JSMsmcrdtiD1qXCWinlXakycsTC0l9y',
        consumer_secret: 'WEhOmhBDd3RmRivsYTjUXlnwFeDKrO3DNZC30BnwIr2K8i89MA',
        token: '6fKeGciBfovmWd8sYm71573fLOa1tox6DRtTFezhIMQ9Dbi9Zv',
        token_secret: 'lZy70AZwHJiVVKZFrT2RCK6ifG3o1W7t1PFOlmSUt6klvbsi6u'
        });
        client.userInfo(function(err, data) {
            data.user.blogs.forEach(function(blog) {
              console.log(blog.name);
              console.log(blog);
            });
          });
          console.log(items)
         
          

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{

        return(
            
            
            <div>
                <ul>
                    {/* {items.map(item =>(
                        <li key = {item.id}>
                           {<img src = {item.post}/>}
                        </li>
                    ))}; */}
                </ul>
            </div>
        )

        }
    }
}


export default Inspiration;
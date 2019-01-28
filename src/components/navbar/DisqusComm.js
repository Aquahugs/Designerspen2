import React, { Component } from 'react';



const DisqusComm = ()=>{
        return (
            <div id="disqus_thread"></div> 
            
        )
            
        var disqus_config = function () {
        this.page.url ="";  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = ""; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        

        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://designerspen2.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        
        

}

    
export default (DisqusComm)
import React, { Component } from 'react';

import { ShareButtonRectangle,ShareBlockAside,ShareButtonRoundSquare  } from 'react-custom-share';

// import emotion
import { css } from 'emotion';

// import icons
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';


const ShareButtons = ()=>{


const shareBlockProps = {
    url: 'https://mywebsite.com/page-to-share/',
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - mywebsite.com `,
    longtext: `Take a look at this super website I have just found.`,
  };
     
    return (
        <div>
            <ShareBlockAside   {...shareBlockProps} />
                        
        </div>
    )


}

    
export default (ShareButtons)
import React, { Component } from 'react';

import { ShareButtonRectangle,ShareBlockAside,ShareButtonRoundSquare  } from 'react-custom-share';

// import emotion
import { css } from 'emotion';

// import icons
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

 class ShareButtons extends React.Component{
render() {

    console.log(this.props)

    const  articleurl = window.location.href
    const shareBlockProps = {
        url: articleurl,
        button: ShareButtonRectangle,
        buttons: [
        { network: 'Twitter', icon: FaTwitter },
        { network: 'Facebook', icon: FaFacebook },
        { network: 'Pinterest', icon: FaPinterest, media: this.props.image },
        { network: 'Linkedin', icon: FaLinkedin },
        ],
        text: this.props.text,
        longtext: this.props.longtext, 
    };
        
        return (
            <div>
                <ShareBlockAside   {...shareBlockProps} />
                            
            </div>
        )

    }
}

    
export default (ShareButtons)
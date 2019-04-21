import React, {Component} from 'react';



const ProjectSummary = () => {
    return(
        <div className = ' col s12 m4 card z-depth-0 project-summary'>
            <div className = 'card-content grey-text text-darken-3'>
                <div className = 'card-image'>
                    <img src = 'https://place-hold.it/300x450'/>
                </div>
                <span className = "card-title"><h1></h1></span>
                <p>Posted by FirstName LastName </p>
                <p className = "grey-text"> Date  </p>
            </div>
        </div>
        
        
        

    )
}

export default ProjectSummary
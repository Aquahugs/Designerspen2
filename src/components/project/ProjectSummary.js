import React, {Component} from 'react';
import moment from 'moment'


const ProjectSummary = ({project}) => {
    return(
        <div className = ' col s12 m4 card z-depth-0 project-summary'>
            <div className = 'card-content grey-text text-darken-3'>
                <div className = 'card-image'>
                    <img src = 'https://place-hold.it/300x450'/>
                </div>
                <span className = "card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName} </p>
                <p className = "grey-text"> {moment(project.createdAt.toDate()).calendar()} </p>
            </div>
        </div>

    )
}

export default ProjectSummary
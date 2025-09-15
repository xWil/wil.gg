import React from 'react'
import styles from './project-card.css'

function createTag(tag) {
    return (
        <h3 className="project-tag">{tag}</h3>
    )
}

function projectCard({ projectLink, projectLogo, projectBanner, projectTitle, projectDescription, projectTags }) {
    return (
        <a href={projectLink} className="project-card" target="_blank" rel="noreferrer">
            <img className="project-banner" src={projectBanner} alt="project banner"/>
            <img className="project-logo" src={projectLogo} alt="project logo"/>
            <div className="project-info">
                <h1 className="project-title">{projectTitle}</h1>
                <h2 className="project-description">{projectDescription}</h2>
                <div className="project-tags">
                    {projectTags.map(tag => createTag(tag))}
                </div>
            </div>
        </a>
    )
}

export default projectCard;
import React from 'react'
import styles from './current-project.css'

function currentProject() {
    return (
        <div className="project-card">
            <img className="project-image" src="/assets/current-project.png" alt="project screenshot"/>
            <div className="project-info">
                <h1 className="project-title">VLRScraper</h1>
                <h2 className="project-description">A web scraper and data analysis tool for Valorant esports game data found on vlr.gg</h2>
            </div>
        </div>
    )
}

export default currentProject;
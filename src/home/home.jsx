import React from 'react'
import styles from './home.css'

import ProfileCard from './profile-card/profile-card.jsx'
import CurrentProject from "./current-project/current-project";

function home() {
    return (
        <div className="app">
            <div className="star-container">
                <div className="stars"></div>
                <div className="title-container">
                    <h1 className="title">wil.gg</h1>
                    <h2 className="subtitle">my portfolio</h2>
                </div>
            </div>
            <div className="profile-container">
                <div className="card-container">
                    <h1 className="card-title">about me</h1>
                    <ProfileCard/>
                </div>
                <div className="card-container">
                    <h1 className="card-title">current project</h1>
                    <CurrentProject/>
                </div>
            </div>
            <div className="divider">
                <div className="divider-line"></div>
                <h1 className="divider-text">projects</h1>
                <div className="divider-line"></div>
            </div>
        </div>
    )
}

export default home
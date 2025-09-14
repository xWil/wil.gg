import React from 'react'
import styles from './profile-card.css'

function profileCard() {
    return (
        <div className="profile-card">
            <img className="profile-picture" src="/assets/pfp.gif" alt="profile"/>
            <div className="profile-info">
                <div className="profile-topline">
                    <h1 className="profile-title">Hiya, I'm wil</h1>
                    <div className="profile-links">
                        <a href="https://github.com/xWil" target="_blank" rel="noreferrer">
                            <img className="profile-link" src="/assets/github-icon.svg" alt="github"/>
                        </a>
                        <a href="https://discord.com/users/774392801521041439" target="_blank" rel="noreferrer">
                            <img className="profile-link" src="/assets/discord-icon.svg" alt="discord"/>
                        </a>
                    </div>
                </div>
                <h2 className="profile-description">I'm a java dev based in the United Kingdom working a few different personal projects.</h2>
            </div>
        </div>
    )
}

export default profileCard;
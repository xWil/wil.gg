import React from 'react'
import styles from './project-list.css'

import ProjectCard from './project-card/project-card.jsx'

function projectList() {
    return (
        <div className="projects-container">
            <ProjectCard
                projectLink= {"https://github.com/xWil/wil.gg"}
                projectLogo={"/assets/projects/wilgg/wilgg-logo.png"}
                projectBanner={"/assets/projects/wilgg/wilgg-banner.png"}
                projectTitle={"wil.gg"}
                projectDescription={"The website you're on right now!"} projectTags={["web"]}/>
            <ProjectCard
                projectLink= {"https://www.spigotmc.org/resources/xcommands.113183/"}
                projectLogo={"/assets/projects/xcommands/xcommands-logo.png"}
                projectBanner={"/assets/projects/xcommands/xcommands-banner.png"}
                projectTitle={"xCommands"}
                projectDescription={"Custom command creator for Minecraft servers, built using spigot."} projectTags={["java", "spigot"]}/>
        </div>
    )
}

export default projectList;
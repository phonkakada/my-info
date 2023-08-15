import React , {useState , useEffect} from "react";
import './myprojectstyle.css';

const Project = () => {
    useEffect(()=>{
        document.title = "My Projects"
    })
    return (
        <>
        <ProjectCard />
        </>
    )
}

const ProjectCard = () =>{
    return(
        <>
        <div className="main">
            <div className="body-project">
                <div className="myproject-lable">
                    <div className="dot"></div>
                    <p className="myproject-txt">My Project</p>
                </div>
                <div className="main-card">
                    <div className="card"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project;
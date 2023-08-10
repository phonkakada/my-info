import React , {useState , useEffect} from "react";

const Project = () => {
    useEffect(()=>{
        document.title = "My Projects"
    })
    return (
        <>
        <p>This is my project</p>
        </>
    )
}

export default Project;
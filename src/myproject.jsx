import React , {useState , useEffect} from "react";
import './myprojectstyle.css';
import {Personal_Web} from './database';

const personal = new Personal_Web();

const getAmount = personal.getProject();
const getProjectData = personal.getProjectData();

const Project = () => {
const [ProjectAmount , setAmountProject] = useState(0);
const [ArrayData , setArrayData] = useState(new Map())

    useEffect(()=>{
        document.title = "My Projects";
        getAmount.then((e)=>{
            if (e !== undefined){
                setAmountProject(e);
            }
        })
        getProjectData.then((e) => {
                setArrayData(e)
        })
    })
    return (
        <>
        <div className="project-main">
            <div className="body-project">
                <div className="myproject-lable">
                    <div className="dot"></div>
                    <p className="myproject-txt">My Project</p>
                </div>
                <AllProject Amount={ProjectAmount} Array={ArrayData} />
            </div>
        </div>
        </>
    )
}


const AllProject = ({Amount , Array}) => {
    let ProjectComponents = [];
    for (let i = 0 ; i < Amount ; i++){
        ProjectComponents.push(<BoxProject key={i} Array={Array[i]} />)
    }
    return(
        <div>
            
            {ProjectComponents.map((projectComponent , index) => (
                <div key={index} className="boxpro">
                {projectComponent}
                </div>
            ))}
        </div>
    )
}

const BoxProject = ({Array}) => {
    if (Array !== undefined){
        return (
            <>
            <div className="project-main-card">
                        <div className="project-card">
                            <div className="left-card-project">
                                <div className="left-card-content">
                                    <p className="projectName">{Array.get("Name")}</p>
                                    <p className="projectRole">{Array.get("Role")}</p>
                                    <p className="projectDescription">{Array.get("Technology")}</p>
                                </div>
                            </div>
                            <div className="right-card-project">
                                <p className="status">{Array.get("Status")}</p>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default Project;
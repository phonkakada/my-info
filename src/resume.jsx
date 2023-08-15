import React ,{useEffect , useState} from "react";
import { Link } from "react-router-dom"
import './resumestyle.css';
import {Personal_Web} from "./database";
import { render } from "react-dom";

const personal = new Personal_Web();

const Resume = () => {
        const [CVLink , setCVLink] = useState("NULL");
        const [AmountExper , setAmountExper] = useState(0);
        const [AmountEducation , setAmountEducation] = useState(0);
        const [ExperDatas , setExperDatas] = useState([]);

        // const InfoValue = personal.getInfo();
        // const ExperAmount = personal.getExpe();
        // const EducationAmount = personal.getEducation();
        // const ExperData = personal.getExperData();
       
            useEffect(()=>{
                console.log("HELLO")
                document.title = "My Resume"
    
                // ExperAmount.then((e)=>{
                //     setAmountExper(e);
                // })
                
                // InfoValue.then((e)=>{
                //     setCVLink(e.get("Link_CV"));
                // })
                // EducationAmount.then((e)=>{
                //     setAmountEducation(e)
                // })
                // ExperData.then((e)=>{
                //    setExperDatas(e)
                // })
            })

    return (
        <>
            <div className="mainResume">
                <div className="resume-bluedot">
                    <i className="dot"></i>
                    <p className="resume-dot">Resume</p>
                </div>
                <center>
                    <div className="body-resume">
                        <div className="exper-down">
                            <h4 className="experiance">Experiance</h4>
                            <button className="download-cv" onClick={()=>{
                                window.location.href=CVLink;
                            }}>Download CV</button>
                        </div>
                        <BoxExper Amount={AmountExper} />
                        <h4 className="experiance-lable">Educations</h4>
                        <BoxEducation
                            Amount={AmountEducation}
                        />
                    </div>
                    <ProfessionalSkill />

                </center>
            </div>
        </>
    )
}

const BoxExper = ({Amount , ArrayData}) => {
    const boxComponents = [];
    for (let i = 0; i < Amount; i++) {
      boxComponents.push(<Box key={i} />);
    }
    return (
        <div>
          {boxComponents.map((boxComponent, index) => (
            <div key={index} className="BoxExper">
              {boxComponent}
            </div>
          ))}
        </div>
      );
}

const Box = ({Data}) => {
    return (
        <>
            <div className="experiance-box">
                <div className="left-box">
                    <div className="left-box-content">
                        <h4 className="date">{0}</h4>
                        <p className="position"><i class="bi bi-person-badge-fill"></i>&nbsp;&nbsp;{0}</p>
                        <p className="company-name"><i class="bi bi-bank"></i>&nbsp;&nbsp;{0}</p>
                        <p className="company-locat"><i class="bi bi-geo-alt"></i>&nbsp;&nbsp;{0}</p>
                    </div>
                </div>
                <div className="right-box">
                    <div className="right-box-content">
                        <p className="describtion">{0}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const BoxEducation = ({Amount}) => {
    const EducationBox = [];

    for (let i = 0 ; i < Amount ; i++){
        EducationBox.push(<Education key={i} />)
    }
    return (
        <div>
          {EducationBox.map((EducationBox, index) => (
            <div key={index} className="BoxExper">
              {EducationBox}
            </div>
          ))}
        </div>
      );
}

const Education = ({ year, position, unversity_name, university_locat, describetions }) => {
    return (
        <>
            <Box
                year={year}
                position={position}
                company_name={unversity_name}
                company_loca={university_locat}
                describetions={describetions}
            />
        </>
    )
}

const ProfessionalSkill = () => {
    return (
        <>
            <div className="skill-box">
                <div className="skill-language-box">
                    <div className="skill-main">
                        <br></br>
                        <br></br>
                        <h4 className="skill">Professional skillset</h4>
                        <div className="skillbox-content">
                            <div className="skill-items">
                                <div className="dotdot"></div>
                                <p className="skill-item"> Flutter</p>
                                <div className="dotdot"></div>
                                <p className="skill-item">React JS</p>
                            </div>
                            <div className="skill-items">
                                <div className="dotdot"></div>
                                <p className="skill-item">HTML</p>
                                <div className="dotdot"></div>
                                <p className="skill-item">CSS</p>
                            </div>
                            <div className="skill-items">
                                <div className="dotdot"></div>
                                <p className="skill-item">JAVA</p>
                            </div>
                        </div>
                    </div>
                    <h4 className="language">Languages</h4>
                    <div>
                    <div className="skill-items">
                                <div className="dotdot"></div>
                                <p className="skill-item"> Khmer (Native)</p>
                                <div className="dotdot"></div>
                                <p className="skill-item">English (Meduim)</p>
                            </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Resume;
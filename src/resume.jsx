import React from "react";
import './resumestyle.css';

const Resume = () => {
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
                            <button className="download-cv">Download CV</button>

                        </div>
                        <Box
                            year={"2021-07-08"}
                            position={"Student"}
                            company_name={"Royal University of Phnom Penh"}
                            company_loca={"Phnom Penh"}
                            describetions={"Hello"}
                        />
                        <h4 className="experiance-lable">Educations</h4>
                        <Education
                            year={"2021-2025"}
                            position={'Student'}
                            unversity_name={'RUPP'}
                            university_locat={'Phnom Penh'}
                            describetions={"HIIIII"}
                        />
                    </div>
                    <ProfessionalSkill />

                </center>
            </div>
        </>
    )
}

const Box = ({ year, position, company_name, company_loca, describetions }) => {
    return (
        <>
            <div className="experiance-box">
                <div className="left-box">
                    <div className="left-box-content">
                        <h4 className="date">{year}</h4>
                        <p className="position"><i class="bi bi-person-badge-fill"></i>&nbsp;&nbsp;{position}</p>
                        <p className="company-name"><i class="bi bi-bank"></i>&nbsp;&nbsp;{company_name}</p>
                        <p className="company-locat"><i class="bi bi-geo-alt"></i>&nbsp;&nbsp;{company_loca}</p>
                    </div>
                </div>
                <div className="right-box">
                    <div className="right-box-content">
                        <p className="describtion">{describetions}</p>
                    </div>
                </div>
            </div>
        </>
    )
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
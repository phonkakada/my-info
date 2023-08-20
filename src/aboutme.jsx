import React , {useState , useEffect} from "react"
import { Link } from "react-router-dom"
import {Personal_Web} from "./database";

const personal = new Personal_Web();
const AboutMe = () => {
    const [FirstName , setFirstName] = useState("NULL");
    const [LastName , setLastName] = useState("NULL");
    const [Position , setPosition] = useState("NULL");
    const [ProfileLink , setProfileLink] = useState("NULL")
    const [GithubLink , setGithubLink] = useState("NULL")
    const [TelegramLink , setTelegramLink] = useState("NULL")
    const [LinkedinLink , setLinkedinLink] = useState("NULL")
    const [PhoneNumber , setPhoneNumber] = useState("NULL")
    const [FacebookLink , setFacebookLink] = useState("NULL")
    const [Description , setDescription] = useState("NULL")

    useEffect( ()=>{
      document.title = "About Me"
      const mapValue = personal.getInfo();
      mapValue.then((e)=>{
        setFirstName(e.get("FirstName"))
        setLastName(e.get("LastName"))
        setPosition(e.get("Position"))
        setProfileLink(e.get("Profile_Link"))
        setFacebookLink(e.get("Facebook_Link"))
        setGithubLink(e.get("Github_Link"))
        setPhoneNumber(e.get("Phone_Number"))
        setTelegramLink(e.get("Telegram_Link"))
        setLinkedinLink(e.get("Linkedin"))
        setDescription(e.get("Description"))
      })
    })

    if (ProfileLink === "NULL"){
      return (
        <>
        <div className="loading">
          <p className="loading-lable">Loading ...</p>
        </div>
        </>
      )
    }
    return(
      <>
  <div className='main'>
      <div className='left'> </div>
      <div className='card'>
          <div className='left-card'>
            <div className='myinfo'>
            <center>
              <img src= {ProfileLink} className='Profile' alt="myprofile"></img>
                <p className='name'>
                  {FirstName} <br></br>{LastName}
                </p>
                <div className='line'></div>
                <p className='position'>{Position}</p>
              </center>
            </div>
            <div className='SocialMedia'>
              <div className='social-content'>
                <a className='fa fa-facebook' href={FacebookLink} target="_blank"  id='social-menu'></a>
                <a className='fa fa-github' id='social-menu' href={GithubLink} target="_blank" ></a>
                <a className='fa fa-linkedin' id='social-menu'  href={LinkedinLink} target="_blank" ></a>
                <a className='fa fa-telegram' id='social-menu'  href={TelegramLink} target="_blank" ></a>
                <a className='fa fa-phone' id='social-menu' href={`tel:${PhoneNumber}`}></a>
              </div>
            </div>
          </div>
          <div className='right-card'>
              <div className='right-card-content'>
              <p className='hello'>Hello</p>
              <p className='whoiam'>Here's Who I am & What I do</p>
              <div className='resume-project'>
                <Link to="/resume"><button className='resume'>Resume</button></Link>
                <Link to="/project"><button className='project'>Project</button></Link>
              </div>
              <p id="description"></p>
              </div>
          </div>
        </div>
  </div>
      </>
    )
  }
  let j = 0;
  let newText = "";
  const doc = document.getElementById("description");
  const Text = "HEllo my name is Kakada";
  const TextAnima = () =>{
  if (doc){
    if (j < Text.length){
      newText += Text.charAt(j)
      doc.innerHTML = newText;
      j++;
    } 
  }
}
TextAnima();
export default AboutMe;
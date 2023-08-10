import React ,{useState , useEffect} from "react";
import './footerstyle.css';
import {Personal_Web} from "./database";

const personal = new Personal_Web();

 const Footer = () => {
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
    const [Year , setYear] = useState("NULL")
    const [Email , setEmail] = useState("NULL")

    useEffect( ()=>{
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
        setYear(e.get("Year"))
        setEmail(e.get("Email"))
      })
    })
    return (
        <>
        <footer>
            <div className="mainFooter">
                <div className="credit">
                <p>&copy;{`${Year} ${FirstName} ${LastName}`} </p>
                </div>
                <div className="contact">
                    <div className="phone" >
                        <center>
                            <p>Call</p>
                            <a className="phone-num" href={`tel:${PhoneNumber}`}>{PhoneNumber}</a>
                        </center>
                        
                    </div>
                    <div className="email">
                        <center>
                        <p>Email</p>
                        <a className="email-mail" href={`mailto:${Email}`}>{Email}</a>
                        </center>
                    </div>
                    <div className="another-contact">
                        <center><p>Follow</p></center>
                        <center>
                        <div className="socialmedia">
                            <a className="fa fa-facebook" href={FacebookLink} target="_blank" id="social-item"></a>
                            <a className="fa fa-github" href={GithubLink} target="_blank" id="social-item"></a>
                            <a className="fa fa-linkedin" href={LinkedinLink} target="_blank" id="social-item"></a>
                            <a className="fa fa-telegram" href={TelegramLink} target="_blank" id="social-item"></a>
                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
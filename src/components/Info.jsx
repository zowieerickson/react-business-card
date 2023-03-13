import Headshot from '../assets/erickson-headshot.jpg'
import EmailIcon from '../assets/email-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'

function Info() {
    return (
        <header className="header">
            <img src={Headshot} className="header__hero" alt="Headshot of Zowie Erickson smiling" />
            <div className="header__container">
                <div className="header__copy">
                    <h1 className="header__name">Zowie Erickson</h1>
                    <h4 className="header__job-title">Frontend Developer</h4>
                    <a className="header__portfolio underline-animation" href="https://zowieerickson.netlify.app/">zowieerickson.netlify.app</a>
                </div>
                <div className="header__cta-buttons">
                    <a href="mailto:zowie.erickson@gmail.com"><button className="btn email"><img src={EmailIcon} alt="Email icon" />Email</button></a>
                    <a href=""><button className="btn linkedin"><img src={LinkedinIcon} className="filter-blue" alt="Linkedin icon" />LinkedIn</button></a>
                </div>
            </div>
        </header>
    )
}

export default Info
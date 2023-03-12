import Headshot from '../assets/erickson-headshot.jpg'
import EmailIcon from '../assets/icon.svg'
import LinkedinIcon from '../assets/Vector.png'

function Info() {
    return (
        <header className="header">
            <img src={Headshot} className="header__hero" alt="Headshot of Zowie Erickson smiling" />
            <div className="header__container">
                <div className="header__copy">
                    <h1 className="header__name">Zowie Erickson</h1>
                    <h4 className="header__job-title">Frontend Developer</h4>
                    <a className="header__portfolio" href="https://zowieerickson.netlify.app/">zowieerickson.netlify.app</a>
                </div>
                <div className="header__cta-buttons">
                    <button className="btn email"><img src={EmailIcon} alt="Email icon" />Email</button>
                    <button className="btn linkedin"><img src={LinkedinIcon} alt="Linkedin icon" />LinkedIn</button>
                </div>
            </div>
        </header>
    )
}

export default Info
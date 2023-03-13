import TwitterIcon from '../assets/twitter-icon.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import GithubIcon from '../assets/github-icon.svg'

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li><a href="https://twitter.com/ZowieErickson" target="_blank"><img src={TwitterIcon} alt="Twitter icon" /></a></li>
                <li><a href="https://www.instagram.com/zowieerickson/" target="_blank"><img src={InstagramIcon} alt="Instagram icon" /></a></li>
                <li><a href="https://github.com/zowieerickson" target="_blank"><img src={GithubIcon} alt="Github icon" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer;
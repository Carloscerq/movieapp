//FontAwesome
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
    //TODO : COLOCAR LINK LINKEDIN
    return (
        <div className="footerWrapper">
            <div className="footerItem footerAbout">
                <h4 className="footerAboutTitle">Sobre o site</h4>
                <div className="footerAboutTextWrapper">
                    <span className="footerAboutText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus vestibulum facilisis. Suspendisse imperdiet et lectus eu scelerisque. Quisque interdum, nibh vel viverra aliquet, orci purus placerat felis, a vestibulum justo felis quis lectus.
                    </span>
                </div>
            </div>
            <div className="footerItem">
                <div className="footerReturnTop">
                    <h4 className="footerReturnTopText">Volte ao início</h4>
                    <a href="#">
                        <FontAwesomeIcon icon={faArrowCircleUp} className="fa-3x footerReturnTopIcon" />
                    </a>
                </div>
            </div>
            <div className="footerItem">
                <div className="footerSocialMedia">
                    <h4>Social Media</h4>
                    <div className="footerSocialMediaIconsWrapper">
                        <a href="https://github.com/Carloscerq/movie-albuns-site">
                            <FontAwesomeIcon icon={faGithubSquare} color="White" className="fa-2x footerSocialMediaIcon" />
                        </a>
                        <a href="https://www.linkedin.com/in/carlos-eduardo-5153991aa/">
                            <FontAwesomeIcon icon={faLinkedin} color="White" className="fa-2x footerSocialMediaIcon" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
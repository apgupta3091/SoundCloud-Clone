import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <a  href='https://github.com/apgupta3091' target="_blank"><FontAwesomeIcon className="icon-links" icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/anujgupta19/" target="_blank"><FontAwesomeIcon className="icon-links" icon={faLinkedin}></FontAwesomeIcon></a>
            <a  href="#" target="_blank"><FontAwesomeIcon className="icon-links" icon={faAngellist}></FontAwesomeIcon></a>
            
        </footer>
    );
}

export default Footer;

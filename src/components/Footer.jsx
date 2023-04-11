import React from "react";
import footerStyle from "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="footerinfo">
            <p className="footertext">bs as, arg.</p>
            <div className="footersocials">
                <p className="footertext"><a href="https://www.instagram.com/lucasrosvs/" target="_blank">INSTAGRAM</a></p>
                <p className="footertext">|</p>
                <p className="footertext"><a href="mailto:lvcasrosas@gmail.com">LVCASROSAS@GMAIL.COM</a></p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
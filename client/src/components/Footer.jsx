import React from 'react'
import Logo from "../img/logo.jpg";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Cppyright © 2023 ♥️ made with <b>React.js and Node.js</b>.
            </span>
        </footer>
    )
}

export default Footer
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from "assets/svg/logo.svg"

function Header() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        if (menu === true) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <>
            <header>
                <div id="innerWrap" className="row m-0 justify-content-between">
                    <div className="col-5 col-md-6 pl-5 align-self-center">
                        <div id="logo">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-5 col-md-6 pr-5 align-self-center">
                        <div id="nav">
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/news"><li>News</li></Link>
                                <Link to="/contact-us"><li>Contacts</li></Link>
                                <Link to="/donate"><li>Donate</li></Link>
                            </ul>
                        </div>
                        <div id="mobileNav" onClick={handleMenu}>
                            {
                                menu ? (
                                    <span className="fas fa-times"></span>
                                ) : (
                                    <span className="fas fa-bars"></span>
                                )
                            }
                        </div>
                    </div>
                    {
                        menu ? (
                            <div className="col-12 bg_primary" id="mobileMenu">
                                <div>
                                    <ul>
                                        <Link to="/"><li onClick={handleMenu}>Home</li></Link>
                                        <Link to="/about"><li onClick={handleMenu}>About</li></Link>
                                        <Link to="/news"><li onClick={handleMenu}>News</li></Link>
                                        <Link to="/contact-us"><li onClick={handleMenu}>Contacts</li></Link>
                                        <Link to="/donate"><li onClick={handleMenu}>Donate</li></Link>
                                    </ul>
                                </div>
                            </div>
                        ) : ('')
                    }

                </div>
            </header>

            <div id="contentBg" className="col-12">
                <div id="contentBgWrap" className="col-sm-12 col-md-10">
                </div>
            </div>
        </>
    )
}

export default Header
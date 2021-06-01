import React, { useState, useEffect } from "react"
import LogoWhite from "assets/svg/logo-white.svg"

function Footer() {
    const [year, setYear] = useState('')

    useEffect(() => {
        var d = new Date()
        setYear(d.getFullYear())
    }, [year])

    return (
        <>
            <div className="col-12 bg_secondary py-5 text_primary" id="contactsection">
                <div className="text-center">
                    <h1>
                        Contact Us
                        </h1>
                    <p>
                        <span className="fas fa-phone"></span>
                        <span> +254 20 4546 100</span>
                    </p>

                    <a href="mailto:">
                        <p>
                            <span className="fas fa-envelope"></span>
                            <span> info@carriegreatfoundation.org</span>
                        </p>
                    </a>
                </div>
            </div>
            <footer className="col-12 bg_tertiary py-5">
                <div className="text-center">
                    <img src={LogoWhite} alt="" width="50px" />
                    <p className="text-white m-0 text-sm">
                        © {year !== '' ? year : ''}
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
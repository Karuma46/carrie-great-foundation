import React, {useState, useEffect} from "react"
import LogoWhite from "assets/svg/logo-white.svg"

function Footer(){
    const [year, setYear] = useState('')

    useEffect(() => {
        var d = new Date()
        setYear(d.getFullYear())
    },[year])

    return(
        <>
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
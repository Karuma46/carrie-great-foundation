import {Link} from "react-router-dom"
import Logo from "assets/svg/logo.svg"

function Header(){
    return(
        <>
            <header>
                <div id="innerWrap" className="row m-0 justify-content-between">
                    <div className="col-5 col-md-6 pl-5 align-self-center">
                        <div id="logo">
                            <Link to="/">
                                <img src={Logo} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-5 col-md-6 pr-5 align-self-center">
                        <div id="nav">
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/"><li>News</li></Link>
                                <Link to="/"><li>Contacts</li></Link>
                                <Link to="/"><li>Donate</li></Link>
                            </ul>
                        </div>
                        <div id="mobileNav">
                            <span className="fas fa-bars"></span>
                        </div>
                    </div>
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
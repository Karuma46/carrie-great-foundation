import {Link} from "react-router-dom"
import Logo from "assets/svg/logo.svg"

function Landing(){
    return(
        <>
            <div className="row m-0" id="header">
                <div className="col-12" id="header_top">
                    <div id="header_topWrap">
                        <div id="logoWrap">
                            <img src={Logo} alt=""/>
                        </div>
                        <hr/>
                        <nav>
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About</li></Link>
                                <Link to="/"><li>News</li></Link>
                                <Link to="/"><li>Contacts</li></Link>
                                <Link to="/"><li>Donate</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-12" id="header_bottom">
                    <div id="header_bottomWrap">
                        <div id="quote">
                            <p>
                                There is hope, even when your brain tells you there isn't.
                            </p>
                            <span>
                                - John Green
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
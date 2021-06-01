import { Switch, Route, Link } from 'react-router-dom'

import Header from "components/header"
import Footer from "components/footer"
import NewsPost from "pages/newsPost"
import Pic2 from "assets/img/pic2.jpg"

export const NewsSection = () => {
    return (
        <>
            <div className="col-md-10 col-sm-12 mx-auto" id="newsSection">
                <div className="col-11 mx-auto mb-5">
                    <h1 className="text_primary text-center">News</h1>
                </div>
                <div className="col-sm-10 col-md-8 col-lg-6 mb-5" >
                    <div className="col-lg-10 col-12 mx-auto" id="post">
                        <div className="postPic">
                            <img src={Pic2} alt="" />
                        </div>
                        <Link to="/news/title">
                            <h2 className="text_primary">This is a heading for a news post for Carrie Great Foundation</h2>
                        </Link>
                        <p>
                            We give hope to the hopeless and promote education and empowerment of young people in Kenya through therapy, training, community outreach and partnership with other like-minded organizations
                            </p>
                        <span>June 1, 2021</span>
                    </div>
                </div>
                <div className="col-sm-10 col-md-8 col-lg-6 mb-5" >
                    <div className="col-lg-10 col-12 mx-auto" id="post">
                        <div className="postPic">
                            <img src={Pic2} alt="" />
                        </div>
                        <Link to="/news/title">
                            <h2 className="text_primary">This is a heading for a news post for Carrie Great Foundation</h2>
                        </Link>
                        <p>
                            We give hope to the hopeless and promote education and empowerment of young people in Kenya through therapy, training, community outreach and partnership with other like-minded organizations
                            </p>
                        <span>June 1, 2021</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const News = () => {
    return (
        <>
            <Header />
            <div className="row m-0" id="content">
                <Switch>
                    <Route exact path="/news" component={NewsSection} />
                    <Route exact path="/news/:title" component={NewsPost} />
                </Switch>
            </div>
            <Footer />
        </>
    )
}

export default News
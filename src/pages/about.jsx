import Header from "components/header"
import AboutImage from "assets/img/hero-img.jpg"
import Pic1 from "assets/img/pic1.jpg"
import Footer from "components/footer"

function About() {
    return (
        <>
            <Header />
            <div className="row m-0" id="content">
                <div className="col-md-10 col-sm-12 mx-auto" id="aboutsection">
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div className="px-3">
                            <h1 className="text_primary">About CGF</h1>
                            <p>
                                We give hope to the hopeless and promote education and empowerment of young people in Kenya through therapy, training, community outreach and partnership with other like-minded organizations
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div className="bg_secondary" id="aboutImg">
                            <img src={AboutImage} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-12 bg_primary mt-5" id="valueWrap">
                    <div className="col-md-10 col-sm-12 p-0 mx-auto" id="valuesection">
                        <div className="col-sm-0 col-md-4 col-lg-6 p-0 bg_secondary" id="valuesBg">
                            <img src={Pic1} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 pr-3 text-right py-5">
                            <div className="my-5">
                                <h2 className="text_secondary">Vision</h2>
                                <p className="text_white">
                                    Give Hope to the Hopeless.
                                </p>
                            </div>

                            <div className="my-5">
                                <h2 className="text_secondary">Mission</h2>
                                <p className="text_white">
                                    To Help Victims of Depression and Vulnerable children smile again.
                                </p>
                            </div>

                            <div className="my-5">
                                <h2 className="text_secondary">Core Values</h2>
                                <p className="text_white">
                                    In achieving its vision and fulfilling its mission, the Foundation will adhere to the following values:
                                </p>
                            </div>

                            <div className="my-5">
                                <ul>
                                    <li>Integrity</li>
                                    <li>Commitment & Compassion</li>
                                    <li>Accountability & Transparency</li>
                                    <li>Empowerment</li>
                                    <li>Teamwork</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto my-5" id="objectivesection">
                    <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
                        <h1 className="text-center">Objectives</h1>
                        <p>Through its existence, the Organisation shall seek to realize the following objectives:</p>
                        <ul>
                            <li>
                                - To help victims of depression get the right interventions process to overcome mental health challenges
                            </li>
                            <li>
                                - To conduct seminars and workshops to sensitize people on mental health
                            </li>
                            <li>
                                - To help the vulnerable children access the professional care
                            </li>
                            <li>
                                - Offer empowerment and enterprenuer courses to equip the vulnerable and rescued young people
                            </li>
                        </ul>
                    </div>
                </div>



                <Footer />

            </div>

        </>
    )
}

export default About
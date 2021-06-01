import Header from "components/header"
import Footer from "components/footer"
import pic2 from "assets/img/pic2-crop.jpg"
import ContactForm from "components/contactForm"

const Contact = () => {
    return (
        <>
            <Header />
            <div className="row m-0" id="content">
                <div className="col-md-10 col-sm-12 mx-auto" id="contactSection">
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div>
                            <h1 className="text_primary">Contact Us</h1>
                            <p>
                                We give hope to the hopeless and promote education and empowerment of young people in Kenya through therapy.
                            </p>
                        </div>
                        <div id="contactsImg" className="my-5">
                            <img src={pic2} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
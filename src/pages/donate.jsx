import Header from "components/header"
import Footer from "components/footer"
import pic2 from "assets/img/pic2-crop.jpg"

const Donate = () => {
    return (
        <>
            <Header />
            <div className="row m-0" id="content">
                <div className="col-md-10 col-sm-12 mx-auto" id="contactSection">
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div>
                            <h1 className="text_primary">Donate</h1>
                            <p>
                                We give hope to the hopeless and promote education and empowerment of young people in Kenya through therapy.
                            </p>

                            <p>
                                How to donate:
                                <ol>
                                    <li>Send a donation to Mpesa Paybill Number 12345 and Account Number 67890. The Name is Carrie Great Foundation.</li>
                                    <li>Write a cheque to Carrie Great Foundation and send to P.O Box 123456 - 00100 or deliver to our Office at Carrie House</li>
                                    <li>Make a deposit to Carrie Great Foundation Account No 1234567890123, Money Bank, City Branch</li>
                                </ol>
                            </p>

                            <p>
                                Thank you for your generosity. Every shilling donated goes in aid to needy kids.
                            </p>
                        </div>

                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-5">
                        <div id="contactsImg" className="my-5">
                            <img src={pic2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Donate
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/contact-us/contact-form"
import Seo from "../components/seo"
import { Location, Mail, Phone } from "../utils/imgImport"

const ContactUs = ({ location }) => {
  const [showForm, setShowFrom] = useState(false)
  useEffect(() => {
    setShowFrom(false)
  }, [location])

  return (
    <Layout>
      <Seo title="Contact Us" />
      <section className="section contact-us">
        <div className="heading">
          <h1 className="text-center">
            {showForm ? "Send us an email" : "Hello. Get in touch with us."}
          </h1>
          <p className="heading-body">
            {showForm
              ? `Got questions, complaints or want to be our distributor? Send us amail – we’ll get back to you soon.`
              : "We’re here to help, so drop us a line."}
          </p>
        </div>
        {showForm || location.state?.leadForm === true ? (
          <ContactForm />
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <span className="icon">
                  <img src={Location} alt="location" />
                </span>
                <h2 className="title">Where to buy</h2>
                <p className="content">Find a retailer near you</p>
                <div className="mt-auto">
                  <Link to="/where-to-buy" className="btn btn-black">
                    Find a store
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <span className="icon">
                  <img src={Mail} alt="mail" />
                </span>
                <h2 className="title">Email Us</h2>
                <p className="content">
                  Send us a mail – we’ll get back to you soon.
                </p>
                <div className="mt-auto">
                  <button
                    to="/where-to-buy"
                    className="btn btn-black"
                    onClick={() => setShowFrom(true)}
                  >
                    Talk to us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-card">
                <span className="icon">
                  <img src={Phone} alt="phone" />
                </span>
                <h2 className="title">Call Number</h2>
                <p className="content">
                  If you would like to speak to us directly, please call us at:
                </p>
                <div className="mt-auto">
                  <p className="phone-number">0817-388-9872</p>
                  <p className="available-time">
                    8:00am - 6:00pm (WAT) Mon to Sat
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default ContactUs

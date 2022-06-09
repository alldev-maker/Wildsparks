import React, { useReducer, useCallback, useRef } from "react"
import validator from "validator"
import emailjs from "@emailjs/browser"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"

import { FormInput, FormTextarea } from "../common/FormControl"

const ContactForm = () => {
  const [state, setState] = useReducer(
    (old, action) => ({ ...old, ...action }),
    {
      firstname: { value: "", error: "" },
      lastname: { value: "", error: "" },
      phone: { value: "", error: "" },
      email: { value: "", error: "" },
      message: "",
      country: "",
      region: "",
    }
  )
  const { firstname, lastname, phone, email, message, country, region } = state
  const handleFirstnameChange = useCallback(e => {
    setState({
      firstname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handleLastnameChange = useCallback(e => {
    setState({
      lastname: {
        value: e.target.value,
        error: e.target.value.length >= 3 ? "" : "Length must be at least 3",
      },
    })
  }, [])
  const handlePhoneChange = useCallback(e => {
    setState({
      phone: {
        value: e.target.value,
        error: validator.isMobilePhone(e.target.value)
          ? ""
          : "Invalid phone number",
      },
    })
  }, [])
  const handleEmailChange = useCallback(e => {
    setState({
      email: {
        value: e.target.value,
        error: validator.isEmail(e.target.value) ? "" : "Invalid email address",
      },
    })
  }, [])
  const handleMessage = useCallback(e => {
    e.preventDefault()
    setState({ [e.target.name]: e.target.value })
  }, [])

  const formData = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_i2jg5ko",
        "template_4sz24gg",
        formData.current,
        "D1OLt5brP_ScTUeYP"
      )
      .then(response => {
        console.log("SUCCESS!", response.status, response.text)
      })
      .catch(err => {
        console.log("FAILED...", err)
      })
  }

  return (
    <div className="contact-form">
      <form ref={formData} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <FormInput
              type="text"
              name="firstname"
              value={firstname.value}
              onChange={handleFirstnameChange}
              placeholder="John"
              error={firstname.error}
              label="First Name"
              required
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              name="lastname"
              value={lastname.value}
              onChange={handleLastnameChange}
              placeholder="Dolapo"
              error={lastname.error}
              label="Last Name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormInput
              type="email"
              name="email"
              value={email.value}
              onChange={handleEmailChange}
              placeholder="john@address.com"
              error={email.error}
              label="Email Address"
              required
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="tel"
              name="phone"
              value={phone.value}
              onChange={handlePhoneChange}
              placeholder="+234   |   0901 234 5678"
              error={phone.error}
              label="Phone Number"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="form-label">Country</p>
            <CountryDropdown
              className="dropdown form-control"
              value={country}
              onChange={val => setState({ country: val })}
              blacklist={[
                "CG",
                "CD",
                "KP",
                "TF",
                "GS",
                "SH",
                "BQ",
                "HM",
                "VC",
                "UM",
              ]}
            />
          </div>
          <div className="col-md-6">
            <p className="form-label">City</p>

            <RegionDropdown
              blankOptionLabel="No country selected"
              defaultOptionLabel="Select a city"
              className="dropdown form-control"
              country={country}
              value={region}
              onChange={val => setState({ region: val })}
            />
          </div>
        </div>
        <FormTextarea
          type="text"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Enter your message"
          label="Message"
        />
        <button type="submit" className="btn btn-black">
          Submit Form
        </button>
      </form>
    </div>
  )
}
export default ContactForm

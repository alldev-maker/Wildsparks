import React, { useState } from "react"

const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <button
        type="button"
        className="accordion__toggler w-100 d-flex justify-content-between align-items-center"
        onClick={() => handleClick()}
      >
        <span className="question">{question}</span>
        <span className="sign" />
      </button>

      <div
        className="accordion__content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  )
}

export default Accordion

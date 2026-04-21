import { useState } from 'react'
import Button from './Button'

const initialValues = {
  name: '',
  email: '',
  company: '',
  message: ''
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
            />
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={values.company}
              onChange={handleChange}
              placeholder="Your company"
            />
          </label>

          <label className="full">
            Project brief
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Tell us a bit about the project"
              rows="6"
              required
            />
          </label>
        </div>

        <div className="form-footer">
          <p>We usually reply within 1 to 2 business days.</p>
          <Button type="submit">Send message</Button>
        </div>
      </form>

      {submitted ? (
        <div className="form-message">
          <strong>Thanks, your message is on the way.</strong>
          <p>We will get back to you soon.</p>
        </div>
      ) : null}
    </div>
  )
}

export default ContactForm

import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'

function ContactPage() {
  return (
    <div className="page">
      <section className="contact-layout">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you are building and we will help shape the next step."
            text="If you already have a Figma file, great. If not, a rough outline is more than enough to start."
          />

          <div className="contact-notes">
            <div>
              <span>Email</span>
              <strong>hello@northstar.studio</strong>
            </div>
            <div>
              <span>Timeline</span>
              <strong>Usually 2 to 6 weeks</strong>
            </div>
            <div>
              <span>Best fit</span>
              <strong>Marketing sites and product pages</strong>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  )
}

export default ContactPage

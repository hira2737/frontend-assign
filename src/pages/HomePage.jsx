import Button from '../components/Button'
import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'

const services = [
  {
    title: 'Brand-first websites',
    text: 'Websites that feel polished, clear, and easy to trust.',
    label: '01'
  },
  {
    title: 'Product storytelling',
    text: 'Landing pages with the right pace, structure, and clarity.',
    label: '02'
  },
  {
    title: 'Fast frontends',
    text: 'Clean React builds with reusable parts and solid responsive behavior.',
    label: '03'
  }
]

const stats = [
  { value: '32+', label: 'projects launched' },
  { value: '4 weeks', label: 'average first version' },
  { value: '96%', label: 'clients who come back' }
]

function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Frontend design studio</p>
          <h1 className="hero-title">
            We design and build websites for brands that want something sharper than the usual.
          </h1>
          <p className="hero-text">
            Northstar brings together strong visual direction, clean frontend work, and
            thoughtful structure to make every page feel solid on any screen.
          </p>
          <div className="hero-actions">
            <Button to="/work">View work</Button>
            <Button to="/services" variant="secondary">
              See services
            </Button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-note">
            <span>How we work</span>
            <strong>Simple systems, sharp details, no extra clutter</strong>
          </div>
        </div>
      </section>

      <section className="stats-row">
        {stats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Services"
          title="The process stays simple, but the end result feels properly finished."
          text="We keep things focused so the design stays strong and the frontend stays easy to work with."
        />

        <div className="card-grid three">
          {services.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="split-banner">
        <div>
          <p className="eyebrow">Why teams come back</p>
          <h2>Clear visuals, smart structure, and frontend code that still feels clean later on.</h2>
        </div>
        <div>
          <p>
            Good design is not just about looking polished. It should guide attention, make
            the message easy to follow, and still feel smooth on mobile. That is the part we care about.
          </p>
          <Button to="/contact" variant="secondary">
            Start a project
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

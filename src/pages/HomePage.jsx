import Button from '../components/Button'
import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'

const services = [
  {
    title: 'Brand-led websites',
    text: 'Web experiences that look premium without feeling stiff or overdesigned.',
    label: '01'
  },
  {
    title: 'Product storytelling',
    text: 'Landing pages with pacing, contrast, and clarity that help people stay engaged.',
    label: '02'
  },
  {
    title: 'Fast frontends',
    text: 'Clean React builds with reusable pieces, responsive behavior, and room to scale.',
    label: '03'
  }
]

const stats = [
  { value: '32+', label: 'launches shipped' },
  { value: '4 weeks', label: 'average first release' },
  { value: '96%', label: 'client return rate' }
]

function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Creative frontend studio</p>
          <h1 className="hero-title">
            We build clean, high-trust websites for brands that are done looking generic.
          </h1>
          <p className="hero-text">
            Northstar blends visual direction, solid frontend work, and conversion-focused
            structure into websites that feel polished on every screen.
          </p>
          <div className="hero-actions">
            <Button to="/work">See our work</Button>
            <Button to="/services" variant="secondary">
              What we do
            </Button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-note">
            <span>Selected approach</span>
            <strong>Simple systems, better detail, less clutter</strong>
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
          eyebrow="Core services"
          title="Built like a real studio team, not a template machine."
          text="We keep the process focused so the design stays strong and the frontend stays reliable."
        />

        <div className="card-grid three">
          {services.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="split-banner">
        <div>
          <p className="eyebrow">Why clients stay</p>
          <h2>Sharp visuals, honest structure, and a frontend that is actually easy to maintain.</h2>
        </div>
        <div>
          <p>
            Good design is not just about looking expensive. It should guide attention, make
            the message obvious, and still feel smooth on mobile. That is the part we care about.
          </p>
          <Button to="/contact" variant="secondary">
            Start the conversation
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage

import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'

const serviceBlocks = [
  {
    title: 'Design direction',
    text: 'Wireframes, layout rhythm, component patterns, and a look that feels clear from the first screen.',
    label: 'Strategy'
  },
  {
    title: 'Frontend build',
    text: 'Responsive React code with real structure, simple logic, and styling that is easy to keep consistent.',
    label: 'Build'
  },
  {
    title: 'Content pacing',
    text: 'Headlines, supporting sections, and call-to-actions arranged so the story never feels flat.',
    label: 'Content'
  },
  {
    title: 'Launch support',
    text: 'Final cleanup, deployment prep, and practical tweaks after handoff so nothing feels rushed.',
    label: 'Delivery'
  }
]

function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero compact">
        <p className="eyebrow">Services</p>
        <h1>Everything we use to turn a design file into a working product site.</h1>
        <p>
          The process stays pretty lean. Good structure first, better visuals second, and
          clean implementation all the way through.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What is included"
          title="A simple stack with enough depth for a production-ready handoff."
        />

        <div className="card-grid two">
          {serviceBlocks.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="process-strip">
        <div className="process-step">
          <span>01</span>
          <h3>Discover</h3>
          <p>We map the pages, sort the sections, and figure out what really matters.</p>
        </div>
        <div className="process-step">
          <span>02</span>
          <h3>Design</h3>
          <p>Once the layout direction is clear, the visual language starts to tighten up.</p>
        </div>
        <div className="process-step">
          <span>03</span>
          <h3>Build</h3>
          <p>Reusable components, responsive polish, and the little spacing details that help.</p>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

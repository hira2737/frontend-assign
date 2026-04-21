import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'

const serviceBlocks = [
  {
    title: 'Design direction',
    text: 'Wireframes, layout rhythm, component patterns, and a visual direction that feels clear from the start.',
    label: 'Strategy'
  },
  {
    title: 'Frontend build',
    text: 'Responsive React code with clean structure, simple logic, and styling that stays consistent.',
    label: 'Build'
  },
  {
    title: 'Content flow',
    text: 'Headlines, supporting sections, and calls to action arranged so the page never feels flat.',
    label: 'Content'
  },
  {
    title: 'Launch support',
    text: 'Final cleanup, deployment prep, and practical tweaks after handoff so the launch feels smooth.',
    label: 'Delivery'
  }
]

function ServicesPage() {
  return (
    <div className="page">
      <section className="page-hero compact">
        <p className="eyebrow">Services</p>
        <h1>Everything we use to turn a design file into a site that feels ready to ship.</h1>
        <p>
          The process stays lean. We focus on structure first, then visuals, then a clean build all the way through.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What we cover"
          title="A simple setup with enough depth to feel solid in production."
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
          <h3>Plan</h3>
          <p>We map the pages, sort the sections, and figure out what matters most.</p>
        </div>
        <div className="process-step">
          <span>02</span>
          <h3>Design</h3>
          <p>Once the layout is clear, we tighten the visual direction and the details.</p>
        </div>
        <div className="process-step">
          <span>03</span>
          <h3>Build</h3>
          <p>Reusable components, responsive polish, and the small spacing fixes that make it feel done.</p>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Aster Health',
    category: 'Health platform',
    text: 'A landing page built around trust, calmer motion, and shorter paths to action.',
    accent: 'linear-gradient(135deg, #f08f5f, #f3d08d)'
  },
  {
    title: 'Pine & Peak',
    category: 'Outdoor brand',
    text: 'A warmer editorial feel with big type, product highlights, and strong mobile behavior.',
    accent: 'linear-gradient(135deg, #325e4b, #9dc08b)'
  },
  {
    title: 'Mono Capital',
    category: 'Finance studio',
    text: 'A tighter, minimal interface with restrained color and a stronger content hierarchy.',
    accent: 'linear-gradient(135deg, #1f2a44, #7aa0d2)'
  }
]

function WorkPage() {
  return (
    <div className="page">
      <section className="page-hero compact">
        <p className="eyebrow">Recent work</p>
        <h1>Three recent projects with very different moods, all built with the same level of care.</h1>
        <p>
          The visual direction changes from project to project. The thinking underneath stays
          the same: strong hierarchy, calm spacing, and clean implementation.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Projects"
          title="A few examples of how the system can shift without losing consistency."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="quote-panel">
        <p>
          "What stood out most was how finished everything felt. Desktop looked great,
          but mobile still had the same confidence."
        </p>
        <span>Client feedback after launch</span>
      </section>
    </div>
  )
}

export default WorkPage

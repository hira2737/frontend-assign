import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Aster Health',
    category: 'Health platform',
    text: 'A landing experience built around trust, motion restraint, and short paths to conversion.',
    accent: 'linear-gradient(135deg, #f08f5f, #f3d08d)'
  },
  {
    title: 'Pine & Peak',
    category: 'Outdoor brand',
    text: 'A warmer editorial style with large type, product highlights, and strong mobile behavior.',
    accent: 'linear-gradient(135deg, #325e4b, #9dc08b)'
  },
  {
    title: 'Mono Capital',
    category: 'Finance studio',
    text: 'A tighter, minimal interface with restrained color and stronger content hierarchy.',
    accent: 'linear-gradient(135deg, #1f2a44, #7aa0d2)'
  }
]

function WorkPage() {
  return (
    <div className="page">
      <section className="page-hero compact">
        <p className="eyebrow">Selected work</p>
        <h1>Three recent directions with very different moods, all built on the same frontend discipline.</h1>
        <p>
          The visual language changes project to project. The thinking underneath stays
          steady: strong hierarchy, calm spacing, clean implementation.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Projects"
          title="A few examples of how the system bends without losing consistency."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="quote-panel">
        <p>
          "What stood out was how finished everything felt. The desktop version looked
          great, but the mobile version still had the same confidence."
        </p>
        <span>Client note after launch</span>
      </section>
    </div>
  )
}

export default WorkPage

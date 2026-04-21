function ProjectCard({ title, category, text, accent }) {
  return (
    <article className="project-card">
      <div className="project-thumb" style={{ background: accent }}>
        <span>{category}</span>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default ProjectCard

function InfoCard({ title, text, label }) {
  return (
    <article className="info-card">
      {label ? <span className="info-label">{label}</span> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default InfoCard

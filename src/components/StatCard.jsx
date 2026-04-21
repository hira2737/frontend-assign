function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default StatCard

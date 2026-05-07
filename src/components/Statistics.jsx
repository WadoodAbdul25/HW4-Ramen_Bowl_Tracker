import StatisticLine from './StatisticLine'

const CategoryCard = ({ title, total, rows, mostPopular, grandTotal }) => {
  const pct = (count) => `${Math.round((count / grandTotal) * 100)}%`

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        <span className="stat-card-total">{total} orders</span>
      </div>
      <table>
        <tbody>
          {rows.map(({ label, count }) => (
            <StatisticLine
              key={label}
              label={label}
              value={count}
              pct={pct(count)}
              highlight={label === mostPopular}
            />
          ))}
        </tbody>
      </table>
      <div className="most-popular">
        Most popular: <span>{mostPopular}</span>
      </div>
    </div>
  )
}

const Statistics = ({
  thin, thick, udon,
  tofu, chicken, beef,
  mild, medium, hot,
  totalNoodle, totalMeat, totalSpice, grandTotal
}) => {
  if (grandTotal === 0) {
    return (
      <div className="stats-section">
        <h2>Order Statistics</h2>
        <p className="no-data">No data collected yet</p>
      </div>
    )
  }

  const maxNoodle = Math.max(thin, thick, udon)
  const mostNoodle = thin === maxNoodle ? 'Thin' : thick === maxNoodle ? 'Thick' : 'Udon'

  const maxMeat = Math.max(tofu, chicken, beef)
  const mostMeat = tofu === maxMeat ? 'Tofu' : chicken === maxMeat ? 'Chicken' : 'Beef'

  const maxSpice = Math.max(mild, medium, hot)
  const mostSpice = mild === maxSpice ? 'Mild' : medium === maxSpice ? 'Medium' : 'Hot'

  return (
    <div className="stats-section">
      <h2>Order Statistics</h2>

      <div className="grand-total-banner">
        <span className="grand-total-label">Total Orders</span>
        <span className="grand-total-value">{grandTotal}</span>
      </div>

      <div className="stat-cards-grid">
        <CategoryCard
          title="Noodle Type"
          total={totalNoodle}
          grandTotal={grandTotal}
          mostPopular={mostNoodle}
          rows={[
            { label: 'Thin',  count: thin },
            { label: 'Thick', count: thick },
            { label: 'Udon',  count: udon },
          ]}
        />
        <CategoryCard
          title="Meat Type"
          total={totalMeat}
          grandTotal={grandTotal}
          mostPopular={mostMeat}
          rows={[
            { label: 'Tofu',    count: tofu },
            { label: 'Chicken', count: chicken },
            { label: 'Beef',    count: beef },
          ]}
        />
        <CategoryCard
          title="Spice Level"
          total={totalSpice}
          grandTotal={grandTotal}
          mostPopular={mostSpice}
          rows={[
            { label: 'Mild',   count: mild },
            { label: 'Medium', count: medium },
            { label: 'Hot',    count: hot },
          ]}
        />
      </div>
    </div>
  )
}

export default Statistics

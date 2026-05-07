const StatisticLine = ({ label, value, pct, highlight }) => (
  <tr className={highlight ? 'highlight-row' : ''}>
    <td className="td-label">{label}</td>
    <td className="td-count">{value}</td>
    {pct !== undefined && <td className="td-pct">{pct}</td>}
  </tr>
)

export default StatisticLine

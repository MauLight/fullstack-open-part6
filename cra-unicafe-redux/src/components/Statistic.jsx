
export const Statistic = ({ text, counter }) => (
  <tr className="statistic-text">
    <td>{`${text}: `}</td>
    <td>{counter}</td>
  </tr>
)
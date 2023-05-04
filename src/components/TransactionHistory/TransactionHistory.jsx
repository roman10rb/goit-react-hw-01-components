import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({ items }) => {
    return <div className={css.container}> <table className={css.transactionHistory}>
  <thead>
    <tr className={css.type}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
{items.map(({ id, type, amount, currency }) => {
     return <tr className={css.value} key={id}>
         <td>{type}</td>
         <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    })}
  </tbody>
</table></div>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
  }
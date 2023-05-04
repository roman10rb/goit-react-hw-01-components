import css from './Statistics.module.css';
import PropTypes from 'prop-types'; 

export const Statistic = ({stats, title } ) => {

return  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2> } 

  <ul className={css.statList}>
          {stats.map(({id, label, percentage}) => {
return <li className={css.item} key={id}>
        <span className={css.label}>{label}</span>
        <span className="percentage">{percentage}%</span>
        </li>
    })}
  </ul>
</section>
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,  
    }),
  ),
};

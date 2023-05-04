import css from './Statistics.module.css';
export const Statistic = ({stats, title } ) => {

return  <section className={css.statistics}>
    {title && <h2 className="title">{title}</h2> } 

  <ul className="stat-list">
          {stats.map(({id, label, percentage}) => {
return <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </li>
    })}
  </ul>
</section>
}
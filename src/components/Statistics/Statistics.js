import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.stat}>
        Good: <span className={css.number}>{good}</span>
      </li>
      <li className={css.stat}>
        Neutral: <span className={css.number}>{neutral}</span>
      </li>
      <li className={css.stat}>
        Bad: <span className={css.number}>{bad}</span>
      </li>
      <li className={css.stat}>
        Total: <span className={css.number}>{total}</span>
      </li>
      <li className={css.stat}>
        Positive Feedback:{' '}
        <span className={css.number}>{positivePercentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;

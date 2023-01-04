import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            onClick={onLeaveFeedback}
            type="button"
            name={option}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;

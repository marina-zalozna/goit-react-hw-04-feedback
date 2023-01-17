import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
    {options.map((option) => {
      return (
        <button
          className={style.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    })}
  </div>
);
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
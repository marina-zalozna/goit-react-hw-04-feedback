import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={style.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
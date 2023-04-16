import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = ({ value, text }) => {
  const pathColor = (() => {
    switch (true) {
      case value >= 75:
        return '#21d07a';
      case value <= 75 && value >= 25:
        return '#d2d531';
      case value <= 25 && value !== 0:
        return '#db2360';
      default:
        return 'gray';
    }
  })();

  const trailColor = (() => {
    switch (true) {
      case value >= 75:
        return '#204529';
      case value <= 75 && value >= 25:
        return '#423d0f';
      case value <= 25 && value !== 0:
        return '#571435';
      default:
        return 'gray';
    }
  })();

  return (
    <CircularProgressbar
      value={value}
      text={text}
      background
      backgroundPadding={6}
      styles={buildStyles({
        textColor: 'white',
        pathColor: pathColor,
        trailColor: trailColor,
        backgroundColor: '#081c22',
        textSize: '35px',
      })}
    ></CircularProgressbar>
  );
};

Progressbar.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Progressbar;

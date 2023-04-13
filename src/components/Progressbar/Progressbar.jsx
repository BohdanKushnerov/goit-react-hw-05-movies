import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Canvas = styled(CircularProgressbar)`
  position: absolute;
  top: 303px;
  left: 5px;

  width: 47px;
`;

const Progressbar = ({ value, text }) => {
  const pathColor =
    value >= 75
      ? '#21d07a'
      : value <= 25
      ? value === 0
        ? 'gray'
        : '#db2360'
      : '#d2d531';

  const trailColor =
    value >= 75
      ? '#204529'
      : value <= 25
      ? value === 0
        ? 'gray'
        : '#571435'
      : '#423d0f';

  return (
    <Canvas
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
    ></Canvas>
  );
};

Progressbar.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Progressbar;

import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const TrandingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const Item = styled.li`
  position: relative;
  max-width: 220px;
  text-align: center;
`;

export const Title = styled.h2`
  color: black;
`;

const Canvas = styled(CircularProgressbar)`
  position: absolute;
  top: 303px;
  left: 5px;

  width: 47px;
`;

const Progressbar = ({ value, text }) => {
  const pathColor = value >= 75 ? '#21d07a' : '#d2d531';
  const trailColor = value >= 75 ? '#204529' : '#423d0f';

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

//Proptypes

export default Progressbar;

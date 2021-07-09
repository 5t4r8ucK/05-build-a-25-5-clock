import styled, { css } from 'styled-components';
import Label from './label.js';
import Length from './length.js';

const TimerWrapper = styled.section`
  // Display and Box Model
  font-family: 'Ruda', sans-serif;
  text-align: center;
`;

const Timer = () => {

  return (
    <TimerWrapper id='timer'>
      <Label id='timer-label'>
        Session
      </Label>
      <Length id='time-left'>
        25:00
      </Length>
    </TimerWrapper>
  );
};

export default Timer;
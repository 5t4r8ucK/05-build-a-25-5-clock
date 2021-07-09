import styled, { css } from 'styled-components';
import Label from './label.js';
import Number from './number.js';

const TimerWrapper = styled.section`
  // Display and Box Model
  font-size: 2em;
`;

const Timer = () => {

  return (
    <TimerWrapper id='timer'>
      <Label id='timer-label'>
        Session
      </Label>
      <Number id='time-left'>
        25:00
    </TimerWrapper>
  );
};

export default Timer;
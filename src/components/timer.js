import styled from 'styled-components';
import * as variables from './variables.js';
import Label from './label.js';
import Length from './length.js';
import StyledSection from './styledSection.js';
import { TYPE_BREAK } from './constants.js';

const TimerSection = styled(StyledSection)`
  // Display and Box Model
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  text-align: center;
`;

const TimerLength = styled(Length)`
  //Typography
  font-size: ${variables.fonts.sizes.h1};
`

const Timer = ({timeLeft, timerType}) => {

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <TimerSection id='timer'>
      <Label id='timer-label'>
        {timerType === TYPE_BREAK ? 'currently on a break' : 'currently in a session'}
      </Label>
      <TimerLength id='time-left'>
        {`${mins}:${seconds}`}
      </TimerLength>
    </TimerSection>
  );
};

export default Timer;
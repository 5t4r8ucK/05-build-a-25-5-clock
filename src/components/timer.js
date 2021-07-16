import styled from 'styled-components';
import * as variables from './variables.js';
import Label from './label.js';
import Length from './length.js';
import StyledSection from './styledSection.js';

const TimerSection = styled(StyledSection)`
  &#timer {
    // Display and Box Model
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TimerLength = styled(Length)`
  &#time-left {
    //Typography
    font-size: ${variables.fonts.sizes.h1};
    width: 550px;
  }
`

const Timer = ({timerLength, timerType}) => {
  return (
    <TimerSection id='timer'>
      <Label id='timer-label'>
        {timerType === 'break' ? 'currently on a break' : 'currently in a session'}
      </Label>
      <TimerLength id='time-left'>
        {timerLength}
      </TimerLength>
    </TimerSection>
  );
};

export default Timer;
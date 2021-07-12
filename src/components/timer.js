import styled from 'styled-components';
import * as variables from './variables.js';
import Label from './label.js';
import Length from './length.js';

const TimerSection = styled.section`
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
  }
`

const Timer = () => {
  return (
    <TimerSection id='timer'>
      <Label id='timer-label'>
        Currently in Session
      </Label>
      <TimerLength id='time-left'>
        25:00
      </TimerLength>
    </TimerSection>
  );
};

export default Timer;
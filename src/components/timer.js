import styled, { css } from 'styled-components';

const TimerContainer = styled.section`
  // Display and Box Model
  font-size: 2em;
`;

const Timer = () => {

  return (
    <TimerContainer id='timer'>
      <div id='timer-label'>
        Session
      </div>
      <div id='time-left'>
        25:00
      </div>
    </TimerContainer>
  );
};

export default Timer;
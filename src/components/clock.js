import styled, { css } from 'styled-components';
import Controls from './controls.js';
import Title from './title.js';
import Timer from './timer.js';

const ClockWrapper = styled.article`
  // Display and Box Model
  grid-template-areas:
    'title'
    'timer'
    'controls';
  display: grid;
  height: 100vh;
  padding: 5rem;
  width: 100vw;
`;

const Clock = () => {

  return (
    <ClockWrapper id='clock'>
      <Title id='title'>
        Pomodoro Timer
      </Title>
      <Timer />
      <Controls />
    </ClockWrapper>
  );
};

export default Clock;
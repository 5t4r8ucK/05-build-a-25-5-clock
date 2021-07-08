import styled, { css } from 'styled-components';
import Title from './title.js';
import Timer from './timer.js';
import Controls from './controls.js';

const ClockContainer = styled.article`
  // Display and Box Model
  grid-template-areas:
    'title'
    'timer'
    'controls';
  display: grid;
  height: 100vh;
  width: 100vw;
`;

const Clock = () => {

  return (
    <ClockContainer id='clock'>
      <Title id='title'>
        Pomodoro Timer
      </Title>
      <Timer />
      <Controls />
    </ClockContainer>
  );
};

export default Clock;
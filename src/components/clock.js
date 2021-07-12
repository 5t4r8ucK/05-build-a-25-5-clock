import styled from 'styled-components';
import * as variables from './variables.js';
import Controls from './controls.js';
import Title from './title.js';
import Timer from './timer.js';

const ClockWrapper = styled.article`
  // Display and Box Model
  background: ${variables.colors.gradient.session};
  grid-template-areas:
    'title'
    'timer'
    'controls';
  grid-template-rows: auto 1fr auto;
  display: grid;
  height: 100vh;
  padding: 5rem;
  width: 100vw;
  // Typography
  color: ${variables.colors.color.white.w_100};
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
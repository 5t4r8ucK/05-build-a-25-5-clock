import React, {useState} from 'react';
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
  // State
  const initialClockState = {
    timer: {
      label: 'currently in a session',
      length: '25:00',
      type: '',
    }
  }
  const [timerLabel, setTimerLabel] = useState(initialClockState.timer.label);
  const [timerLength, setTimerLength] = useState(initialClockState.timer.length);
  const [timerType, setTimerType] = useState(initialClockState.timer.type);

  return (
    <ClockArticle id='clock' className={timerType}>
      <Title id='title'>
        Pomodoro Timer
      </Title>
      <Timer
        timerLabel = {timerLabel}
        timerLength = {timerLength}
      />
      <Controls
        initialClockState = {initialClockState}
        setTimerLabel = {setTimerLabel}
        setTimerLength = {setTimerLength}
        setTimerType = {setTimerType}
      />
    </ClockArticle>
  );
};

export default Clock;
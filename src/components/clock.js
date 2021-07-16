import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from './variables';
import StyledArticle from './styledArticle';
import Controls from './controls';
import Title from './title';
import Timer from './timer';
import {initialClockState} from './constants';

const ClockArticle = styled(StyledArticle)`
  &#clock {
    // Position
    // Display and Box Model
    background: linear-gradient(
      0deg,
      ${variables.colors.color.turquoise},
      ${variables.colors.color.green},
      ${variables.colors.color.orange},
      ${variables.colors.color.red}
    );
    background-size: 100% 400%;
    grid-template-areas:
      'title'
      'timer'
      'controls';
    grid-template-rows: auto 1fr auto;
    // Typography
    color: ${variables.colors.color.white.w_100};
    // Other
    animation-fill-mode: forwards;
  }
  &.session {
    // Display and Box Model
    animation-name: transitionToSession;
    animation-duration: 1s;
  }
  &.break {
    // Display and Box Model
    animation-name: transitionToBreak;
    animation-duration: 1s;
  }
  @keyframes transitionToBreak {
    from {
      background-position: top;
    }
    to {
      background-position: bottom;
    }
  }
  @keyframes transitionToSession {
    from {
      background-position: bottom;
    }
    to {
      background-position: top;
    }
  }
`;

const Clock = () => {
  const [timerLength, setTimerLength] = useState(initialClockState.length);
  const [timerType, setTimerType] = useState(initialClockState.type);

  return (
    <ClockArticle id='clock' className={timerType}>
      <Title id='title'>
        Pomodoro Timer
      </Title>
      <Timer
        timerLength = {timerLength}
        timerType = {timerType}
      />
      <Controls
        initialClockState = {initialClockState}
        setTimerLength = {setTimerLength}
        setTimerType = {setTimerType}
      />
    </ClockArticle>
  );
};

export default Clock;
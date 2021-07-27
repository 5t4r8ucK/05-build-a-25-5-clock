import React, { useState } from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import Playback from './playback.js';
import PhaseControl from './PhaseControl.js';
import StyledSection from './styledSection.js';
import { initialControlsState, initialClockState, TYPE_SESSION, TYPE_BREAK } from './constants';

const ControlsSection = styled(StyledSection)`
  &#controls {
    // Display and Box Model
    display: grid;
    gap: ${variables.sizes.gapWidth};
    grid-template-areas:
      'break-controls session-controls'
      'playback-controls playback-controls';
    grid-template-columns: auto auto;
  }
`;

const Controls = ({timerType, setTimerType, setTimeLeft, timeLeft}) => {

  const [breakLength, setBreakLength] = useState(initialControlsState.breakLength);
  const [isTimerPaused, setIsTimerPaused] = useState(initialControlsState.isTimerPaused);
  const [sessionLength, setSessionLength] = useState(initialClockState.sessionLength);

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      let minutes = sessionLength - 1;
      setSessionLength(minutes);
      if (timerType === TYPE_SESSION || timerType === '') {
        setTimeLeft(minutes * 60);
      }
    }
  };

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      let minutes = sessionLength + 1;
      setSessionLength(minutes);
      if (timerType === TYPE_SESSION || timerType === '') {
        setTimeLeft(minutes * 60);
      }
    }
  };

  const breakDecrement = () => {
    if (breakLength > 1) {
      let minutes = breakLength - 1;
      setBreakLength(minutes);
      if (timerType === TYPE_BREAK) {
        setTimeLeft(minutes * 60);
      }
    }
  };

  const breakIncrement = () => {
    if (breakLength < 60) {
      let minutes = breakLength + 1;
      setBreakLength(minutes);
      if (timerType === TYPE_BREAK) {
        setTimeLeft(minutes * 60);
      }
    }
  };

  return (
    <ControlsSection id='controls'>
      <PhaseControl
        isTimerPaused={isTimerPaused}
        length={breakLength}
        phaseName='break'
        decrement={breakDecrement}
        increment={breakIncrement}
      />
      <PhaseControl
        isTimerPaused={isTimerPaused}
        length={sessionLength}
        phaseName='session'
        decrement={sessionDecrement}
        increment={sessionIncrement}
      />
      <Playback
        timerType={timerType}
        setTimerType={setTimerType}
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        isTimerPaused={isTimerPaused}
        setIsTimerPaused={setIsTimerPaused}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        setTimeLeft={setTimeLeft}
        timeLeft={timeLeft}
      />
    </ControlsSection>
  );
};

export default Controls;
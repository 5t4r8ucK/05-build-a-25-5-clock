import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import Break from './break.js';
import Playback from './playback.js';
import Session from './session.js';
import StyledSection from './styledSection.js';
import {initialControlsState} from './constants';

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

const Controls = ({setTimerLength, setTimerType}) => {

  const [breakLength, setBreakLength] = useState(initialControlsState.breakLength);
  const [isTimerPaused, setIsTimerPaused] = useState(initialControlsState.isTimerPaused);
  const [sessionLength, setSessionLength] = useState(initialControlsState.sessionLength);

  return (
    <ControlsSection id='controls'>
      <Break
        breakLength = {breakLength}
        setBreakLength = {setBreakLength}
        isTimerPaused = {isTimerPaused}
      />
      <Session
        setTimerLength = {setTimerLength}
        isTimerPaused = {isTimerPaused}
        sessionLength = {sessionLength}
        setSessionLength = {setSessionLength}
      />
      <Playback
        setTimerLength = {setTimerLength}
        setTimerType = {setTimerType}
        breakLength = {breakLength}
        setBreakLength = {setBreakLength}
        isTimerPaused = {isTimerPaused}
        setIsTimerPaused = {setIsTimerPaused}
        sessionLength = {sessionLength}
        setSessionLength = {setSessionLength}
      />
    </ControlsSection>
  );
};

export default Controls;
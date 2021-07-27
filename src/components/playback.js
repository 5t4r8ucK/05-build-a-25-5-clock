import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import StyledButton from './styledButton.js';
import ControlsContainer from './controlsContainer';
import Audio from './audio';
import { initialControlsState, initialClockState, TYPE_SESSION, TYPE_BREAK } from './constants';

const PlaybackControls = styled(ControlsContainer)`
  // Display and Box Model
  gap: ${variables.sizes.gapWidth};
  grid-area: playback-controls;
  grid-template-areas:
    'start_stop reset volume';
  flex-direction: row;
`
const Playback = ({timerType, setTimerType, breakLength, setBreakLength, isTimerPaused, setIsTimerPaused, sessionLength, setSessionLength, timeLeft, setTimeLeft}) => {

  let audio = useRef(null);

  useEffect(() => {
    if (!isTimerPaused) {
      const timer = setInterval(() => {
        let newTimeLeft = timeLeft - 1;
        if (newTimeLeft === 0) {
          if (timerType !== TYPE_BREAK) {
            audio.current.play(); // play audio at 00:00
          }
        } else if (newTimeLeft === -1) {
          if (timerType === TYPE_BREAK) {
            setTimerType(TYPE_SESSION);
            newTimeLeft = sessionLength * 60;
          } else {
            setTimerType(TYPE_BREAK);
            newTimeLeft = breakLength * 60;
          }
        }
        setTimeLeft(newTimeLeft);
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  const handleClick = (action) => {
    switch (action) {
      case 'reset':
        setIsTimerPaused(initialControlsState.isTimerPaused);
        setBreakLength(initialControlsState.breakLength);
        setSessionLength(initialClockState.sessionLength);
        setTimerType(initialClockState.type);
        setTimeLeft(initialClockState.sessionLength * 60);
        audio.current.pause();
        audio.current.currentTime = 0;
        break;
      case 'start_stop':
        setIsTimerPaused(!isTimerPaused);
        break;
      case 'volume':
        audio.current.pause();
        audio.current.currentTime = 0;
        break;
      default:
        break;
    }
  }

  return (
    <PlaybackControls id='playback-controls'>
      <StyledButton
        gridArea='start_stop'
        id='start_stop'
        onClick={() => handleClick('start_stop')}
      >
        <i className={isTimerPaused ? 'fas fa-play' : 'fas fa-pause'}></i>
      </StyledButton>
      <StyledButton
        gridArea='reset'
        id='reset'
        onClick={() => handleClick('reset')}
      >
        <i className='fas fa-redo'></i>
      </StyledButton>
      <StyledButton
        gridArea='volume'
        id='volume'
        onClick={() => handleClick('volume')}
      >
        <i className='fas fa-volume-up'></i>
        <Audio
          id='beep'
          preload="auto"
          src='./sounds/Daybreak.mp3'
          ref={audio}
        />
      </StyledButton>
    </PlaybackControls>
  );
};

export default Playback;
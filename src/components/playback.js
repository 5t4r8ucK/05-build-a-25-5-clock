import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import StyledButton from './styledButton.js';
import ControlsContainer from './controlsContainer';
import Audio from './audio';

const PlaybackControls = styled(ControlsContainer)`
  &#playback-controls {
    // Display and Box Model
    gap: ${variables.sizes.gapWidth};
    grid-area: playback-controls;
    grid-template-areas:
      'start_stop reset volume';
    flex-direction: row;
  }
`

let newTimer;

const Playback = ({initialClockState, setTimerLabel, setTimerLength, setTimerType, initialControlsState, breakLength, setBreakLength, isTimerPaused, setIsTimerPaused, sessionLength, setSessionLength}) => {

  const initialPlaybackState = {
    playbackIcon: 'fas fa-play',
  }
  const [playbackIcon, setPlaybackIcon] = useState(initialPlaybackState.playbackIcon);

  let audio = useRef(null);

  const startTimer = (durationOne, durationTwo) => {
    durationOne = durationOne * 60; // total secs = # of mins * 60 secs
    durationTwo = durationTwo * 60; // total secs = # of mins * 60 secs

    let duration = durationOne;
    let minutes;
    let seconds;
    let interval;
    let isInSession = true;
    let timer = {};

    timer.resume = () => {
      interval = setInterval(() => {
        duration = duration - 1;
        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        if (duration <= 0) {
          isInSession = !isInSession;
          if (isInSession) {
            duration = durationOne + 1; // reset to session timer and 1 second so that the timer starts at the full duration
            setTimerLabel('currently in a session');
            setTimerType('session');
          } else {
            duration = durationTwo + 1; // reset to session timer and 1 second so that the timer starts at the full duration
            setTimerLabel('currently on a break');
            setTimerType('break');
            audio.current.play();
          }
        }
        const display = minutes + ':' + seconds; // concat mins and secs to '00:00' format
        setTimerLength(display);
      }, 1000);
    }
    timer.pause = () => {
      clearInterval(interval);
    }
    return timer;
  }

  const stopTimer = (timer) => {
    timer.pause();
  }

  const resumeTimer = (timer) => {
    timer.resume();
  }

  const handleClick = (action) => {
    switch (action) {
      case 'reset':
        if (newTimer !== undefined) {
          stopTimer(newTimer);
        }
        newTimer = undefined;
        setPlaybackIcon(initialPlaybackState.playbackIcon);
        setIsTimerPaused(initialControlsState.isTimerPaused);
        setBreakLength(initialControlsState.break.length);
        setSessionLength(initialControlsState.session.length);
        setTimerLabel(initialClockState.timer.label);
        setTimerLength(initialClockState.timer.length);
        setTimerType(initialClockState.timer.type);
        audio.current.pause();
        audio.current.currentTime = 0;
        break;
      case 'start_stop':
        if (newTimer === undefined) {
          newTimer = startTimer(sessionLength, breakLength);
        }
        if (isTimerPaused) {
          resumeTimer(newTimer);
          setPlaybackIcon('fas fa-pause');
          setIsTimerPaused(false);
        } else {
          stopTimer(newTimer);
          setPlaybackIcon('fas fa-play');
          setIsTimerPaused(true);
        }
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
        <i className={playbackIcon}></i>
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
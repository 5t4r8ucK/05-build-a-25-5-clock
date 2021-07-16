import React from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import { SquareButton } from './styledButton.js';
import Label from './label.js';
import Length from './length.js';
import ControlsContainer from './controlsContainer';

const SessionControls = styled(ControlsContainer)`
  &#session-controls {
    // Display and Box Model
    grid-area: session-controls;
    justify-self: left;
  }
`;

const SessionLabel = styled(Label)`
  &#session-label {
    // Display and Box Model
    grid-area: label;
  }
`

const SessionButton = styled(SquareButton)`
  // Display and Box Model
  align-self: center;

  &#session-decrement {
    // Display and Box Model
    grid-area: decrement;
    justify-self: right;
  }
  &#session-increment {
    // Display and Box Model
    grid-area: increment;
    justify-self: left;
  }
`

const SessionLength = styled(Length)`
  &#session-length {
    // Display and Box Model
    font-size: ${variables.fonts.sizes.h3};
    grid-area: length;
    min-width: 2em;
  }
`

const Session = ({setTimerLength, isTimerPaused, sessionLength, setSessionLength}) => {

  const handleClick = (action) => {
    let seconds = 0;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    switch (action) {
      case 'session-increment':
        if (isTimerPaused) {
          if (sessionLength < 60) {
            let minutes = sessionLength + 1;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setSessionLength(sessionLength + 1);
            setTimerLength(minutes + ':' + seconds);
          }
        }
        break;
      case 'session-decrement':
        if (isTimerPaused) {
          if (sessionLength > 1) {
            let minutes = sessionLength - 1;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setSessionLength(sessionLength - 1);
            setTimerLength(minutes + ':' + seconds);
          }
        }
        break;
      default:
        break;
    }
  }

  return (
    <SessionControls id='session-controls'>
      <SessionLabel id='session-label'>
        session
      </SessionLabel>
      <SessionButton
        id='session-decrement'
        onClick={() => handleClick('session-decrement')}
      >
        <i className="fas fa-minus"></i>
      </SessionButton>
      <SessionLength id="session-length">
        {sessionLength}
      </SessionLength>
      <SessionButton
        id='session-increment'
        onClick={() => handleClick('session-increment')}
      >
        <i className="fas fa-plus"></i>
      </SessionButton>
    </SessionControls>
  );
};

export default Session;
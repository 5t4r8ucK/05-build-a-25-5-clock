import React from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import { IncrementButton, DecrementButton } from './styledButton.js';
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

const SessionLength = styled(Length)`
  &#session-length {
    // Display and Box Model
    font-size: ${variables.fonts.sizes.h3};
    grid-area: length;
    min-width: 2em;
  }
`

const Session = ({setTimerLength, isTimerPaused, sessionLength, setSessionLength}) => {
  const decrement = () => {
    if (sessionLength > 1) {
      let minutes = sessionLength - 1;
      setSessionLength(minutes);
      setTimerLength(minutes.toString().padStart(2, '0') + ':00');
    }
  };

  const increment = () => {
    if (sessionLength < 60) {
      let minutes = sessionLength + 1;
      setSessionLength(minutes);
      setTimerLength(minutes.toString().padStart(2, '0') + ':00');
    }
  };

  return (
    <SessionControls id='session-controls'>
      <Label gridArea='label' id='session-label'>
        session
      </Label>
      <DecrementButton
        id='session-decrement'
        onClick={decrement}
        disabled={!isTimerPaused}
      >
        <i className="fas fa-minus"></i>
      </DecrementButton>
      <SessionLength id="session-length">
        {sessionLength}
      </SessionLength>
      <IncrementButton
        id='session-increment'
        onClick={increment}
        disabled={!isTimerPaused}
      >
        <i className="fas fa-plus"></i>
      </IncrementButton>
    </SessionControls>
  );
};

export default Session;
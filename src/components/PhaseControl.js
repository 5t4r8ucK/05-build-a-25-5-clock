import React from 'react';
import styled from 'styled-components';
import * as variables from './variables.js';
import { IncrementButton, DecrementButton } from './styledButton.js';
import Label from './label.js';
import Length from './length.js';
import ControlsContainer from './controlsContainer';

const PhaseContainer = styled(ControlsContainer)`
  // Display and Box Model
  grid-area: ${props => props.gridArea};
  justify-self: left;
`;

const PhaseLength = styled(Length)`
  // Display and Box Model
  font-size: ${variables.fonts.sizes.h3};
  grid-area: length;
  min-width: 2em;
`

const PhaseControl = ({isTimerPaused, length, phaseName, increment, decrement}) => {

  return (
    <PhaseContainer id={`${phaseName}-controls`} gridArea={`${phaseName}-controls`}>
      <Label gridArea='label' id={`${phaseName}-label`}>
        {phaseName}
      </Label>
      <DecrementButton
        id={`${phaseName}-decrement`}
        onClick={decrement}
        disabled={!isTimerPaused}
      >
        <i className="fas fa-minus"></i>
      </DecrementButton>
      <PhaseLength id={`${phaseName}-length`}>
        {length}
      </PhaseLength>
      <IncrementButton
        id={`${phaseName}-increment`}
        onClick={increment}
        disabled={!isTimerPaused}
      >
        <i className="fas fa-plus"></i>
      </IncrementButton>
    </PhaseContainer>
  );
};

export default PhaseControl;
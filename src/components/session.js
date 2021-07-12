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

const Session = () => {
  return (
    <SessionControls id='session-controls'>
      <SessionLabel id='session-label'>
        Session Length
      </SessionLabel>
      <SessionButton id='session-decrement'>
        <i className="fas fa-minus"></i>
      </SessionButton>
      <SessionLength id="session-length">
        25
      </SessionLength>
      <SessionButton id='session-increment'>
        <i className="fas fa-plus"></i>
      </SessionButton>
    </SessionControls>
  );
};

export default Session;
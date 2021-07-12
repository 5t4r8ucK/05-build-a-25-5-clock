import * as variables from './variables.js';
import { SquareButton } from './styledButton.js';
import Label from './label.js';
import Length from './length.js';
import ControlsContainer from './controlsContainer';

const BreakControls = styled(ControlsContainer)`
  &#break-controls {
    // Display and Box Model
    grid-area: break-controls;
    justify-self: right;
  }
`;

const BreakLabel = styled(Label)`
  &#break-label{
    // Display and Box Model
    grid-area: label;
  }
`

const BreakButton = styled(SquareButton)`
  // Display and Box Model
  align-self: center;

  &#break-decrement {
    // Display and Box Model
    grid-area: decrement;
    justify-self: right;
  }
  &#break-increment {
    // Display and Box Model
    grid-area: increment;
    justify-self: left;
  }
`

const BreakLength = styled(Length)`
  &#break-length {
    // Display and Box Model
    font-size: ${variables.fonts.sizes.h3};
    grid-area: length;
    min-width: 2em;
  }
`

const Break = () => {
  return (
    <BreakControls id='break-controls'>
      <BreakLabel id='break-label'>
        Break Length
      </BreakLabel>
      <BreakButton id='break-decrement'>
        <i className="fas fa-minus"></i>
      </BreakButton>
      <BreakLength id="break-length">
        5
      </BreakLength>
      <BreakButton id='break-increment'>
        <i className="fas fa-plus"></i>
      </BreakButton>
    </BreakControls>
  );
};

export default Break;
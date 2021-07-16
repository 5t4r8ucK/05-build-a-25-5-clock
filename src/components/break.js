import styled from 'styled-components';
import * as variables from './variables.js';
import { IncrementButton, DecrementButton } from './styledButton.js';
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

const BreakLength = styled(Length)`
  &#break-length {
    // Display and Box Model
    font-size: ${variables.fonts.sizes.h3};
    grid-area: length;
    min-width: 2em;
  }
`
const Break = ({breakLength, setBreakLength, isTimerPaused}) => {

  const handleClick = (action) => {
    switch (action) {
      case 'break-increment':
        if (isTimerPaused) {
          if (breakLength < 60) {
            setBreakLength(breakLength + 1);
          }
        }
        break;
      case 'break-decrement':
        if (isTimerPaused) {
          if (breakLength > 1) {
            setBreakLength(breakLength - 1);
          }
        }
        break;
      default:
        break;
    }
  }

  return (
    <BreakControls id='break-controls'>
      <Label gridArea='label' id='break-label'>
        break
      </Label>
      <DecrementButton
        id='break-decrement'
        onClick={() => handleClick('break-decrement')}
      >
        <i className="fas fa-minus"></i>
      </DecrementButton>
      <BreakLength id="break-length">
        {breakLength}
      </BreakLength>
      <IncrementButton
        id='break-increment'
        onClick={() => handleClick('break-increment')}
      >
        <i className="fas fa-plus"></i>
      </IncrementButton>
    </BreakControls>
  );
};

export default Break;